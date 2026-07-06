const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': token },
    body: JSON.stringify(payload)
  });
  console.log(JSON.stringify(payload), res.status, await res.text());
}

async function run() {
  await test({ chat_id: 13289223, text: "Test" });
  await test({ chatId: 13289223, text: "Test" });
  await test({ channel_id: 13289223, text: "Test" });
}
run();
