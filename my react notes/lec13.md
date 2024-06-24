this the is the lec - ' time for test '

In this we talk about developers testing not client side , QA and application testing

# type of testing (developer)

- unit testing
- itegration testing
- end to end testing with tools like silenium , cyprus

-> in this we are concerned about only fisrt towo testing for developers

-> so jest is a javasript testing libraray which is used to test javascript
and react testing library uses jest behind the scene.

# Setting up Testing in our app

- Install React Testing Library

- Installed jest

- Installed Babel dependencies

- Configure Babel

- Configure Parcel Config file to disable default babel transpilation

- Jest - npx jest -init

- Install jsdom library

- Install @babel/preset-react to make JSX work in test cases

- Include @babel/preset-react inside my babel config / refer-6

- Install @testing-library/jest-dom

# Detailed info - Setting up Testing in our app

1-> we hava installed react testing library "npm i -D @testing-library/react" and jest-> "npm install -D jest" and
then installed babel dependencies "npm install --save-dev babel-jest @babel/core @babel/preset-env".

2-> then made babel.config.js file wrote babel configuration :
module.exports = {
presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
};

- read all this on jest google it / parcel is a beast

3 -> see parcel also uses bable and it has it internal confugration for babel and we have also written cofiguration
so to To disable Babel transpilation in Parcel, override the default Parcel config for JavaScript to exclude @parcel/transformer-babel.

-> we made a .parcelrc file and wrote these configuraton.
.parcelrc:
{
"extends": "@parcel/config-default",
"transformers": {
"\*.{js,mjs,jsx,cjs,ts,tsx}": [
"@parcel/transformer-js",
"@parcel/transformer-react-refresh-wrap"
]
}
}

4-> One last jest configuration npx jest --init

- jsdom is a JavaScript implementation of the DOM (Document Object Model) and HTML standards, primarily used in Node.js environments. It allows developers to create and interact with a virtual DOM within a Node.js application, enabling server-side manipulation and testing of HTML and DOM-related code without needing a browser.

5 -> we will also have to intall js dom library - "npm install --save-dev jest-environment-jsdom"
 
6-> we will have to install one more library is we want to test jsx code like we rendereed the contact in the test.contact.js so for that we have to install
@babel/preset-react and change the config of the babel.config.js - ["@babel/preset-react" , {runtime: "automatic"}],

7 for using this function - toBeInTheDocument() we have to install @testing-library/jest-dom

* so for testing the header we creacte header.test.js and the header uses selector that aur react reasting library 
  does'nt understands it can undestand js , react , jsx but not redux
  so we have to porvide our header the app store in the test so that it can understand selector




  so when we have to test a component like body in ehich we have fetch / which is given to us by browser
  and in js dom  as it is not like actual browser in which we are rendering and jest does not usnderstands fetch of we mock fetch with mock data

when ever we are rendering a componnet with a state and asyn operation the we have to wrap that component in a act
e.g - search.test.js
 // when we are using a component which has state and fetch then we should wra that in a act , and for act we use async await
   // then we arap it in a bowser router as link is not understood by jest


* for proper understandin go to contact.test.js-> header-search

there is - beforeAll(){},beforeEach(){} and same as after which is called after and before every test, these are the helper functions