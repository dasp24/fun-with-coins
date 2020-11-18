# FunWithCoins

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Setup

Before cloning the files make sure you have the most up to date version of Node.

You can double check you have this installed by running ``node -v`` in your terminal.

You can always download the latest version <a href="https://nodejs.org/en/download/">here</a>.

Make sure that NPM is installed as well as git

to run this project I am using node and Angular 9. Please make sure to download the relevant dependancies.

run `npm i` to download the local dependancies

## starting 

run command `npm start`

This will automatically open the app on http://localhost:4200/

## using the app

There currently 2 things you can do on this app, get the current value of the 3 coins. Bitcoin, Ethereum and Litecoin and see their daily history.

Clicking submit once a coin is selected and daily prices is chosen from the radio buttons brings up a basic line graph.

When you hover over this graph you will see red circles appearing near the mouse. Clicking clears the cirlces and then on movements you will see blue squares and back again.

I have also added zooming and moving fucntionality to the whole graph.

Currently the 3rd option 'Daily trade' does the correct network call but the app doesn't use the returned data
