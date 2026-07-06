const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const bot = new Bot({ token });

async function run() {
  try {
    const res1 = await bot.api.sendMessageToChat({ chat_id: 6513777, text: "Test chat 1" });
    console.log("Chat 1:", res1);
  } catch(e) { console.error("Chat 1 error:", e.message) }

  try {
    const res2 = await bot.api.sendMessageToUser({ user_id: 329610108, text: "Test user 2" });
    console.log("User 2:", res2);
  } catch(e) { console.error("User 2 error:", e.message) }
}
run();
