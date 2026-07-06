const token = 'f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I';
const endpoints = [
  '/channels',
  '/channels/me',
  '/users',
  '/subscribers',
  '/bot/channels',
  '/me/channels'
];

async function run() {
  for (const ep of endpoints) {
    const res = await fetch(`https://platform-api.max.ru${ep}`, {
      headers: { 'Authorization': token }
    });
    console.log(ep, res.status, await res.text());
  }
}
run();
