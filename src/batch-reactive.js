import {renderControls, renderObjects, getRandomColor, raf} from './common';

const subscribe = (batches, callback) => {
  let index = 0;

  return raf(() => {
    callback(batches[index]);
    index = batches[index + 1] ? index + 1 : 0;
  });
};

// [[{rule: 'box-0': color: 'red'}, ...], [{rule: 'box-0': color: 'red'}, ...]]
const generateBatches = amount =>
  new Array(1e3).fill(null).map(() =>
    new Array(amount).fill(null).map((v, index) => ({
      rule: `box-${index}`,
      color: getRandomColor()
    }))
  );

renderControls(amount => {
  const {remove, update} = renderObjects(amount);
  const batches = generateBatches(amount);
  const unsubscribe = subscribe(batches, batch => {
    batch.forEach(({rule, color}) => {
      update(rule, color);
    });
  });
  return () => {
    unsubscribe();
    remove();
  };
});
