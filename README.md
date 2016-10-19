node.js - Monitoring app for dwarfpool/eth mining rigs. 
========================================================
Sends twilio SMS(text messages) alerts when the rig is performing below SLA.
-------------------------------------------


Prerequisite: node.js v4.6.1 
You can install node.js from [here](https://nodejs.org).

Install pick_pocket
-------------------
```
git clone https://github.com/sanjay-shah/pick_pocket.git
cd pick_pocket
npm install
```

Edit `config.js` file to add twilio and dwarfpool account credentials

```
config.twilio.account_sid = process.env.TWILIO_ACCOUNT_SID || 'TWILIO_ACCOUNT_SID';
config.twilio.auth_token =  process.env.TWILIO_AUTH_TOKEN || 'TWILIO_AUTH_TOKEN';
config.twilio.from =  process.env.TWILIO_FROM || 'TWILIO_FROM';
config.twilio.to =  process.env.TWILIO_TO || 'TWILIO_TO';

config.mining.dwarfpool.address = process.env.MINE_DWARFPOOL_ADDRESS || 'MINE_DWARFPOOL_ADDRESS';
config.mining.dwarfpool.email =  process.env.MINE_DWARFPOOL_EMAIL || 'MINE_DWARFPOOL_EMAIL';
```
Run app
-------
```
node /FULL_PATH/pick_pocket/app.js
```

Crontab
-------
You can run this app in any scheduler such as cron job.

Here is an example to set up crontab:

Edit `pick_pocket.crontab` file to edit the FULL_PATH of pick_pocket installation directory. For example
```
*/5 * * * * node /home/johndoe/pick_pocket/app.js
```
Load crontab entry from file
```
crontab pick_pocket.crontab
```
or to run as root
```
sudo crontab pick_pocket.crontab
```

