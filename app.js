async function myFunc() {
  return 100;
}

let result = myFunc();
console.log(result);
result.then((data) => console.log(data));

async function fetchProduct() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

fetchProduct();
// 我們把.then()的語法，改成await的語法，那要如何處理錯誤？
// 把上面的部分放進try，下面再加catch
