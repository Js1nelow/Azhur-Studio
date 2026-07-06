const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

const bot = new Bot({ token });

async function run() {
  try {
    const res = await bot.messages.sendText({ chat_id: "6513777", text: "Test from lib" });
    console.log(res);
  } catch (e) {
    console.error(e);
  }
}
run();
