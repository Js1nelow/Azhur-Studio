const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(authHeader, payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader },
    body: JSON.stringify(payload)
  });
  console.log(authHeader, res.status, await res.text());
}

async function run() {
  await test(`Bearer ${token}`, { user_id: 13289223, text: "Test" });
  await test(`Bearer ${token}`, { user_id: "13289223", text: "Test" });
  await test(`Token ${token}`, { user_id: 13289223, text: "Test" });
  await test(`Bot ${token}`, { user_id: 13289223, text: "Test" });
}
run();
