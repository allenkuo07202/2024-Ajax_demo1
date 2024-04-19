let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);
console.log(fetchPromise);

fetchPromise
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((e) => console.log(e));
