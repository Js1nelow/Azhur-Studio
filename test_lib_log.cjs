process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const bot = new Bot({ token });

// Override fetch globally to log
const originalFetch = global.fetch;
global.fetch = async (...args) => {
  console.log("FETCH:", args);
  return originalFetch(...args);
};

async function run() {
  try {
    await bot.api.sendMessageToUser({ user_id: 329610108, text: "Test" });
  } catch(e) {}
}
run();
