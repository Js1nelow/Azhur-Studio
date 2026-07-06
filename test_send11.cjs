const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(endpoint, payload) {
  const res = await fetch(`https://platform-api.max.ru${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': token },
    body: JSON.stringify(payload)
  });
  console.log(endpoint, res.status, await res.text());
}

async function run() {
  await test('/chats/6513777/messages', { text: "Test" });
  await test('/bot/messages', { chat_id: 6513777, text: "Test" });
  await test('/messages', { channel_id: "6513777", text: "Test" });
}
run();
