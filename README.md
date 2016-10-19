pick_pocket - Monitoring app for dwarfpool mining rig. Sends twilio SMS alerts (text messages)
=============================================================================================

Install
-----
```
git clone https://github.com/sanjay-shah/pick_pocket.git
cd pick_pocket
npm install
```

Edit `config.js` file to add twilio and dwarfpool account credentials

```
config.twilio.account_sid = process.env.TWILIO_ACCOUNT_SID || 'BC123e722Hhk876ggTh8788hsa2e2f';
config.twilio.auth_token =  process.env.TWILIO_AUTH_TOKEN || 'aa7g8nn2hg897h2a45hdw22';
config.twilio.from =  process.env.TWILIO_FROM || '+14506667788';
config.twilio.to =  process.env.TWILIO_TO || '+14508887777';

config.mining.dwarfpool.address = process.env.MINE_DWARFPOOL_ADDRESS || 'pick7y77ha23nn8h9js8vfg765jah89jkjkjkjkj2';
config.mining.dwarfpool.email =  process.env.MINE_DWARFPOOL_EMAIL || 'user@example.com';
```

Edit `pick_pocket.crontab` file to add edit the FULL_PATH of pick_pocket installation directory 
```
*/5 * * * * node /home/johndoe/pick_pocket/app.js
```
Load the crontab
```
crontab pick_pocket.crontab
```

