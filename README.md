# Soniclabs Arcade Testnet BOT

## Prerequisite
- Git
- Node JS
- $S TOKEN TESTNET FROM https://testnet.soniclabs.com/account
- Tokens on Your Sonic Arcade Accounts
- Play Plinko Game Once
- Play Whell Game Once
- Play Mines Game Once

## Soniclabs Arcade Incentive Testnet

- Get Faucet : https://testnet.soniclabs.com/account
- Register : [https://airdrop.soniclabs.com/?ref=4K0I6S](https://sightai.io/dashboard?referral-code=4K0I6S)
- Connect Wallet to Sonic Testnet
- Enter Access Code 
```
qos4k8
```
- Click "Sonic Arcade" And Get You Token By Clickig on `Get some $TOKEN >`
- Connect Your Twitter > Follow Twitter > Complete Captcha > Get Token (REMEMBER TO CLAIM FAUCET WEEKLY)
- After You Get Your Token, Play All Game at Least Once
- Now You're Ready For BOT
- LFG


## BOT FEATURE

- Multi Account 
- Support PK
- Support Proxy
- Auto Play Arcade Game Daily


## Setup & Configure BOT

### Linux
1. clone project repo
   ```
   git clone https://github.com/airdropinsiders/soniclabsbot.git && cd soniclabsbot
   ```
2. run
   ```
   npm install
   ```
3. run
   ```
   cp -r accounts/accounts_tmp.js accounts/accounts.js && cp -r config/proxy_list_tmp.js config/proxy_list.js
   ```
5. configure your accounts
   ```
   nano accounts/accounts.js
   ```
6. configure the bot config
    ```
   nano config/config.js
    ```
7. configure the proxy (optional)
    ```
   nano config/proxy_list.js
    ```
8. to start the app run
    ```
    npm run start
    ```
   
### Windows
1. Open your `Command Prompt` or `Power Shell`.
2. Clone project repo
   ```
   git clone https://github.com/airdropinsiders/soniclabsbot.git
   ```
   and cd to project dir
   ```
   cd soniclabs-arcade-bot
   ```
3. Run 
   ```
   npm install
   ```
5. Navigate to `soniclabs-arcade-bot` directory. 
6. Navigate to `accounts` folder and rename `accounts_tmp.js` to `accounts.js`.
7. Now open `acccounts.js` and setup your accounts. 
8. Now Back to `soniclabs-arcade-bot` directory and Navigate to `config` and adjust the `config.js` as needed.
9. Rename `proxy_list_tmp.js` to `proxy_list.js`.
10. Back to `soniclabs-arcade-bot` directory.
11. copy `config` and `accounts` folder to `app` folder.
12. To start the app open your `Command Prompt` or `Power Shell` again and run
    ```
    node app/index.js
    ```

## Update Bot

To update bot follow this step :
1. run
   ```
   git pull
   ```
   or
   ```
   git pull --rebase
   ```
   if error run
   ```
   git stash && git pull
   ```
2. run
   ```
   npm update
   ```
2. start the bot


## NOTE

You need to join with my referal link to be able to run bot, you can replace your inviter link with mine by change `config.js` file
```
static AUTOJOINREF = true;
```
Change your inviter will also change your refferal code , so please note that.

If you got `error still waiting random number` for so long time try to play manually to triggrer rpc `reinitiate` after that you can use bot again

## CONTRIBUTE

Feel free to fork and contribute adding more feature thanks. To get original unencrypted code just join my channel, original code (index.js and src folder) are Obfuscated during build
