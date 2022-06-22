function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });
}

(async function () {
  console.log('Start');
  await delay(500);
  console.log('Demo');
})();


async function run(index) {
  await delay(1000);
  console.log(`Run ${index}`)
}

(async function() {
  const start = performance.now();
  console.log('Relay race');
  await run(1);
  await run(2);
  await run(3);
  console.log(`Duration Relay race: ${performance.now() - start}`)

  const startRace = performance.now();
  console.log('Race');
  await Promise.all([run(1), run(2), run(3)]);
  console.log(`Duration Race: ${performance.now() - startRace}`)
})();

