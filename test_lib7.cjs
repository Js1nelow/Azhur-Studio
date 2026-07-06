process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
const { Bot } = require('@maxhub/max-bot-api');
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const bot = new Bot({ token });

async function run() {
  try {
    const res = await bot.api.sendMessageToUser({ user_id: 329610108, text: "Test from API lib" });
    console.log("Success:", res);
  } catch(e) {
    console.error("Error sending to user:", e.message);
  }
  try {
    const res2 = await bot.api.sendMessageToChat({ chat_id: 6513777, text: "Test from API lib" });
    console.log("Success:", res2);
  } catch(e) {
    console.error("Error sending to chat:", e.message);
  }
}
run();
