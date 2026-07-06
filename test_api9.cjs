const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(method, endpoint) {
  const res = await fetch(`https://platform-api.max.ru${endpoint}`, {
    method,
    headers: { 'Authorization': token }
  });
  console.log(endpoint, res.status, await res.text());
}

async function run() {
  await test('GET', '/me');
  await test('GET', '/bot');
  await test('GET', '/bots/me');
  await test('GET', '/users/me');
  await test('GET', '/messages');
}
run();
