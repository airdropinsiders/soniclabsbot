  import { privateKey } from './accounts/accounts.js';
  import { Config } from './config/config.js';
  import { proxyList } from './config/proxy_list.js';
  import a0_0x595af5 from './src/core/core.js';
  import a0_0x208c74 from './src/core/db/sqlite.js';
  import { Helper } from './src/utils/helper.js';
  import a0_0xfc81ce from './src/utils/logger.js';
  async function operation(_0x1c68f3, _0x5a69cd, _0x25fa27) {
    const _0x10fe39 = new a0_0x595af5(_0x1c68f3, _0x5a69cd, _0x25fa27);
    try {
      await _0x10fe39.connectWallet();
      await _0x10fe39.getBalance();
      if (Config.DISPLAYPOINT) {
        await Helper.retryOperation(_0x10fe39.getPoint.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
      }
      await Helper.retryOperation(_0x10fe39.connectSonicDapps.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
      await Helper.retryOperation(_0x10fe39.getUserInfo.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
      await Helper.retryOperation(_0x10fe39.getUserInvite.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
      const _0x3aa8b7 = await a0_0x208c74.getLatestSession(_0x10fe39.address);
      if (_0x3aa8b7.length == 0x0) {
        await Helper.retryOperation(_0x10fe39.createSession.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        await Helper.retryOperation(_0x10fe39.permitContract.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        await a0_0x208c74.insertData(_0x10fe39.address, new Date().toISOString(), _0x10fe39.part, _0x10fe39.permitSignature);
      } else {
        _0x10fe39.part = _0x3aa8b7[0x0].part;
        _0x10fe39.permitSignature = _0x3aa8b7[0x0].permit;
      }
      while (_0x10fe39.limit == false) {
        await Helper.retryOperation(_0x10fe39.playPlinko.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        if (Config.DISPLAYPOINT) {
          await Helper.retryOperation(_0x10fe39.getPoint.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        }
      }
      while (_0x10fe39.wheelLimit == false) {
        await Helper.retryOperation(_0x10fe39.playWheel.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        if (Config.DISPLAYPOINT) {
          await Helper.retryOperation(_0x10fe39.getPoint.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        }
      }
      while (_0x10fe39.mineLimit == false) {
        await Helper.retryOperation(_0x10fe39.playMine.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        if (Config.DISPLAYPOINT) {
          await Helper.retryOperation(_0x10fe39.getPoint.bind(_0x10fe39, false), _0x1c68f3, _0x10fe39);
        }
      }
      const _0x1b68e0 = privateKey.find(_0x4974f2 => _0x4974f2.pk == _0x1c68f3);
      const _0x47f76e = privateKey.indexOf(_0x1b68e0);
      await Helper.delay(43200000, _0x1c68f3, "Account " + (_0x47f76e + 0x1) + " Processing Done, Delaying for " + Helper.msToTime(43200000), _0x10fe39);
      await operation(_0x1c68f3, _0x5a69cd, _0x25fa27);
    } catch (_0x3caf8e) {
      if (_0x3caf8e.message) {
        await Helper.delay(0x2710, _0x1c68f3, "Error : " + _0x3caf8e.message + ", Retry again after 10 Second", _0x10fe39);
      } else {
        await Helper.delay(0x2710, _0x1c68f3, "Error :" + JSON.stringify(_0x3caf8e) + ", Retry again after 10 Second", _0x10fe39);
      }
      await operation(_0x1c68f3, _0x5a69cd, _0x25fa27);
    }
  }
  async function startBot() {
    return new Promise(async (_0x477e98, _0x5711e1) => {
      try {
        a0_0xfc81ce.info("BOT STARTED");
        await a0_0x208c74.createTable();
        const _0x4329ac = [];
        if (proxyList.length != privateKey.length && proxyList.length != 0x0) {
          throw Error("You Have " + privateKey.length + " Accounts But Provide " + proxyList.length);
        }
        for (const _0xf69c9d of privateKey) {
          if (!_0xf69c9d.pk) {
            throw Error("Your accounts.js is malformed, please fix it first, see accounts_tmp.js for the format");
          }
          const _0x3e60ee = privateKey.indexOf(_0xf69c9d);
          const _0x68d899 = proxyList[_0x3e60ee];
          _0x4329ac.push(operation(_0xf69c9d.pk, _0xf69c9d.smartWalletAddress, _0x68d899));
        }
        await Promise.all(_0x4329ac);
        _0x477e98();
      } catch (_0x3e9e2c) {
        a0_0xfc81ce.info("BOT STOPPED");
        a0_0xfc81ce.error(JSON.stringify(_0x3e9e2c));
        _0x5711e1(_0x3e9e2c);
      }
    });
  }
  (async () => {
    try {
      a0_0xfc81ce.clear();
      a0_0xfc81ce.info('');
      a0_0xfc81ce.info("Application Started");
      console.log("Soniclabs Arcade Testnet BOT");
      console.log();
      console.log("Join Channel : https://t.me/AirdropInsiderID");
      console.log("Dont forget to run git pull to keep up to date");
      console.log();
      console.log();
      console.log();
      console.log();
      Helper.showSkelLogo();
      await startBot();
    } catch (_0x4af3ae) {
      console.log("Error During executing bot", _0x4af3ae);
      await startBot();
    }
  })();