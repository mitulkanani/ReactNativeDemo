const SUCCESS = "#00c853";
const ERROR = "#dd2c00";
const WARNING = "#fbc02d";
const INFO = "#90a4ae";
const WHITE = "#fff";

class log { }
/* eslint-disable */

/**
 *  Generate success log
 */
log.success = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${SUCCESS};
        color:${WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate error log
 */
log.error = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${ERROR};
        color:${WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate warning log
 */
log.warn = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${WARNING};
        color:${WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate info log
 */
log.info = (msg, data) => {
  if (__DEV__) {
    if (msg && data !== undefined) {
      console.log(
        `%c ${msg} `,
        `background:${INFO};
        color:${WHITE};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`,
        data
      );
    } else {
      console.log(msg);
    }
  }
};

/**
 *  Generate url log
 */
log.url = msg => {
  if (__DEV__) {
    if (msg) {
      console.log(`%c↳ ${msg} `,
        `color:${SUCCESS};
        line-height: 30px;
        font-weight: bold;
        font-size: 15px;
        border: 1px clear;
        border-radius: 0px 15px 15px 0px;`);
    }
  }
};

/* eslint-enable */

export default log;
