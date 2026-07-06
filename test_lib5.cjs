const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const bot = new Bot({ token });

async function run() {
  try {
    const res1 = await bot.api.sendMessageToUser({ user_id: 329610108, text: "Test user" });
    console.log(res1);
  } catch(e) {
    console.error(e);
  }
}
run();
