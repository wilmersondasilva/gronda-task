# About the project

## How to run it

It's necessary to install the dependencies

```javascript
npm install
```

With all the dependencies installed, to see the project running in the browser:

```javascript
npm start
```

This command will start running the project in [http://localhost:3000](http://localhost:3000)

## Other commands

The project was created using Create React App, so all its commons commands are included here. Furthermore, I added these:

```javascript
npm run lint                # run eslint
npm run format              # run prettier
```

## About My Decisions

As I already described above, I used Create React App to create this project and I didn't use any other third library (like Lodash or Axios), except the libraries that are common in a React application, like Styled Components and PropTypes.

I didn't use Redux because, in my opinion, it would be overengineering since the project is really simple. Instead, I used React Hooks to help me with state management and organize the code better.

### CSS

For CSS, I used Styled Components. Also created two general files called `index.css` and `reset.css` based on [Meyer's reset](http://meyerweb.com/eric/tools/css/reset/).

I'm too used to develop using the `mobile-first` approach and when I first started the project I was planning to create also the list of companies, so I build all the components as responsive components. Unfortunately, in the end, I hadn't enough time to work on a company list.

### Server + DB

To fake the HTTP requests, I was planning to use the [json-server](https://github.com/typicode/json-server) utility to mock a server, but as I have to send some filters as params, I need to make a POST request, not a GET request. To accomplish this requirement with json-server would add too much complexity. So, I decided to mock a server using plain JavaScript into the project.

For this, I created a file called `db.js` which is basically an object containing all the possible filters with fixed values. I created, also, a `fakeApi.js` that has a method `post`. This method `post` receives the filters as parameters and it's responsible to communicate with the `db.js`.

No one other file knows about the existence of the `db.js` and the rest of the application communicates only with the `fakeApi.js` and like it was an actual API. I even put a wait of 1 second before returns the response in order to simulate the fetching. So if we need to refactor the project to use a real API, it would be really straightforward.

I think this solution is simple, elegant and works really good

### Automated Tests

To create the unit tests, I've chosen to use Jest + React Testing Library which I think it's a great match for React applications. I put a git hook to running the tests before each git push command. Unfortunately, as I didn't want to extend longer than 5 hours working on this I created just basic unit tests
