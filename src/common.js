import jss from 'jss';

export const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16)}`;

export const createStyles = amount =>
  new Array(amount).fill(null).reduce(
    (styles, style, i) => ({
      ...styles,
      [`box-${i}`]: {
        float: 'left',
        width: '20px',
        height: '20px',
        background: getRandomColor(),
        margin: '2px',
        border: '1px solid purple'
      }
    }),
    {}
  );

export const createElements = classNames =>
  classNames.map(className => {
    const el = document.createElement('div');
    el.className = className;
    return el;
  });

export const renderControls = renderObjects => {
  let remove;
  let amount = 100;

  const buttonRender = document.createElement('button');
  buttonRender.innerText = `Render ${amount}`;
  buttonRender.onclick = () => {
    if (remove) remove();
    remove = renderObjects(amount);
    amount += 100;
    buttonRender.innerText = `Render ${amount}`;
  };
  document.body.appendChild(buttonRender);

  const buttonClear = document.createElement('button');
  buttonClear.innerText = 'Clear';
  buttonClear.onclick = () => {
    if (!remove) return;
    remove();
    remove = null;
  };
  document.body.appendChild(buttonClear);
};

export const renderObjects = amount => {
  const sheet = jss.createStyleSheet(createStyles(amount), {link: true}).attach();
  const elements = createElements(Object.values(sheet.classes));
  const container = document.createElement('div');
  elements.forEach(container.appendChild, container);
  document.body.appendChild(container);

  const remove = () => {
    document.body.removeChild(container);
    sheet.detach();
  };

  const update = (rule, color) => {
    sheet.getRule(rule).prop('background-color', color);
  };

  return {remove, update};
};

export const raf = callback => {
  let running = true;

  (function run() {
    if (!running) return;
    callback();
    requestAnimationFrame(run);
  })();

  return () => {
    running = false;
  };
};
