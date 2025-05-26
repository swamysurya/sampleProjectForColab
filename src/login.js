const loginUesrData = {
  "username": "testUser",
    "password": "testPassword"
};

function loginUser() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (loginUesrData.username === "testUser" && loginUesrData.password === "testPassword") {
        resolve("Login successful");
      } else {
        reject("Login failed");
      }
    }, 1000);
  });
}

function handleLogin() {
    loginUser()
        .then((message) => {
        console.log(message);
        // Here you can redirect the user or perform other actions after successful login
        })
        .catch((error) => {
        console.error(error);
        // Handle login failure, e.g., show an error message to the user
        });
    }

// Simulate a login attempt
handleLogin();

// Export the loginUser function for testing purposes

