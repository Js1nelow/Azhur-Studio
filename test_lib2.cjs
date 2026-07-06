const { Bot } = require('@maxhub/max-bot-api');
console.log(Object.keys(Bot.prototype));
const bot = new Bot({ token: 'test' });
console.log(Object.keys(bot));
