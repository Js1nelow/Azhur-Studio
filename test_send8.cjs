const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(payload) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': token },
    body: JSON.stringify(payload)
  });
  console.log(Object.keys(payload)[0], res.status, await res.text());
}

async function run() {
  await test({ phone: "79160000000", text: "Test" });
  await test({ email: "test@mail.ru", text: "Test" });
  await test({ login: "test", text: "Test" });
  await test({ recipient_id: 329610108, text: "Test" });
}
run();
