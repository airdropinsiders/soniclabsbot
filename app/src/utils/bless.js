  import a7_0x41d6be from 'blessed';
  import a7_0x51f737 from './logger.js';
  import a7_0x5a5473 from '../core/core.js';
  import { Helper } from './helper.js';
  import { privateKey } from '../../accounts/accounts.js';
  import '../core/db/sqlite.js';
  export class Bless {
    constructor() {
      this.screen = a7_0x41d6be.screen({
        'smartCSR': true
      });
      this.screen.title = "AirdropInsider";
      this.titleBox = a7_0x41d6be.box({
        'top': 0x0,
        'left': "center",
        'width': 'shrink',
        'height': 0x2,
        'tags': true,
        'content': "{center}BASE RWA TESTNET BOT{/center}\n    By: AirdropInsider",
        'style': {
          'fg': 'white',
          'bold': true
        }
      });
      this.screen.append(this.titleBox);
      this.subTitle = a7_0x41d6be.box({
        'top': 0x1,
        'left': "center",
        'width': 'shrink',
        'height': 0x2,
        'tags': true,
        'content': "By: Airdrop - Insider (https://t.me/AirdropInsiderID)",
        'style': {
          'fg': 'white',
          'bold': true
        }
      });
      this.screen.append(this.subTitle);
      this.tabList = a7_0x41d6be.box({
        'top': 0x5,
        'left': "center",
        'width': '100%',
        'height': 0x3,
        'tags': true,
        'style': {
          'fg': 'white'
        }
      });
      this.screen.append(this.tabList);
      this.hintBox = a7_0x41d6be.box({
        'bottom': 0x0,
        'left': 'center',
        'width': "100%",
        'height': 0x3,
        'tags': true,
        'content': "{center}Use '->'(arrow right) and '<-'(arrow left) to switch between tabs{/center}",
        'style': {
          'fg': "white"
        }
      });
      this.screen.append(this.hintBox);
      this.infoBox = a7_0x41d6be.box({
        'bottom': 0x3,
        'left': 'center',
        'width': '100%',
        'height': 0x3,
        'tags': true,
        'content': '',
        'style': {
          'fg': "white"
        }
      });
      this.screen.append(this.infoBox);
      this.tabs = [];
      this.currentTabIndex = 0x0;
      privateKey.forEach((_0x731fd4, _0x57c979) => {
        const _0x4522f5 = this.createAccountTab("Account " + (_0x57c979 + 0x1));
        this.tabs.push(_0x4522f5);
        this.screen.append(_0x4522f5);
        _0x4522f5.hide();
      });
      if (this.tabs.length > 0x0) {
        this.tabs[0x0].show();
      }
      this.renderTabList();
      this.screen.key(['q', "C-c"], () => {
        return process.exit(0x0);
      });
      this.screen.key(['left', 'right'], (_0x22983f, _0x22cea1) => {
        if (_0x22cea1.name === "right") {
          this.switchTab((this.currentTabIndex + 0x1) % this.tabs.length);
        } else if (_0x22cea1.name === "left") {
          this.switchTab((this.currentTabIndex - 0x1 + this.tabs.length) % this.tabs.length);
        }
      });
      this.screen.render();
    }
    ['createAccountTab'](_0x268f4d) {
      return a7_0x41d6be.box({
        'label': _0x268f4d,
        'top': 0x6,
        'left': 0x0,
        'width': '100%',
        'height': 'shrink',
        'border': {
          'type': 'line'
        },
        'style': {
          'fg': "white",
          'border': {
            'fg': "#f0f0f0"
          }
        },
        'tags': true
      });
    }
    ["renderTabList"]() {
      let _0x534678 = '';
      privateKey.forEach((_0x311ae9, _0x5cbd60) => {
        if (_0x5cbd60 === this.currentTabIndex) {
          _0x534678 += "{blue-fg}{bold} Account " + (_0x5cbd60 + 0x1) + " {/bold}{/blue-fg} ";
        } else {
          _0x534678 += " Account " + (_0x5cbd60 + 0x1) + " ";
        }
      });
      this.tabList.setContent("{center}" + _0x534678 + '{/center}');
      this.screen.render();
    }
    ['switchTab'](_0x1de123) {
      this.tabs[this.currentTabIndex].hide();
      this.currentTabIndex = _0x1de123;
      this.tabs[this.currentTabIndex].show();
      this.renderTabList();
      this.screen.render();
    }
    async ["log"](_0x57fd28 = '', _0x3463d9 = '', _0x35264c = new a7_0x5a5473(), _0x326afe) {
      const _0x2e8f0e = privateKey.find(_0x3557b6 => _0x3557b6.pk == _0x3463d9);
      const _0x38f69b = privateKey.indexOf(_0x2e8f0e);
      if (_0x326afe === undefined) {
        a7_0x51f737.info("Account " + (_0x38f69b + 0x1) + " - " + _0x57fd28);
        _0x326afe = '-';
      }
      let _0x50b469;
      const _0x3b0565 = _0x35264c.address ?? '-';
      const _0x21bf15 = _0x35264c.balance ?? '-';
      const _0x3d8356 = _0x35264c.point ?? {};
      const _0x527a0f = _0x3d8356.totalPoints ?? '-';
      const _0x31d5a8 = _0x3d8356.today ?? '-';
      let _0x3c49a7 = {
        'msg': _0x57fd28,
        'delay': _0x326afe,
        'address': _0x3b0565,
        'balance': _0x21bf15,
        'point': _0x3d8356,
        'todayPoint': _0x31d5a8,
        'totalPoint': _0x527a0f
      };
      _0x50b469 = '' + Helper.spinnerContent(_0x3c49a7);
      this.tabs[_0x38f69b].setContent(_0x50b469);
      this.screen.render();
    }
    ["info"](_0x539b20 = '') {
      const _0xc228ef = "\n{center}Info: " + _0x539b20 + "{/center}\n";
      this.infoBox.setContent(_0xc228ef);
      this.screen.render();
    }
    ['clearInfo']() {
      this.infoBox.setContent('');
      this.screen.render();
    }
  }