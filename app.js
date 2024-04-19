let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(fetchPromise);

fetchPromise.then((response) => {
  //   console.log(fetchPromise);
  //   console.log(response);

  // response.json()將response內，文字的部分轉成JSON(JavaScript Object Notation)
  // .json() method os also asynchronous function
  // 所以它也會return Promise object
  response.json().then((data) => {
    console.log(data);
  });
});
// 然而，上面的寫法會產生callback hell
// 所以改寫如下：
fetchPromise
  .then((response) => response.json())
  .then((data) => console.log(data));
