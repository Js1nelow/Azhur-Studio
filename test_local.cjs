async function run() {
  const res = await fetch('http://localhost:3000/api/send-lead', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Иван',
      phone: '123'
    })
  });
  console.log(res.status, await res.text());
}
run();
