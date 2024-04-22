const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// 法1：以前的作法
function alarm(person, delay) {
  setTimeout(() => {
    output.innerHTML = person + "起床！";
  }, delay);
}

button.addEventListener("click", (e) => {
  alarm(name.value, delay.value);
});

// 法2：用promise的作法
// return Promise object
// pending的delay秒之後，state要變成fulfilled(執行resolve時)
// 若delay < 0，state要變成rejected(執行reject時)
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("delay不能小於0");
    } else {
      setTimeout(() => {
        resolve(person + "起床！");
      }, delay);
    }
  });
}

button.addEventListener("click", (e) => {
  let promiseObject = alarm(name.value, delay.value);
  promiseObject
    .then((message) => {
      output.innerHTML = message;
    })
    .catch((e) => {
      output.innerHTML = e;
    });
});

// 法3：用promise的作法&async funtion
// return Promise object
// pending的delay秒之後，state要變成fulfilled(執行resolve時)
// 若delay < 0，state要變成rejected(執行reject時)
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("delay不能小於0");
    } else {
      setTimeout(() => {
        resolve(person + "起床！");
      }, delay);
    }
  });
}

button.addEventListener("click", async () => {
  try {
    let result = await alarm(name.value, delay.value);
    output.innerHTML = result;
  } catch (e) {
    output.innerHTML = e;
  }
});

// 以上其實就是(自己作的)Promise Based API
