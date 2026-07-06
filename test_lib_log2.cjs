process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const bot = new Bot(token);

const originalFetch = global.fetch;
global.fetch = async (...args) => {
  console.log("FETCH URL:", args[0]);
  console.log("FETCH BODY:", args[1].body);
  return originalFetch(...args);
};

async function run() {
  try {
    await bot.api.sendMessageToUser(329610108, "Test");
    await bot.api.sendMessageToChat(6513777, "Test");
  } catch(e) {}
}
run();
