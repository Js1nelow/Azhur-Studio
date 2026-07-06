const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `app:${token}` },
    body: JSON.stringify(payload)
  });
  console.log('app:', res.status, await res.text());
}

async function testNoApp(payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': `${token}` },
    body: JSON.stringify(payload)
  });
  console.log('noapp:', res.status, await res.text());
}

async function run() {
  await testNoApp({ chat_id: "13289223", text: "Test" });
  await testNoApp({ user_id: "13289223", text: "Test" });
  await testNoApp({ peer_id: "13289223", text: "Test" });
  await testNoApp({ recipient: { id: "13289223" }, text: "Test" });
  await testNoApp({ to: "13289223", text: "Test" });
}
run();
