export const render = renderObjects => {
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
