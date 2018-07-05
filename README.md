##### Challenge for TrustPilot

by Andrés Mechali

# Table of Contents

- Introduction
- Instructions
  - Demo
  - Using Docker
  - Without Docker
    - Install
    - Run
- Architecture
  - Folder structure
  - Libraries
- Further improvements
  - Testing
  - Responsive design

# Introduction

The widget that I built has the intention to display a list of reviews, provided in the file `reviews.json`, and a
series of details for the chosen review. It also provides a brief summary about the product, based both in a fake
productName and in the given reviews.

# Instructions

## Using Docker

For building the container, please run:

```
sudo docker build -t challenge .
```

(include the last dot)

For running the container:

```
sudo docker run -p 3000:3000 challenge
```

## Without docker

### Install

First of all, you need to install dependencies.

On the project folder, run

```
npm install
```

### Run

You can now start the project by running

```
npm start
```

and see it in `http://localhost:3000/`

# Architecture

I am using React for building the interface and Redux for state management. The main reasons for choosing React are:

- I work on React on a daily basis, so I am confortable with it.
- It has a very small overhead for starting an application, which is very convenient for a small project with a tight amount of time.
- It has lots of documentation, awesome dev tools, and libraries for almost everything.
- The position I'm applying requires React.

## Folder structure

The structure I chose for the client is the following:

```
├── App.js
├── App.test.js
├── components
│   ├── IndividualResult
│   ├── Loading
│   ├── Log
│   ├── NavBar
│   ├── SearchBar
│   ├── SearchResults
│   └── UserProfile
├── config
│   ├── colors.js
│   └── index.js
├── containers
│   ├── Admin
│   ├── Login
│   └── MainScreen
├── index.js
├── index.scss
├── redux
│   ├── actions
│   ├── configStore.js
│   ├── constants.js
│   └── reducers
├── registerServiceWorker.js
├── services
├── setupTests.js
└── utils
```

### Containers

Every 'page' has it's own container. In the case of this project, I have one container for the login page,
one for the main page, once the user has logged in, and one for the admin information.

### Components

It holds all the components of the application. Each component has an `index.js` file with the actual component, and
a `NameOfTheComponent.test.js` file, where the tests are described. A lot of components are missing tests, due to lack
of time.

### Config

In this folder I have a file with Maersk's colors and a config file with github's api endpoint.

### Redux

This has four elements:

#### configStore.js

A simple configuration file where all the reducers and middleware are used to create the `store`.

#### constants.js

A file with all the constants used in actions are reducers. This is convenient for avoiding typos, and for having a unique
source to see all the available actions.

#### actions

A folder with all the actions, split in files according to their purpose, and some tests.

#### reducers

A collection of all the reducers, split in files in the same way as actions, and with an `index.js` file where they are
combined and exported in a unique object.

### Styles

### Utils

Functions with different purposes that can be used by any component. I have one which takes the raw data and processes
it for using in the bar chart, and one for creating a list with the numbers used for pagination.

### index.js and App.js

This files contain the basic code for rendering the application, after connecting it with the Redux store.

### Libraries

#### Styling

- Bulma
  - I chose this library because it's pretty, well documented, easy to use, and based on Flexbox. This makes it
    very responsive. It also allows to preprocess the CSS, which gives the freedom to customize the styles and to
    import just what is used.
    I thought about using [styled components]('https://www.styled-components.com/'), which I have used a lot and it gives you the freedom to
    apply styles for each component, but I considered it unnecessary for a small project.
- Node-sass-chokidar
  - Allows Node to compile .scss files

#### Linting

- ESLint
  - Allows for creation of custom linting rules. I am using Airbnb's rules as base, and disabling the ones I don't
    want to use.
- Prettier
  - It is an opinionated code formatter for JavaScript, CSS and JSON. I use it to format the code automatically to
    keep the same code style within the whole project.

#### Testing

- Jest
  - I chose Jest for running tests because it is developed and used by Facebook on all React applications.
    It comes already installed with `create-react-app` so it requires no extra configuration to work.
- Enzyme
  - This library makes very easy to unit test components via shallow rendering, and integrated very smoothly
    with Jest.
- Prop-types
  - This tool allows to ensure that each component receive all the necessary props and that they have the correct type.

#### Routing

- React Router
  - This library provides all the components needed for navigating.

#### State management

- Redux
  - This library allows to easily manage the state of the application. It allows every connected component to interact
    with the same state, called `store`, using actions and reducers.
- Redux-thunk
  - This is a Redux middleware that allows me to write action creators, which are actions that return a function instead
    of other actions. This is very useful when working with async functions, because actions can be dispatched depending
    on the response of a request.

#### Others

- Axios
  - An HTTP client based on Promises which is very easy to use and works well.
- Pre-commit
  - I use this library, together with Lint-staged to ensure that every file I commit respects all the linting rules, and
    than all the tests pass. For every commit, Prettier is also run on all the staged files.
- Lint-staged
- Recharts
  - Library for rendering graphs. I use it for the bar chart.
- Express-status-monitor
  - It is very easy to configure and use and it handles the monitoring of the whole application

## Possible bugs

### Cloud server

Some companies block certain connections, so the cloud server might not work. In that case, try using the mobile's connection.
If you access from a mobile, the content might not be displayed totally correct, because I designed the client to be displayed on a wide screen.

### ENOSPC

This issue is caused by the system reaching the maximum amount of watched processed.
On Linux, run

```
echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
```

# Further improvements

There are some aspects where I would put more time and effort if I had more time for an improvement. I will discuss some of these below.

## Testing

React components take a lot of time to test. Much more time than they take to write. Every component should have an extensive suite of tests, not only checking that
they render, but also that they interact correctly with each other. Redux adds an extra layer of complexity here, because every connected component should be tested more
extensively, including it's interactions with the store.

In this project, I just wrote a few tests in order to show that I know the tools, and that I'm aware of the importance of testing.

## Security

For security reasons, all the sensible information should be kept on a file that is ignored by git. For this project, I just left the client secret for Github's API visible on
the server.

## Scalability

For a larger project, components should be smaller and more flexible, so that they can be reused across the whole project. This comes with extra work for writing and testing, so I
decided not to split more than I did.

For handling side effect on Redux, which in this case means just network requests, I used Redux Thunk. This middleware is easy to write, read, and test for fairly simple projects.
For larger ones, it can become very unconvenient, and Redux Saga offers a better alternative. So if I was working on a more extensive project, I would have used this last library.
