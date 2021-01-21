
const colors = ['Black','White','Blue','Green','Orange', 'OrangeRed'];

const log = (input, isDark) => {
  isDark ? console.log(`${input}`,`color:${colors[1]}`) : console.log(`${input}`,`color:${colors[0]}`);
};

const info = (input) => {
  console.log(`${input}`,`color:${colors[2]}`);
};

const success = (input) => {
  console.log(`${input}`,`color:${colors[3]}`);
};

const warn = (input) => {
  console.warn(`${input}`,`color:${colors[4]}`);
};

const error = (input) => {
  console.error(`${input}`);
};

const logTable = (input) => {
  console.table(input);
};

module.exports = {
  log: log(), info: info(), success: success(), warn: warn(), error: error(), logTable: logTable()
};