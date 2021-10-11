<h1 align="center">Shuttery: Appwrite - React Demo 💻</h1>
<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/shuttery.jpg" target="_blank" />
</p>
<h2 align='center'>A demo web app built with React JS and Appwrite backend.</h2><br/>

## 📚 | Introduction

- This web app gets beautiful pictures from <b>Unsplash</b> for all kinds of artistic needs.
- Current parameters: <b>Search, Orientation, Count (currently capped to 10)</b>.
- This app demonstrates <i>Authentication</i> via <b>Google OAuth using an Appwrite backend</b>.
- Shuttery is built with <b>React JS, Appwrite Web, and Unsplash API</b>.<br>

<br/>

## 🚀 | Usage

- Appwrite Web: <a href='https://appwrite.io/'>Installation</a>, <a href='https://appwrite.io/docs'>Documentation</a> and <a href='https://30days.appwrite.io/'>Resources</a>.
- Clone this repository:<br>

```sh
git clone https://github.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021.git
```

- Install necessary libraries:<br>

```sh
npm install
```

- Enjoy the project! 😉

<br/>

## 📁 | Folder Structure

Replace the <b>Endpoint and Project ID</b> in <i>src/Appwrite.js</i>.

```js
const sdk = new Appwrite();
sdk
	.setEndpoint("ENDPOINT URL") // set your own endpoint
	.setProject("PROJECT ID"); // set your own project id
```

<!-- <br> -->

```sh
public
├───index.html
src
├───components
│   ├───Footer
│   │   ├───Footer.jsx
│   │   └───Footer.scss
│   ├───Form
│   │   ├───Form.jsx
│   │   ├───Form.scss
│   │   └───loader.png
│   ├───Image
│   │   ├───Image.jsx
│   │   └───Image.scss
│   └───Navbar
│       ├───Navbar.jsx
│       └───Navbar.scss
└───routes
    ├───Application
    │    ├───App.jsx
    │    └───Application.scss
    ├───Login
    │   ├───Login.jsx
    │   └───Login.scss
    └───ProtectedRoute.jsx
```
<br/>

## 📷 | Screenshots

<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/login.png" target="_blank" />
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/home.png" target="_blank" />
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/result.png" target="_blank" />
</p>


<br/>

## 🍻 | Contributing

Contributions, issues and feature requests are welcome.<br>
Feel free to check [issues page](https://github.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/issues) if you want to contribute.

<br/>

## 🧑🏽 | Author

**Kaustav Mukhopadhyay**

- Linkedin: [@kaustavmukhopadhyay](https://www.linkedin.com/in/kaustavmukhopadhyay/)
- Github: [@muKaustav](https://github.com/muKaustav)

<br/>

## 🙌 | Show your support

Drop a ⭐️ if this project helped you!

<br/>

## 📝 | License

Copyright © 2021 [Kaustav Mukhopadhyay](https://github.com/muKaustav).<br />
This project is [MIT](./LICENSE) licensed.

---
