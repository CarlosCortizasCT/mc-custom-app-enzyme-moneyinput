process.env.ENABLE_NEW_JSX_TRANSFORM = 'true';
const jestPreset = require('@commercetools-frontend/jest-preset-mc-app');
const applyJestPresetWithEnzyme = require('@commercetools-frontend/jest-preset-mc-app/enzyme/apply-jest-preset-with-enzyme');

module.exports = {
  ...applyJestPresetWithEnzyme({
    enzymeAdapterVersion: 17,
    jestPreset,
  }),
};
