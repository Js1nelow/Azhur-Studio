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
  await test('/messages/sendText', { chat_id: "13289223", text: "Test" });
  await test('/messages/sendText', { chatId: "13289223", text: "Test" });
  await test('/bot/v1/messages/sendText', { chatId: "13289223", text: "Test" });
}
run();
