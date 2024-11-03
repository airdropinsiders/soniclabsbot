  import { Helper } from '../utils/helper.js';
  import a1_0x4a50cf from '../utils/logger.js';
  import a1_0x4ff99b from 'node-fetch';
  import { HttpsProxyAgent } from 'https-proxy-agent';
  export class API {
    constructor(_0x25f986, _0x385288, _0x5d7fd3, _0x4ec3ff, _0x3f36e4) {
      this.url = _0x25f986;
      this.host = _0x5d7fd3;
      this.origin = _0x4ec3ff;
      this.ua = Helper.randomUserAgent();
      this.something = _0x3f36e4;
      this.proxy = _0x385288;
    }
    ["generateHeaders"](_0x1b6163) {
      const _0xef859e = {
        'Accept': 'application/json',
        'Accept-Language': 'en-US,en;q=0.9,id;q=0.8',
        'Content-Type': "application/json",
        'Sec-Fetch-Dest': "empty",
        'Sec-Fetch-Site': "same-site",
        'Sec-Fetch-Mode': "cors",
        'Cache-Control': 'no-cache',
        'Connection': 'keep-alive',
        'Pragma': "no-cache"
      };
      if (_0x1b6163) {
        _0xef859e.Authorization = "Bearer " + _0x1b6163;
      }
      return _0xef859e;
    }
    ['replaceSensitiveData'](_0x33fb70) {
      if (typeof this.something === "string") {
        const _0x3c12ea = new RegExp(this.something, 'g');
        return _0x33fb70.replace(_0x3c12ea, '?????');
      } else {
        if (Array.isArray(this.something)) {
          this.something.forEach(_0x3fec38 => {
            const _0x45936b = new RegExp(_0x3fec38, 'g');
            _0x33fb70 = _0x33fb70.replace(_0x45936b, "?????");
          });
        }
      }
      return _0x33fb70;
    }
    async ["fetch"](_0xb7a767, _0x30bef6, _0x1b9b98, _0x5cb008 = {}, _0x1683fc = {}, _0x5c4d6d, _0x3f2b34 = false) {
      const _0x5b1eac = _0x3f2b34 ? _0xb7a767 : '' + this.url + _0xb7a767;
      try {
        const _0x2e106c = {
          ...this.generateHeaders(_0x1b9b98),
          ..._0x1683fc
        };
        const _0x27e7ab = {
          'headers': _0x2e106c,
          'method': _0x30bef6,
          'referer': _0x5c4d6d,
          'referrerPolicy': "strict-origin-when-cross-origin",
          'mode': "cors",
          'credentials': "omit"
        };
        a1_0x4a50cf.info(_0x30bef6 + " : " + this.replaceSensitiveData(_0x5b1eac) + " " + (this.proxy ? this.proxy : ''));
        for (let _0x16cd3a in _0x2e106c) {
          _0x2e106c[_0x16cd3a] = this.replaceSensitiveData(_0x2e106c[_0x16cd3a]);
        }
        a1_0x4a50cf.info("Request Header : " + JSON.stringify(_0x2e106c));
        if (_0x30bef6 !== 'GET') {
          _0x27e7ab.body = '' + JSON.stringify(_0x5cb008);
          const _0x405b8f = this.replaceSensitiveData(_0x27e7ab.body);
          a1_0x4a50cf.info("Request Body : " + _0x405b8f);
        }
        if (this.proxy) {
          _0x27e7ab.agent = new HttpsProxyAgent(this.proxy, {
            'rejectUnauthorized': false
          });
        }
        const _0xad8ddd = await a1_0x4ff99b(_0x5b1eac, _0x27e7ab);
        a1_0x4a50cf.info("Response : " + _0xad8ddd.status + " " + _0xad8ddd.statusText);
        if (_0xad8ddd.ok || _0xad8ddd.status == 0x190 || _0xad8ddd.status == 0x193) {
          const _0x4dcf3a = _0xad8ddd.headers.get('content-type');
          let _0x3b0d9e;
          if (_0x4dcf3a && _0x4dcf3a.includes('application/json')) {
            _0x3b0d9e = await _0xad8ddd.json();
            _0x3b0d9e.status = _0xad8ddd.status;
          } else {
            _0x3b0d9e = {
              'status': _0xad8ddd.status,
              'message': await _0xad8ddd.text()
            };
          }
          if (_0xad8ddd.ok) {
            _0x3b0d9e.status = 0xc8;
          }
          let _0x2accb7 = JSON.stringify(_0x3b0d9e);
          _0x2accb7 = this.replaceSensitiveData(_0x2accb7);
          if (_0x2accb7.length > 0xc8) {
            _0x2accb7 = _0x2accb7.substring(0x0, 0xc8) + '...';
          }
          a1_0x4a50cf.info("Response Data : " + _0x2accb7);
          return _0x3b0d9e;
        } else {
          throw _0xad8ddd;
        }
      } catch (_0x3e7e2e) {
        if (_0x3e7e2e.status && _0x3e7e2e.statusText) {
          if (_0x5b1eac.includes('setInvited') && _0x3e7e2e.status == "401") {
            return {
              'status': 0xc8
            };
          } else {
            if (_0x5b1eac.includes('points-by-player') && _0x3e7e2e.status == "500") {
              return {
                'status': 0x1f4,
                ...(await _0x3e7e2e.json())
              };
            } else {
              a1_0x4a50cf.error("Error : " + _0x3e7e2e.message);
              throw Error(_0x3e7e2e.status + " - " + _0x3e7e2e.statusText);
            }
          }
        } else {
          throw _0x3e7e2e;
        }
      }
    }
  }