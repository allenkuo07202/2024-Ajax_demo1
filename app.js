let balance = 0; // shared resource
let mutex = Promise.resolve(); // return a fulfilled promise
// 一開始就要return a fulfilled promise的原因是
// 第一次執行mutex.then()的時候，我們就要直接執行then後面的程式碼

const randomDelay = () => {
  // return value is a Promise
  // and the time for this promise changing from pending to fulfilled
  // is random (0s-0.1s)
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
};

async function loadBalance() {
  // 模擬查詢銀行帳戶，要跟伺服器連線，須要一點時間
  await randomDelay(); // 等個隨機的0s~0.1s
  return balance;
}

async function saveBalance(value) {
  // 模擬存入銀行帳戶，要跟伺服器連線，須要一點時間
  await randomDelay();
  balance = value;
}

async function sellGrapes() {
  mutex = mutex.then(async () => {
    const balance = await loadBalance();
    // 本來loadBalance()是return一個Promise，但我們有用await，所以會直接return balance
    console.log(`賣葡萄前，帳戶金額為${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`賣葡萄後，帳戶金額為${newBalance}`);
  });
  return mutex; // 因為async function要return一個Promise，所以在這裡return mutex
}

async function sellOlives() {
  mutex = mutex.then(async () => {
    const balance = await loadBalance();
    console.log(`賣橄欖前，帳戶金額為${balance}`);
    const newBalance = balance + 50;
    await saveBalance(newBalance);
    console.log(`賣橄欖後，帳戶金額為${newBalance}`);
  });
  return mutex;
}

async function main() {
  await Promise.all([
    sellGrapes(),
    sellOlives(),
    sellOlives(),
    sellOlives(),
    sellGrapes(),
    sellGrapes(),
    sellGrapes(),
  ]);
  const balance = await loadBalance();
  console.log(`賣葡萄與橄欖後的帳戶金額是${balance}`);
}
main();
