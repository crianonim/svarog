# Svarog

[![Build Status](https://travis-ci.com/crianonim/svarog.svg?branch=master)](https://travis-ci.com/crianonim/svarog)

SVG editor and generator focused on precision and manually updating the shape properties
- ![](https://i.imgur.com/KVfQne4.png)


## Problem / Requirements
I would like to...
- create and edit a SVG
- work offline if needed
- being able to save current work locally
- import existing SVG
## Tech stack used to solve
- React with hooks
- SVG
- Sass
- Jest and Enzyme
Bulma
## Learning Outcomes
- Creating, displaying, parsing and manipulating SVG and -their child element using code
- Using Bulma css library for consistent look
- Use React with hooks (including custom hooks) to manage the UI
- Testing React components with Enzyme


## Install

After cloning the repo:

`npm install`

To start development live-server on port 3000:

`npm start`

To create a production build

`npm run build`

This will create the whole app in `/build` directory that can be deployed on any server. Note: it does require an actual server, opening local files in the broweser won't work.

## Testing

`npm test` will run Jest in watch mode, updating results as files are being changed

## Name
According to Wikipedia https://en.wikipedia.org/wiki/Svarog, Svarog is a Slavic deity of celestial fire and blacksmithing, and conveniently has all the letters needed for SVG ;)