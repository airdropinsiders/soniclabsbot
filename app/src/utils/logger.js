  import { createLogger, format, transports } from 'winston';
  import a9_0x141b00 from 'fs';
  const {
    combine,
    timestamp,
    printf,
    colorize
  } = format;
  const customFormat = printf(({
    level: _0x58908b,
    message: _0x69f7d3,
    timestamp: _0x475065
  }) => {
    return _0x475065 + " [" + _0x58908b + "]: " + _0x69f7d3;
  });
  class Logger {
    constructor() {
      this.logger = createLogger({
        'level': "debug",
        'format': combine(timestamp({
          'format': "YYYY-MM-DD HH:mm:ss"
        }), colorize(), customFormat),
        'transports': [new transports.File({
          'filename': 'log/app.log'
        })],
        'exceptionHandlers': [new transports.File({
          'filename': "log/app.log"
        })],
        'rejectionHandlers': [new transports.File({
          'filename': 'log/app.log'
        })]
      });
    }
    ['info'](_0x4a2715) {
      this.logger.info(_0x4a2715);
    }
    ["warn"](_0x1b8b39) {
      this.logger.warn(_0x1b8b39);
    }
    ['error'](_0xcd3d0f) {
      this.logger.error(_0xcd3d0f);
    }
    ["debug"](_0x4e8e7f) {
      this.logger.debug(_0x4e8e7f);
    }
    ["setLevel"](_0x2d7d35) {
      this.logger.level = _0x2d7d35;
    }
    ['clear']() {
      a9_0x141b00.truncate('log/app.log', 0x0, _0x95e32d => {
        if (_0x95e32d) {
          this.logger.error("Failed to clear the log file: " + _0x95e32d.message);
        } else {
          this.logger.info("Log file cleared");
        }
      });
    }
  }
  export default new Logger();