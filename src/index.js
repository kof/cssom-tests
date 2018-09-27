import jss from 'jss';
import {render as renderControls} from './controls';
import {Map} from 'immutable';

const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16)}`;

const createStyles = amount =>
  new Array(amount).fill(null).reduce(
    (styles, style, i) => ({
      ...styles,
      [`box-${i}`]: {
        float: 'left',
        width: '50px',
        height: '50px',
        background: getRandomColor(),
        margin: '10px',
        border: '1px solid purple'
      }
    }),
    {}
  );

const createElements = classNames =>
  classNames.map(className => {
    const el = document.createElement('div');
    el.className = className;
    return el;
  });

const renderObjects = amount => {
  const sheet = jss.createStyleSheet(createStyles(amount), {link: true}).attach();
  const elements = createElements(Object.values(sheet.classes));
  const container = document.createElement('div');
  elements.forEach(container.appendChild, container);
  document.body.appendChild(container);

  const remove = () => {
    document.body.removeChild(container);
    sheet.detach();
  };

  const update = data => {
    // [{rule: 'box-0': color: 'red'}]
    data.forEach(value => {
      let {rule, color} = value;
      if ('get' in value) {
        rule = value.get('rule');
        color = value.get('color');
      }
      sheet.getRule(rule).prop('background-color', color);
    });
  };

  return {remove, update};
};

const subscribe = (samples, callback) => {
  let subscribed = true;
  let index = 0;

  (function run() {
    if (!subscribed) return;
    callback(samples[index]);
    index = samples[index + 1] ? index + 1 : 0;
    requestAnimationFrame(run);
  })();

  return () => {
    subscribed = false;
  };
};

const generateSamplesPlain = amount =>
  // [[{rule: 'box-0': color: 'red'}], [{rule: 'box-0': color: 'red'}]]
  new Array(1e3).fill(null).map(() =>
    new Array(amount).fill(null).map((v, index) => ({
      rule: `box-${index}`,
      color: getRandomColor()
    }))
  );

renderControls(amount => {
  const {remove, update} = renderObjects(amount);
  const samples = generateSamplesPlain(amount);
  const unsubscribe = subscribe(samples, update);
  return () => {
    unsubscribe();
    remove();
  };
});

const generateSamplesImmutable = amount =>
  // [[{rule: 'box-0': color: 'red'}], [{rule: 'box-0': color: 'red'}]]
  new Array(1e3).fill(null).map(() =>
    new Array(amount).fill(null).map(
      (v, index) =>
        new Map({
          rule: `box-${index}`,
          color: getRandomColor()
        })
    )
  );

renderControls(amount => {
  const {remove, update} = renderObjects(amount);
  const samples = generateSamplesImmutable(amount);
  const unsubscribe = subscribe(samples, update);
  return () => {
    unsubscribe();
    remove();
  };
});
