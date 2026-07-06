const token = process.env.MAX_BOT_TOKEN;
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
test('https://platform-api.max.ru/messages?user_id=329610108');
