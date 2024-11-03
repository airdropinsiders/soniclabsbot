  import { Twisters } from 'twisters';
  import a10_0x272e34 from './logger.js';
  import a10_0x27f89a from '../core/core.js';
  import { privateKey } from '../../accounts/accounts.js';
  import '../core/db/sqlite.js';
  import { Helper } from './helper.js';
  export class Twist {
    constructor() {
      this.twisters = new Twisters();
    }
    async ['log'](_0x528e31 = '', _0x81068d = '', _0x733d13 = new a10_0x27f89a(), _0x5df1d3) {
      let _0x164d7c;
      const _0x530690 = privateKey.find(_0x10b286 => _0x10b286.pk == _0x81068d);
      const _0x2f6a4a = privateKey.indexOf(_0x530690);
      if (_0x5df1d3 == undefined) {
        a10_0x272e34.info("Account " + (_0x2f6a4a + 0x1) + " - " + _0x528e31);
        _0x5df1d3 = '-';
      }
      const _0x263816 = _0x733d13.address ?? '-';
      const _0x1e5253 = _0x733d13.balance ?? '-';
      const _0xf6378e = _0x733d13.point ?? {};
      const _0x53eb03 = _0xf6378e.totalPoints ?? '-';
      const _0x4532d6 = _0xf6378e.today ?? '-';
      let _0x3d5fcb = {
        'msg': _0x528e31,
        'delay': _0x5df1d3,
        'address': _0x263816,
        'balance': _0x1e5253,
        'point': _0xf6378e,
        'todayPoint': _0x4532d6,
        'totalPoint': _0x53eb03
      };
      _0x164d7c = "\n================== Account " + (_0x2f6a4a + 0x1) + " =================\n" + Helper.spinnerContent(_0x3d5fcb) + "\n==============================================\n";
      this.twisters.put(_0x530690, {
        'text': _0x164d7c
      });
    }
    ["info"](_0x47968f = '') {
      this.twisters.put(0x2, {
        'text': "\n==============================================\nInfo : " + _0x47968f + "\n=============================================="
      });
      return;
    }
    ['clearInfo']() {
      this.twisters.remove(0x2);
    }
    ["clear"](_0x4e56ff) {
      this.twisters.remove(_0x4e56ff);
    }
  }