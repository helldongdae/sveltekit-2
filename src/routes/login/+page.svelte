 <body>
    <div class="container">
      <img src="company-logo.png" alt="Company Logo">
      <form>
        <label for="email">Email Address:</label>
        <input type="email" id="email" name="email" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit">Log In</button>
      </form>
      <a href="#">Forgot Password?</a>
      <a href="#">Sign Up</a>
    </div>
    <footer>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms and Conditions</a>
      <a href="#">About Us</a>
      <a href="#">Contact Us</a>
    </footer>
  </body>

<style>
body {
  background-color: #f3f3f3;
  font-family: Arial, sans-serif;
}

.container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 50px auto;
  max-width: 400px;
  padding: 30px;
  text-align: center;
}

img {
  display: block;
  margin: 0 auto 30px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  display: none;
}

input {
  background-color: #f3f3f3;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  padding: 10px;
}

button {
  background-color: #4CAF50;
  border: none;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  margin-top: 10px;
  padding: 10px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #3e8e41;
}

a {
  color: #4CAF50;
  display: block;
  margin-top: 20px;
  text-decoration: none;
}

footer {
  font-size: 14px;
  margin-top: 50px;
  text-align: center;
}

footer a {
  color: #666;
  margin: 0 10px;
  text-decoration: none;
}

</style>