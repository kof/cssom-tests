import jss from 'jss';
import {
  getRandomColor,
  createStyles,
  createElements,
  renderControls,
  renderObjects,
  raf
} from './common';
import random from 'lodash/random';

const subscribe = (samples, callback) => {
  let index = 0;

  return raf(() => {
    // Taking one update in each raf and updating the CSS  rule.
    callback(samples[index].rule, samples[index].color);
    index = samples[index + 1] ? index + 1 : 0;
  });
};

// Each sample is an update for one rule.
const generateSamples = amount =>
  // [{rule: 'box-0': color: 'red'}, {rule: 'box-1': color: 'red'}]
  new Array(amount).fill(null).map((v, index) => ({
    rule: `box-${random(0, amount - 1)}`,
    color: getRandomColor()
  }));

renderControls(amount => {
  const {remove, update} = renderObjects(amount);
  const samples = generateSamples(amount);
  const unsubscribe = subscribe(samples, update);
  return () => {
    unsubscribe();
    remove();
  };
});
