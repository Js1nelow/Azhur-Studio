const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
    body: JSON.stringify(payload)
  });
  console.log(JSON.stringify(payload), res.status, await res.text());
}

async function run() {
  await test({ business_account_id: "13289223", text: "Test" });
  await test({ bot_id: "13289223", text: "Test" });
  await test({ user: { id: "13289223" }, text: "Test" });
  await test({ user_id: "13289223", message: { text: "Test" } });
  await test({ recipient: { id: "13289223" }, message: { text: "Test" } });
  await test({ chat_id: "13289223", text: "Test" });
}
run();
