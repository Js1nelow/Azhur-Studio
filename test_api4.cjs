const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function testNoApp(payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
    body: JSON.stringify(payload)
  });
  console.log('noapp:', res.status, await res.text());
}

async function run() {
  await testNoApp({ user_id: 13289223, text: "Test" });
  await testNoApp({ chat_id: 13289223, text: "Test" });
  await testNoApp({ recipient: { user_id: "13289223" }, text: "Test" });
  await testNoApp({ recipient_id: "13289223", text: "Test" });
  await testNoApp({ recipient: "13289223", text: "Test" });
  await testNoApp({ channel_id: "13289223", text: "Test" });
}
run();
