  import a8_0x5bd889 from 'bip39';
  import a8_0x2ef8b8 from 'moment-timezone';
  import { ethers } from 'ethers';
  import { Config } from '../../config/config.js';
  import { Twist } from './twist.js';
  import { Bless } from './bless.js';
  import { RPC } from '../core/network/rpc.js';
  export class Helper {
    static ["display"] = Config.DISPLAY;
    static ['twist'] = this.display == "TWIST" ? new Twist() : new Bless();
    static ["spinnerContent"] = _0x36ca7f => "\nAddress      : " + _0x36ca7f.address + "\nBalance      : " + _0x36ca7f.balance + " " + RPC.SYMBOL + "\n" + (Config.DISPLAYPOINT ? "Points       : Total " + _0x36ca7f.totalPoint + " | Today " + _0x36ca7f.todayPoint : '') + "\n\nStatus       : " + _0x36ca7f.msg + "\nDelay        : " + _0x36ca7f.delay + "\n";
    static ['delay'] = (_0x41b0ea, _0x5b6f97, _0x1c6286, _0x1ee472) => {
      return new Promise(async _0x54a54c => {
        let _0x3f1310 = _0x41b0ea;
        if (_0x5b6f97 != undefined) {
          await this.twist.log(_0x1c6286, _0x5b6f97, _0x1ee472, "Delaying for " + this.msToTime(_0x41b0ea));
        } else {
          await this.twist.info("Delaying for " + this.msToTime(_0x41b0ea));
        }
        const _0x3e3613 = setInterval(async () => {
          _0x3f1310 -= 0x3e8;
          if (_0x5b6f97 != undefined) {
            await this.twist.log(_0x1c6286, _0x5b6f97, _0x1ee472, "Delaying for " + this.msToTime(_0x3f1310));
          } else {
            await this.twist.info("Delaying for " + this.msToTime(_0x3f1310));
          }
          if (_0x3f1310 <= 0x0) {
            clearInterval(_0x3e3613);
            _0x54a54c();
          }
        }, 0x3e8);
        setTimeout(async () => {
          clearInterval(_0x3e3613);
          await this.twist.clearInfo();
          if (_0x5b6f97) {
            await this.twist.log(_0x1c6286, _0x5b6f97, _0x1ee472);
          }
          _0x54a54c();
        }, _0x41b0ea);
      });
    };
    static async ['retryOperation'](_0x35cf4c, _0x5c0ff5, _0x45d91d, _0x28cd97 = 0x3) {
      for (let _0x5554ad = 0x1; _0x5554ad <= _0x28cd97; _0x5554ad++) {
        try {
          return await _0x35cf4c();
        } catch (_0x452bda) {
          if (_0x5554ad === _0x28cd97) {
            throw new Error("Failed after " + _0x28cd97 + " retries: " + _0x452bda.message);
          }
          await this.delay(0xbb8, _0x5c0ff5, _0x452bda.message + " Retrying (" + _0x5554ad + '/' + _0x28cd97 + ')', _0x45d91d);
        }
      }
    }
    static ["randomUserAgent"]() {
      const _0x3eeb51 = ["Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) CriOS/125.0.6422.80 Mobile/15E148 Safari/604.1", "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 EdgiOS/125.2535.60 Mobile/15E148 Safari/605.1.15", "Mozilla/5.0 (Linux; Android 10; SM-G973F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; Pixel 3 XL) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 EdgA/124.0.2478.104", "Mozilla/5.0 (Linux; Android 10; VOG-L29) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374", "Mozilla/5.0 (Linux; Android 10; SM-N975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.6422.113 Mobile Safari/537.36 OPR/76.2.4027.73374"];
      return _0x3eeb51[Math.floor(Math.random() * _0x3eeb51.length)];
    }
    static ["readTime"](_0x2969c0) {
      const _0xaf6c90 = a8_0x2ef8b8.unix(_0x2969c0);
      return _0xaf6c90.format("YYYY-MM-DD HH:mm:ss");
    }
    static ['getCurrentTimestamp']() {
      const _0x111b3c = a8_0x2ef8b8().tz("Asia/Singapore").unix();
      return _0x111b3c.toString();
    }
    static ["random"](_0x3b7f8b, _0x5b7479) {
      const _0x5bc935 = Math.floor(Math.random() * (_0x5b7479 - _0x3b7f8b + 0x1)) + _0x3b7f8b;
      return _0x5bc935;
    }
    static ["msToTime"](_0x11bc75) {
      const _0x2c7eff = Math.floor(_0x11bc75 / 3600000);
      const _0x154438 = _0x11bc75 % 3600000;
      const _0x4332f7 = Math.floor(_0x154438 / 60000);
      const _0x778b1a = _0x154438 % 60000;
      const _0x2d131c = Math.round(_0x778b1a / 0x3e8);
      return _0x2c7eff + " Hours " + _0x4332f7 + " Minutes " + _0x2d131c + " Seconds";
    }
    static ['generateRandomString'](_0x49fbda) {
      let _0x405b3b = '';
      const _0x3dd408 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".length;
      for (let _0x2eba7f = 0x0; _0x2eba7f < _0x49fbda; _0x2eba7f++) {
        _0x405b3b += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(Math.floor(Math.random() * _0x3dd408));
      }
      return _0x405b3b;
    }
    static ["serializeBigInt"] = _0x280d86 => {
      return JSON.parse(JSON.stringify(_0x280d86, (_0x3c31b6, _0x24e004) => typeof _0x24e004 === 'bigint' ? _0x24e004.toString() : _0x24e004));
    };
    static ["isMnemonic"](_0x39ae87) {
      return a8_0x5bd889.validateMnemonic(_0x39ae87);
    }
    static ["isPrivateKey"](_0x456142) {
      const _0x570d7c = _0x456142.replace(/^0x/, '');
      const _0x4dbb70 = /^[a-fA-F0-9]{64}$/;
      return _0x4dbb70.test(_0x570d7c);
    }
    static ['determineType'](_0x44c949) {
      if (this.isMnemonic(_0x44c949)) {
        return "Secret Phrase";
      } else {
        if (this.isPrivateKey(_0x44c949)) {
          return "Private Key";
        } else {
          return 'Unknown';
        }
      }
    }
    static ["generateNonce"]() {
      return ethers.hexlify(ethers.randomBytes(0x10));
    }
    static ['isToday'](_0x3bb748) {
      const _0x3407b3 = new Date(_0x3bb748);
      const _0xa7ef73 = new Date();
      _0xa7ef73.setHours(0x0, 0x0, 0x0, 0x0);
      const _0x37a92f = new Date(_0x3407b3);
      _0x37a92f.setHours(0x0, 0x0, 0x0, 0x0);
      if (_0x37a92f.getTime() === _0xa7ef73.getTime()) {
        return true;
      } else {
        return false;
      }
    }
    static ["findFunctionBySelector"](_0x2ad018, _0x4c15c0) {
      for (const _0x3fb106 of _0x4c15c0) {
        for (const _0x3f4d1a of _0x3fb106) {
          if (_0x3f4d1a.type === 'function') {
            const _0x9c6ebb = _0x3f4d1a.name + '(' + _0x3f4d1a.inputs.map(_0x3ac7a8 => _0x3ac7a8.type).join(',') + ')';
            const _0x29ea9c = '0x' + ethers.keccak256(ethers.toUtf8Bytes(_0x9c6ebb)).slice(0x0, 0x8);
            if (_0x29ea9c.includes(_0x2ad018)) {
              console.log("Function found: " + _0x9c6ebb);
              return _0x9c6ebb;
            }
          }
        }
      }
      console.log("Function not found");
      return null;
    }
    static ['showSkelLogo']() {
        console.log(`
            █████╗ ██╗██████╗ ██████╗ ██████╗  ██████╗ ██████╗ 
           ██╔══██╗██║██╔══██╗██╔══██╗██╔══██╗██╔═══██╗██╔══██╗
           ███████║██║██████╔╝██║  ██║██████╔╝██║   ██║██████╔╝
           ██╔══██║██║██╔══██╗██║  ██║██╔══██╗██║   ██║██╔═══╝ 
           ██║  ██║██║██║  ██║██████╔╝██║  ██║╚██████╔╝██║     
           ╚═╝  ╚═╝╚═╝╚═╝  ╚═════╝ ╚═╝  ╚═╝ ╚═════╝ ╚═╝     
                                                               
           ██╗███╗   ██╗███████╗██╗██████╗ ███████╗██████╗     
           ██║████╗  ██║██╔════╝██║██╔══██╗██╔════╝██╔══██╗    
           ██║██╔██╗ ██║███████╗██║██║  ██║█████╗  ██████╔╝    
           ██║██║╚██╗██║╚════██║██║██║  ██║██╔══╝  ██╔══██╗    
           ██║██║ ╚████║███████║██║██████╔╝███████╗██║  ██║    
           ╚═╝╚═╝  ╚═══╝╚══════╝╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝    
           `);
    }
  }