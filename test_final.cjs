const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(url) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': token },
      body: JSON.stringify({ text: "Test message" })
    });
    console.log(url, res.status, await res.text());
  } catch(e) { console.error(e.message) }
}

async function run() {
  await test(`https://platform-api.max.ru/messages?user_id=13289223`);
  await test(`https://platform-api.max.ru/messages?chat_id=13289223`);
}
run();
