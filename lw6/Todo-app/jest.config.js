// jest.config.js
// Синхронно загружаемый конфиг
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
};

module.exports = config;

// Или с помощью асинхронной функции
module.exports = async () => {
  return {
    verbose: true,
    testEnvironment: 'jest-environment-node',
    transform: {},
  };
};