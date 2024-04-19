console.log("開始執行程式碼");
setTimeout(() => console.log("2秒後出現"), 2000);
console.log("最後一行");

// JavaScript中，絕大多數的function皆屬於synchronous function
function hello() {
  let name = "Wilson";
  console.log("hello" + name);
}

console.log("你好");
hello();
console.log("你好2");
