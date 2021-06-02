const fetchAllUsers = () => {
  return new Promise((resolve, reject) => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => resolve(json))
      .catch((err) => reject(err));
  });
};

const fetchUserById = () => {
  // your code here
};

export { fetchAllUsers, fetchUserById };
