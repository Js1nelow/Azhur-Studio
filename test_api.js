const fetch = require('node-fetch'); // or use built-in fetch if Node 18+
const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(authHeader) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': authHeader },
    body: JSON.stringify({ channel_id: "13289223", text: "Test" })
  });
  console.log(authHeader, res.status, await res.text());
}

async function run() {
  await test(`app:${token}`);
  await test(`app: ${token}`);
  await test(`Bearer ${token}`);
  await test(`Bearer app:${token}`);
  await test(`${token}`);
}
run();
