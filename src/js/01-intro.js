/* const promise = new Promise((resolve, reject) => {
  const success = Math.random() > 0.3;

  setTimeout(() => {
    if (success) {
      resolve("успех");
    }

    reject("ошибка");
  }, 2000);
});

let isLoading = false;

isLoading = true;

// в Then можно ставить два колбека - для resolve и reject
promise.then(
  (result) => console.log(result),
  (error) => console.log(error)
);

// вариант получше
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error))
  .finally(() => {
    isLoading = false;
  }); */

/*========================= Chaining ===========================*/

const promise = new Promise((resolve) => {
  resolve(5);
});
promise
  .then((x) => {
    console.log("x: ", x);
    return x * 2;
  })
  .then((y) => {
    console.log("y: ", y);
    return y + 10;
  })
  .then((z) => {
    console.log("z: ", z);
  })
  .catch((error) => console.log(error));
