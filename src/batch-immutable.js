import {fromJS} from 'immutable';
import random from 'lodash/random';
import {renderControls, renderObjects, getRandomColor, raf} from './common';

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
  const batches = fromJS(generateBatches(amount));
  const stop = raf(() => {
    const batch = batches.get(random(0, amount - 1));
    batch.forEach(item => {
      update(item.get('rule'), item.get('color'));
    });
  });
  return () => {
    stop();
    remove();
  };
});
