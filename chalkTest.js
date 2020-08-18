// More info:
// https://www.npmjs.com/package/chalk

const chalk = require("chalk");

const log = console.log;

// Basic Testing
log(
  `(1) This is testing npm chalk and should show up ${chalk.blueBright(
    "blue"
  )} in the console`
);

// Testing Usage of `Keyword`
const warning = chalk.keyword("orange");
log("(2) " + warning("Some orange text"));
