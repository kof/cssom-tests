import jss from 'jss';
import {render as renderControls} from './controls';

const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16)}`;

const changes = new Array(1e5).fill(null).map(getRandomColor);

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

const animate = sheet => {
  let stop;
  let index = 0;

  const next = () => {
    const change = changes[index];
    if (changes.length > index) index++;
    else index = 0;
    return change;
  };

  (function run() {
    for (const name in sheet.classes) {
      sheet.getRule(name).prop('background-color', next());
    }
    if (!stop) requestAnimationFrame(run);
  })();

  return () => {
    stop = true;
  };
};

const renderObjects = amount => {
  const sheet = jss.createStyleSheet(createStyles(amount), {link: true}).attach();
  const elements = createElements(Object.values(sheet.classes));
  const container = document.createElement('div');
  elements.forEach(container.appendChild, container);
  document.body.appendChild(container);
  const stop = animate(sheet);

  return () => {
    stop();
    document.body.removeChild(container);
    sheet.detach();
  };
};

renderControls(renderObjects);
