export const login = async ({ email, password }) =>
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      if (email != "kiet@gmail.com" && password != "123456") {
        reject(new Error("Loggin failed!"));
      }
      resolve({
        firstName: "John",
        lastName: "Doe",
      });
    }, 3000);
  });
