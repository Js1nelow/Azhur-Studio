process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const bot = new Bot(token);

async function run() {
  try {
    const res = await bot.api.sendMessageToUser(329610108, "Test from API lib correctly!");
    console.log("Success:", res);
  } catch(e) {
    console.error("Error sending to user:", e.message);
  }
}
run();
