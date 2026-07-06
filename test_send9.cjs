const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';

async function test(endpoint) {
  const res = await fetch(`https://platform-api.max.ru${endpoint}`, {
    method: 'GET',
    headers: { 'Authorization': token }
  });
  console.log(endpoint, res.status, await res.text());
}

async function run() {
  await test('/chats/6513777');
  await test('/chats/329610108');
  await test('/users/329610108');
}
run();
