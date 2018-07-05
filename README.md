##### Challenge for TrustPilot

by Andrés Mechali

# Introduction

The widget that I built has the intention to display a list of reviews, provided in the file `reviews.json`, and a
series of details for the chosen review. It also provides a brief summary about the product, based both on a fake
productName and in the given reviews.
For styling, I would have liked to use [styled components]('https://www.styled-components.com/'), which I think is great,
but the task was to use custom SASS.

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

and once it's running, access `http://localhost:3000/`.

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

## Using other data set

All the data is being taken from `reviews.json`. This file can be replaced by another valid json file, or the `reviews`
array can be obtained through an API and passed to the `Main` container after some simple refactoring.

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
├── components
│   ├── ReviewContent
│   ├── ReviewItem
│   ├── ReviewList
│   └── ReviewMenu
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
└── utils
```

### Containers

Every 'page' has it's own container. In the case of this project, there is just one, which is the main container.

### Components

It holds all the components of the application. Each component has an `index.js` file with the actual component.
There should be a `NameOfTheComponent.test.js` file as well, where the tests are described, but I haven't tested the application
due to lack of time.

### Redux

This has four elements:

#### configStore.js

A simple configuration file where all the reducers and middleware are used to create the `store`.

#### constants.js

A file with all the constants used in actions are reducers. This is convenient for avoiding typos, and for having a unique
source to see all the available actions.

#### actions

A folder with all the actions, split in files according to their purpose. In this case, there is only one.

#### reducers

A collection of all the reducers, split in files in the same way as actions, and with an `index.js` file where they are
combined and exported in a unique object.

### Styles

This is where al the .scss files are contained. They are imported into the `index.scss` file, which is preprocessed.
The files are split between different folders, depending on their role.

### Utils

Functions with different purposes that can be used by any component. I have one which takes the raw data and processes
it for obtaining the average of the ratings.

### index.js and App.js

This files contain the basic code for rendering the application, after connecting it with the Redux store.

# Further improvements

There are some aspects where I would put more time and effort if I had more time for an improvement. I will discuss some of these below.

## Testing

React components take a lot of time to test. Much more time than they take to write. Every component should have an extensive suite of tests, not only checking that
they render, but also that they interact correctly with each other.

If I had more time to dedicate to this challenge, I would unit test extensively each component.

## Type checking

It's always a good practice to check for type errors before running the code. For a serious project I would probably use Flow, which works really good with React.
