  import { ethers } from 'ethers';
  import { API } from '../api/api.js';
  import { privateKey } from '../../accounts/accounts.js';
  import { Helper } from '../utils/helper.js';
  import a3_0x38e224 from '../utils/logger.js';
  import { RPC } from './network/rpc.js';
  import { SONICLABS } from './dapps/soniclabs.js';
  import { Config } from '../../config/config.js';
  export default class Core extends API {
    constructor(_0x6cfd9d, _0x1cb057, _0x28d0a2) {
      super('https://airdrop.soniclabs.com', _0x28d0a2, 'airdrop.soniclabs.com', 'https://airdrop.soniclabs.com/', 'cs75h2');
      this.maincode = "ehvpsq";
      this.acc = _0x6cfd9d;
      this.sessionId = 0x1;
      this.smartWalletAddr = _0x1cb057;
      this.limit = false;
      this.wheelLimit = false;
      this.mineLimit = false;
      this.provider = new ethers.JsonRpcProvider(RPC.RPCURL, RPC.CHAINID);
    }
    async ['connectWallet']() {
      try {
        const _0x282e51 = this.acc;
        const _0x47c1d6 = privateKey.find(_0x3f8155 => _0x3f8155.pk == this.acc);
        const _0x31b096 = privateKey.indexOf(_0x47c1d6);
        await Helper.delay(0x3e8, this.acc, "Connecting to Account : " + (_0x31b096 + 0x1), this);
        const _0x3721e9 = Helper.determineType(_0x282e51);
        a3_0x38e224.info("Account Type : " + _0x3721e9);
        if (_0x3721e9 == "Secret Phrase") {
          this.wallet = ethers.Wallet.fromPhrase(_0x282e51, this.provider);
        } else {
          if (_0x3721e9 == "Private Key") {
            this.wallet = new ethers.Wallet(_0x282e51.trim(), this.provider);
          } else {
            throw Error("Invalid account Secret Phrase or Private Key");
          }
        }
        this.address = this.wallet.address;
        await Helper.delay(0x3e8, this.acc, "Wallet connected " + JSON.stringify(this.wallet.address), this);
      } catch (_0x45d6a6) {
        throw _0x45d6a6;
      }
    }
    async ["getBalance"](_0x3be149 = false) {
      try {
        if (!_0x3be149) {
          await Helper.delay(0x1f4, this.acc, "Getting Wallet Balance of " + this.wallet.address, this);
        }
        const _0x7a1ec5 = ethers.formatEther(await this.provider.getBalance(this.wallet.address));
        this.balance = _0x7a1ec5;
        await Helper.delay(0x1f4, this.acc, "Balance updated", this);
      } catch (_0x5434d2) {
        throw _0x5434d2;
      }
    }
    async ["connectSonicDapps"]() {
      await Helper.delay(0x3e8, this.acc, "Connecting to Arcade Soniclabs Dapps", this);
      const _0x29b9da = "I'm joining Sonic Airdrop Dashboard with my wallet, have been referred by " + this.maincode + ", and I agree to the terms and conditions.\nWallet address:\n" + this.address + "\n";
      a3_0x38e224.info("Message to sign: " + _0x29b9da);
      const _0x47bfad = await this.wallet.signMessage(_0x29b9da);
      a3_0x38e224.info("Signed Message: " + _0x47bfad);
      this.signatureMessage = _0x47bfad;
      await Helper.delay(0x3e8, this.acc, "Connected To Soniclabs", this);
    }
    async ["getUserInfo"]() {
      await Helper.delay(0x3e8, this.acc, "Getting User Information", this);
      const _0xdfd188 = await this.fetch('/api/trpc/user.findOrCreate?batch=1&input=' + encodeURIComponent(JSON.stringify({
        0x0: {
          'json': {
            'address': this.wallet.address
          }
        }
      })), 'GET', undefined);
      if (_0xdfd188.status == 0xc8) {
        this.user = _0xdfd188[0x0].result.data.json;
        await Helper.delay(0x1f4, this.acc, "Successfully Get User Information", this);
      } else {
        throw Error("Failed to Get User Information");
      }
    }
    async ['getUserInvite']() {
      await Helper.delay(0x3e8, this.acc, "Validating Invite Code", this);
      if (this.user.invitedCode == null) {
        const _0x245939 = await this.fetch('/api/trpc/user.setInvited?batch=1', 'POST', undefined, {
          0x0: {
            'json': {
              'address': this.address,
              'invitedCode': this.maincode,
              'signature': this.signatureMessage
            }
          }
        });
        if (_0x245939.status == 0xc8) {
          await Helper.delay(0x7d0, this.acc, "Successfully Join With Invit Code", this);
          await this.getUserInfo();
        } else {
          await Helper.delay(0x2710, acc, "Please Register Manually Using Creator Invite Code", this);
          throw Error("Please Register Manually Using Creator Invite Code");
        }
      } else {
        if (this.user.invitedCode != null && this.user.invitedCode != this.maincode && !this.address.includes('7707D')) {
          if (Config.AUTOJOINREF) {
            const _0x1dbd76 = await this.fetch("/api/trpc/user.setInvited?batch=1", 'POST', undefined, {
              0x0: {
                'json': {
                  'address': this.address,
                  'invitedCode': this.maincode,
                  'signature': this.signatureMessage
                }
              }
            });
            if (_0x1dbd76.status == 0xc8) {
              await Helper.delay(0x7d0, this.acc, "Successfully Change Invited Code", this);
              await this.getUserInfo();
            } else {
              throw Error("Failed to Join with Creator Refferal Link");
            }
          } else {
            const _0x5871b2 = JSON.stringify(this.user) + "\nThis address is Not Using Creator Referal Code, This Address Cannot Use This Bot :), Sorry";
            await Helper.delay(43200000, this.acc, _0x5871b2, this);
            throw Error(_0x5871b2);
          }
        } else {
          await Helper.delay(0x7d0, this.acc, "Valid Address", this);
        }
      }
    }
    async ['createSession']() {
      await Helper.delay(0x3e8, this.acc, "Creating Sonic Session", this);
      const _0x4cff71 = Date.now();
      const _0x20cbfd = _0x4cff71 + 0x5265c00;
      const _0x38bb52 = await this.fetch("https://arcade.hub.soniclabs.com/rpc", 'POST', undefined, {
        'jsonrpc': "2.0",
        'id': this.sessionId,
        'method': 'createSession',
        'params': {
          'owner': this.address,
          'until': _0x20cbfd
        }
      }, {
        'network': "SONIC",
        'origin': "https://arcade.soniclabs.com",
        'x-owner': this.address
      }, "https://arcade.soniclabs.com/", true);
      this.sessionId += 0x1;
      a3_0x38e224.info('TEST');
      a3_0x38e224.info(JSON.stringify(_0x38bb52));
      if (_0x38bb52.status == 0xc8) {
        await Helper.delay(0x7d0, this.acc, "Successfully Create Sonic Arcade Sessions", this);
      } else {
        throw Error("Failed to Create Sonic Arcade Sessions");
      }
    }
    async ["permitContract"]() {
      await Helper.delay(0x3e8, this.acc, "Try To Permit Sonic Arcade Contract", this);
      const _0x51cc85 = await this.fetch('https://arcade.hub.soniclabs.com/rpc', 'POST', undefined, {
        'jsonrpc': '2.0',
        'id': this.sessionId,
        'method': 'permitTypedMessage',
        'params': {
          'owner': this.address
        }
      }, {
        'network': "SONIC",
        'origin': "https://arcade.soniclabs.com",
        'x-owner': this.address
      }, 'https://arcade.soniclabs.com/', true);
      this.sessionId += 0x1;
      a3_0x38e224.info("TEST");
      a3_0x38e224.info(JSON.stringify(_0x51cc85));
      if (_0x51cc85.status == 0xc8 && !_0x51cc85.error) {
        const _0x1d11ae = JSON.parse(_0x51cc85.result.typedMessage);
        await Helper.delay(0x1f4, this.acc, "Successfully Create Permit", this);
        await Helper.delay(0x1f4, this.acc, "Approving Permit Message", this);
        const _0x4d465f = await this.wallet.signTypedData(_0x1d11ae.json.domain, _0x1d11ae.json.types, _0x1d11ae.json.message);
        this.permitSignature = _0x4d465f;
        await this.submitPermit();
      } else {
        throw Error("Failed to Permit Sonic Arcade Contract - " + _0x51cc85.error.message);
      }
    }
    async ["refund"](_0x5e508c) {
      await Helper.delay(0x3e8, this.acc, "Refunding " + _0x5e508c + " Game To Resolve Awaiting Random Number", this);
      const _0x2d0e8d = await this.fetch("https://arcade.hub.soniclabs.com/rpc", "POST", undefined, {
        'jsonrpc': '2.0',
        'id': this.sessionId,
        'method': 'refund',
        'params': {
          'game': _0x5e508c,
          'player': this.smartWalletAddr
        }
      }, {
        'network': 'SONIC',
        'origin': 'https://arcade.soniclabs.com',
        'x-owner': this.address
      }, "https://arcade.soniclabs.com/", true);
      this.sessionId += 0x1;
      if (_0x2d0e8d.status == 0xc8) {
        await Helper.delay(0x3e8, this.acc, "Successfully Refund " + _0x5e508c + " Game", this);
      } else {
        throw Error("Failed to Refund Game");
      }
    }
    async ["reIterate"](_0x4b3b3e) {
      await Helper.delay(0x3e8, this.acc, "Reiterate " + _0x4b3b3e + " Game To Resolve Awaiting Random Number", this);
      const _0x3b11f6 = await this.fetch('https://arcade.hub.soniclabs.com/rpc', 'POST', undefined, {
        'jsonrpc': '2.0',
        'id': this.sessionId,
        'method': 'reIterate',
        'params': {
          'game': _0x4b3b3e,
          'player': this.smartWalletAddr
        }
      }, {
        'network': "SONIC",
        'origin': "https://arcade.soniclabs.com",
        'x-owner': this.address
      }, "https://arcade.soniclabs.com/", true);
      this.sessionId += 0x1;
      if (_0x3b11f6.status == 0xc8) {
        await Helper.delay(0x3e8, this.acc, "Successfully Reiterate " + _0x4b3b3e + " Game", this);
      } else {
        throw Error("Failed to Reiterate Game");
      }
    }
    async ['submitPermit']() {
      await Helper.delay(0x3e8, this.acc, "Try To Submit Sonic Arcade Contract Permit Signature", this);
      const _0x117bb4 = await this.fetch('https://arcade.hub.soniclabs.com/rpc', 'POST', undefined, {
        'jsonrpc': "2.0",
        'id': this.sessionId,
        'method': 'permit',
        'params': {
          'owner': this.address,
          'signature': this.permitSignature
        }
      }, {
        'network': 'SONIC',
        'origin': "https://arcade.soniclabs.com",
        'x-owner': this.address
      }, "https://arcade.soniclabs.com/", true);
      this.sessionId += 0x1;
      if (!_0x117bb4.error) {
        this.part = _0x117bb4.result.hashKey;
        await Helper.delay(0x3e8, this.acc, "Successfully Submit Permit", this);
      } else {
        throw Error("Failed to Submit Sonic Arcade Permit - " + _0x117bb4.error.message);
      }
    }
    async ["playPlinko"]() {
      await Helper.delay(0x7d0, this.acc, "Playing Plinko Game", this);
      const _0x44ca29 = await this.fetch("https://arcade.hub.soniclabs.com/rpc", 'POST', undefined, {
        'jsonrpc': '2.0',
        'id': this.sessionId,
        'method': "call",
        'params': {
          'call': {
            'dest': SONICLABS.ARCADEGAMECONTRACT,
            'data': '0x0d942fd00000000000000000000000001cc5bc5c6d5fbb637164c8924528fb2d611fa5090000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e328a0b1e0be7043c9141c2073e408d1086e117500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000003626574000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e0000000000000000000000000000000000000000000000000016345785d8a000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000a',
            'value': '0n'
          },
          'owner': this.address,
          'part': this.part,
          'permit': this.permitSignature
        }
      }, {
        'network': 'SONIC',
        'origin': 'https://arcade.soniclabs.com',
        'x-owner': this.address
      }, 'https://arcade.soniclabs.com/', true);
      this.sessionId += 0x1;
      if (!_0x44ca29.error) {
        await Helper.delay(0x2710, this.acc, "Successfully Play Plinko Game", this);
      } else {
        if (_0x44ca29.error?.['message']?.["includes"]("limit")) {
          this.limit = true;
          await Helper.delay(0x7d0, this.acc, "Failed to Play Plinko Game - " + _0x44ca29.error?.["message"], this);
        } else {
          if (_0x44ca29.error?.["message"]?.['includes']("random number")) {
            await Helper.delay(0x2710, this.acc, "Failed to Play Plinko Game - " + _0x44ca29.error?.['message'], this);
            await this.reIterate("plinko");
            return;
          } else {
            if (_0x44ca29.error?.["message"]?.["includes"]('Permit')) {
              throw Error("Failed to Play Plinko Game - " + _0x44ca29.error?.['message']);
            } else {
              throw Error("Failed to Play Plinko Game - " + _0x44ca29.error?.["message"]);
            }
          }
        }
      }
    }
    async ['playWheel']() {
      await Helper.delay(0x7d0, this.acc, "Playing Whell Game", this);
      const _0xb065 = await this.fetch('https://arcade.hub.soniclabs.com/rpc', "POST", undefined, {
        'jsonrpc': "2.0",
        'id': this.sessionId,
        'method': "call",
        'params': {
          'call': {
            'dest': SONICLABS.ARCADEGAMECONTRACT,
            'data': "0x0d942fd000000000000000000000000070e7c3846ac8c4308f7eeb0e6a3ceedc325539a60000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e328a0b1e0be7043c9141c2073e408d1086e117500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000003626574000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000de0b6b3a764000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000200000000000000000000000000000000000000000000000000000000000000002",
            'value': '0n'
          },
          'owner': this.address,
          'part': this.part,
          'permit': this.permitSignature
        }
      }, {
        'network': "SONIC",
        'origin': "https://arcade.soniclabs.com",
        'x-owner': this.address
      }, "https://arcade.soniclabs.com/", true);
      this.sessionId += 0x1;
      if (!_0xb065.error) {
        await Helper.delay(0x2710, this.acc, "Successfully Play Whell Game", this);
      } else {
        if (_0xb065.error?.["message"]?.["includes"]("limit")) {
          this.wheelLimit = true;
          await Helper.delay(0x7d0, this.acc, "Failed to Play Wheel Game - " + _0xb065.error?.["message"], this);
        } else {
          if (_0xb065.error?.['message']?.["includes"]("random number")) {
            await Helper.delay(0x1388, this.acc, "Failed to Play Wheel Game - " + _0xb065.error?.["message"], this);
            await this.reIterate("singlewheel");
            return;
          } else {
            if (_0xb065.error?.["message"]?.["includes"]('Permit')) {
              throw Error("Failed to Play Wheel Game - " + _0xb065.error?.['message']);
            } else {
              throw Error("Failed to Play Wheel Game - " + _0xb065.error?.['message']);
            }
          }
        }
      }
    }
    async ["playMine"]() {
      await Helper.delay(0x7d0, this.acc, "Playing Mine Game", this);
      const _0xa3301e = await this.fetch("https://arcade.hub.soniclabs.com/rpc", "POST", undefined, {
        'jsonrpc': "2.0",
        'id': this.sessionId,
        'method': "call",
        'params': {
          'call': {
            'dest': SONICLABS.ARCADEGAMECONTRACT,
            'data': "0x0d942fd00000000000000000000000008bbd8f37a3349d83c85de1f2e32b3fd2fce2468e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e328a0b1e0be7043c9141c2073e408d1086e117500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000003626574000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000003800000000000000000000000000000000000000000000000000de0b6b3a7640000000000000000000000000000000000000000000000000000000000000000000a00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            'value': '0n'
          },
          'owner': this.address,
          'part': this.part,
          'permit': this.permitSignature
        }
      }, {
        'network': "SONIC",
        'origin': "https://arcade.soniclabs.com",
        'x-owner': this.address
      }, 'https://arcade.soniclabs.com/', true);
      this.sessionId += 0x1;
      if (_0xa3301e.error) {
        if (_0xa3301e.error?.["message"]?.['includes']("limit")) {
          this.mineLimit = true;
          await Helper.delay(0xbb8, this.acc, "Failed to Play Mine Game - " + _0xa3301e.error?.["message"], this);
          return;
        } else {
          if (_0xa3301e.error?.["message"]?.['includes']("random number")) {
            await Helper.delay(0x2710, this.acc, "Failed to Play Mine Game - " + _0xa3301e.error?.['message'], this);
            await this.reIterate('mines');
            return;
          } else {
            if (_0xa3301e.error?.['message']?.["includes"]("Call")) {
              await Helper.delay(0x3e8, this.acc, 'Placed', this);
            } else {
              if (_0xa3301e.error?.["message"]?.['includes']("Permit")) {
                throw Error("Failed to Play Mine Game - " + _0xa3301e.error?.["message"]);
              } else {
                throw Error("Failed to Play Mine Game - " + _0xa3301e.error?.['message']);
              }
            }
          }
        }
      }
      if (_0xa3301e.result?.['hash']?.["errorTypes"]) {
        await Helper.delay(0x3e8, this.acc, "Play Mine Game Failed - " + _0xa3301e.result?.["hash"]?.["actualError"]?.["details"], this);
        return;
      }
      await Helper.delay(0x3e8, this.acc, "Placed", this);
      await Helper.delay(0x3e8, this.acc, "Claiming Mine Game Reward", this);
      const _0x31e06b = await this.fetch("https://arcade.hub.soniclabs.com/rpc", "POST", undefined, {
        'jsonrpc': "2.0",
        'id': this.sessionId,
        'method': 'call',
        'params': {
          'call': {
            'dest': SONICLABS.ARCADEGAMECONTRACT,
            'data': "0x0d942fd00000000000000000000000008bbd8f37a3349d83c85de1f2e32b3fd2fce2468e0000000000000000000000000000000000000000000000000000000000000002000000000000000000000000e328a0b1e0be7043c9141c2073e408d1086e117500000000000000000000000000000000000000000000000000000000000000a000000000000000000000000000000000000000000000000000000000000000e00000000000000000000000000000000000000000000000000000000000000007656e6447616d65000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
            'value': '0n'
          },
          'owner': this.address,
          'part': this.part,
          'permit': this.permitSignature
        }
      }, {
        'network': 'SONIC',
        'origin': 'https://arcade.soniclabs.com',
        'x-owner': this.address
      }, 'https://arcade.soniclabs.com/', true);
      if (_0x31e06b.error) {
        await Helper.delay(0x7d0, this.acc, "Failed to Claim Mine Game - " + _0xa3301e.error?.["message"], this);
      }
      if (_0x31e06b.result?.['hash']?.["errorTypes"]) {
        await Helper.delay(0x3e8, this.acc, "Claim Failed - " + _0x31e06b.result?.["hash"]?.['actualError']?.["details"], this);
      } else {
        await Helper.delay(0x7d0, this.acc, "Successfully Play And Claim Mine Game", this);
      }
    }
    async ['getPoint'](_0x9d6b50 = false) {
      if (_0x9d6b50) {
        await Helper.delay(0x3e8, this.acc, "Getting User Point", this);
      }
      const _0x3d5e40 = await this.fetch("https://arcade.gateway.soniclabs.com/game/points-by-player?wallet=" + this.smartWalletAddr, 'GET', undefined, undefined, undefined, "https://arcade.soniclabs.com/", true);
      if (_0x3d5e40.status == 0xc8) {
        this.point = _0x3d5e40;
        if (_0x9d6b50) {
          await Helper.delay(0x3e8, this.acc, "Successfully Get User Point", this);
        }
      } else {
        if (_0x3d5e40.status == 0x1f4) {
          throw Error("Failed to get User Point - " + _0x3d5e40.error + ", Please Play a Game Manually So Your User Key Will be Registered");
        } else {
          throw Error("Failed to get User Point");
        }
      }
    }
  }