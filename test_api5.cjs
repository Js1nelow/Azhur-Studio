async function testNoApp(tokenStr) {
  const res = await fetch('https://platform-api.max.ru/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Authorization': tokenStr },
    body: JSON.stringify({ channel_id: "13289223", text: "Test" })
  });
  console.log(tokenStr.substring(0, 10), res.status, await res.text());
}

async function run() {
  await testNoApp('app:f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I');
  await testNoApp('f9LHodD0cOKYVrU7jZ6k4AI6RVg401IjuK36zTixRVAyxAZVupDXO0xPg4cb6rLbRoNjMydfdBBHOWBsSY3I');
  await testNoApp('app:randomstringrandomstringrandomstringrandomstringrandomstring');
  await testNoApp('randomstringrandomstringrandomstringrandomstringrandomstring');
}
run();
