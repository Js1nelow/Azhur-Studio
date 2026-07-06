const { Bot } = require('@maxhub/max-bot-api');
const bot = new Bot({ token: 'test' });
console.log(Object.keys(bot.api));
