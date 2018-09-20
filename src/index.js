import jss from 'jss';

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

const createElements = classes =>
  Object.values(classes).map(className => {
    const el = document.createElement('div');
    el.className = className;
    return el;
  });

const animate = sheet => {
  (function run() {
    for (const name in sheet.classes) {
      sheet.getRule(name).prop('background', getRandomColor());
    }
    requestAnimationFrame(run);
  })();
};

const render = () => {
  const sheet = jss.createStyleSheet(createStyles(400), {link: true}).attach();
  const elements = createElements(sheet.classes);
  const fragment = document.createDocumentFragment();
  elements.forEach(fragment.appendChild, fragment);
  document.body.appendChild(fragment);
  animate(sheet);
};

render();
