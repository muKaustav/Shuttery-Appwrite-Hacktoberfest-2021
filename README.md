<h1 align="center">Shuttery: Appwrite - React Demo π»</h1>
<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/shuttery.jpg" target="_blank" />
</p>
<h2 align='center'>A demo web app built with React JS and Appwrite backend.</h2><br/>

## π | Introduction

- This web app fetches and lets users download beautiful pictures from <b>Unsplash</b> to satisfy their artistic needs.
- Current parameters: <b>Search, Orientation, Count (currently capped to 10)</b>.
- This app demonstrates <i>Authentication</i> via <b>Google OAuth using an Appwrite backend</b>.
- Shuttery is built with <b>React JS, Appwrite Web, and Unsplash API</b>.<br>

<br/>

## π | Usage

- Appwrite Web: <a target='_blank' href='https://appwrite.io/'>Installation</a>, <a target='_blank' href='https://appwrite.io/docs'>Documentation</a> and <a target='_blank' href='https://30days.appwrite.io/'>Resources</a>.
- Clone this repository:<br>

```sh
git clone https://github.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021.git
```

- Install necessary libraries:<br>

```sh
npm install
```

- Enjoy the project! π

<br/>

## π | Folder Structure

- Replace the <b>Endpoint and Project ID</b> in <i>src/Appwrite.js</i>.

```js
const sdk = new Appwrite();
sdk
	.setEndpoint("ENDPOINT URL") // set your own endpoint
	.setProject("PROJECT ID"); // set your own project id
```

- Replace the redirect and failure routes for Google OAuth in <i>src/Appwrite.js</i>. <i>(<a target='_blank' href='https://dev.to/appwrite/30daysofappwrite-oauth-providers-3jf6'>Article for reference</a>)</i>

```js
sdk.account.createOAuth2Session(
	"google",
	"http://localhost:3000/",
	"http://localhost:3000/login",
	["profile"]
);
```

<!-- <br> -->

```sh
public
ββββindex.html
src
ββββcomponents
β   ββββFooter
β   β   ββββFooter.jsx
β   β   ββββFooter.scss
β   ββββForm
β   β   ββββForm.jsx
β   β   ββββForm.scss
β   β   ββββloader.png
β   ββββImage
β   β   ββββImage.jsx
β   β   ββββImage.scss
β   ββββNavbar
β       ββββNavbar.jsx
β       ββββNavbar.scss
ββββroutes
    ββββApplication
    β    ββββApp.jsx
    β    ββββApplication.scss
    ββββLogin
    β   ββββLogin.jsx
    β   ββββLogin.scss
    ββββProtectedRoute.jsx
```

<br/>

## π· | Screenshots

<p align = center>
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/login.png" target="_blank" />
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/home.png" target="_blank" />
    <img alt="Project Logo" src="https://raw.githubusercontent.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/main/assets/result.png" target="_blank" />
</p>

<br/>

## π» | Contributing

Contributions, issues and feature requests are welcome.<br>
Feel free to check [issues page](https://github.com/muKaustav/Appwrite-DemoApp-Hacktoberfest-2021/issues) if you want to contribute.

<br/>

## π§π½ | Author

**Kaustav Mukhopadhyay**

- Linkedin: [@kaustavmukhopadhyay](https://www.linkedin.com/in/kaustavmukhopadhyay/)
- Github: [@muKaustav](https://github.com/muKaustav)

<br/>

## π | Show your support

Drop a β­οΈ if this project helped you!

<br/>

## π | License

Copyright Β© 2021 [Kaustav Mukhopadhyay](https://github.com/muKaustav).<br />
This project is [MIT](./LICENSE) licensed.

---
