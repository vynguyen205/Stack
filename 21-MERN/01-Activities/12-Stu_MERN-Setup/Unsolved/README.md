# Add Comments to Implementation of the MERN-stack Architecture

## Root-level Functionality

* TODO: Explain what each script does in the root-level `package.json` file:

```json
"scripts": {
  // this is to start the server. when you do node, it knows to find the server.js file
  "start": "node server/server.js",
  // when you do npm develop it will run both the backend and 
  "develop": "concurrently \"cd server && npm run watch\" \"cd client && npm start\"",
  //  when you npm i, it will install the package json from client and server side
  "install": "cd server && npm i && cd ../client && npm i",
  // it will cd into server and run the seed
  "seed": "cd server && npm run seed",
  // when you run build, it will go into the client side folder and run buld
  "build": "cd client && npm run build"
},
```

## Client-side Functionality

* TODO: Explain what this script does in the client-side `client/package.json` file:

```json
// 
"proxy": "http://localhost:3001",
```

## Server-side Functionality
* TODO: Add a comment describing the functionality of this block of code in `server/server.js`:

```js
// serve all the stauc file in the public folder.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}
```

* TODO: Add a comment describing the functionality of this route in `server/server.js`:

```js
// if they go somewhere else, bring it into the index.html file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
```
