var config = {};

config.twilio = {};
config.twilio.account_sid = process.env.TWILIO_ACCOUNT_SID || 'TWILIO_ACCOUNT_SID';
config.twilio.auth_token =  process.env.TWILIO_AUTH_TOKEN || 'TWILIO_AUTH_TOKEN';
config.twilio.from =  process.env.TWILIO_FROM || 'TWILIO_FROM';
config.twilio.to =  process.env.TWILIO_TO || 'TWILIO_TO';

config.mining = {};
config.mining.dwarfpool = {};
config.mining.dwarfpool.address = process.env.MINE_DWARFPOOL_ADDRESS || 'MINE_DWARFPOOL_ADDRESS';
config.mining.dwarfpool.email =  process.env.MINE_DWARFPOOL_EMAIL || 'MINE_DWARFPOOL_EMAIL';

module.exports = config;