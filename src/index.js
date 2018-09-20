import jss from 'jss';

const getRandomColor = () => `#${Math.floor(Math.random() * 0x1000000).toString(16)}`;

const changes = new Array(1e6).fill(null).map(getRandomColor);

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

  (function run() {
    for (const name in sheet.classes) {
      if (changes.length === 0) break;
      sheet.getRule(name).prop('background', changes.pop());
    }
    if (!stop && changes.length !== 0) requestAnimationFrame(run);
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

const renderControls = () => {
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
    remove();
    remove = null;
  };
  document.body.appendChild(buttonClear);
};

renderControls();
