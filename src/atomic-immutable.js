import {fromJS} from 'immutable';
import {
  getRandomColor,
  createStyles,
  createElements,
  renderControls,
  renderObjects,
  raf
} from './common';
import random from 'lodash/random';

// Each sample is an update for one rule.
const generateSamples = amount =>
  // [{rule: 'box-0': color: 'red'}, {rule: 'box-1': color: 'red'}]
  new Array(amount).fill(null).map((v, index) => ({
    rule: `box-${index}`,
    color: getRandomColor()
  }));

// We are not handling removing/adding of items, only mutations of existing once.
const diff = (prevList, nextList, callback) => {
  nextList.forEach((item, index) => {
    if (item !== prevList.get(index)) {
      callback(item.get('rule'), item.get('color'));
    }
  });
};

renderControls(amount => {
  const {remove, update} = renderObjects(amount);
  let samples = fromJS(generateSamples(amount));

  const stop = raf(() => {
    const randomIndex = random(0, amount - 1);
    const nextSamples = samples.setIn([randomIndex, 'color'], getRandomColor());
    diff(samples, nextSamples, update);
    samples = nextSamples;
  });

  return () => {
    stop();
    remove();
  };
});
