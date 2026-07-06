const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(url) {
  try {
    const res = await fetch(url);
    console.log(url, res.status, await res.text());
  } catch(e) { console.error(e.message) }
}

async function run() {
  await test(`https://platform-api.max.ru/bot/v1/messages/sendText?token=${token}&chatId=6513777&text=Test`);
  await test(`https://api.max.ru/bot/v1/messages/sendText?token=${token}&chatId=6513777&text=Test`);
  await test(`https://botapi.max.ru/bot/v1/messages/sendText?token=${token}&chatId=6513777&text=Test`);
}
run();
