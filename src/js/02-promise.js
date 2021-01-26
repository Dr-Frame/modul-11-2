const fetchUser = (userName) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = Math.random() > 0.3;

      if (success) {
        const user = {
          name: userName,
          age: 25,
          posts: 74,
        };
        resolve(user);
      }

      const error = "Произошла ошибка";
      reject(error);
    }, 1000);
  });
};

fetchUser("Mango").then(onFetchUserSuccess).catch(onFetchuserError);

function onFetchUserSuccess(user) {
  console.log(user);
}

function onFetchuserError(error) {
  console.log(`%c ${error}`, "color: red; font-size: 16px;");
}
