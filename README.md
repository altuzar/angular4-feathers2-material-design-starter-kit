# Angular 4 and Feathers 2 with Material Design Starter-Kit

> A starter-kit real-time chat application with Angular 4 for the client and Feathers 2 for the server with users authentication.

## About

This project uses [Angular](http://angular.io). One framework, mobile & desktop. And [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications. And [Material Design](https://material.io/). A unified system that combines theory, resources, and tools for crafting digital experiences.

## Screenshots

There are 2 screens in the project.

First the Login/Sign up route:

Login/Sign up

![md1](https://user-images.githubusercontent.com/122941/30928314-ddd84d94-a380-11e7-8158-e597dd5ca2fa.png)

And the Chat route with the proper AuthGuard so that only logged in users can open it:

![md2](https://user-images.githubusercontent.com/122941/30928315-de04728e-a380-11e7-8c15-b72889f0b99e.png)

## Getting Started

Getting up and running is easy. First launch the server and then the client.

1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.

2. Install Angular 4

    ```
    npm i -g angular-cli
    ```

3. Clone the repo

    ```
    git clone https://github.com/altuzar/angular4-feathers2-chat-app.git
    ```

4. Install the server dependencies

    ```
    cd angular4-feathers2-chat-app
    cd server
    npm install
    ```

5. Start the server

    ```
    npm start
    ```

6. Goto to browser and check link as below

     ```
     http://localhost:3030/
      ```

7. Install the client dependencies in a different terminal.

    ```
    cd ..
    cd client
    npm install
    ```

8. Start the client

    ```
    npm start
    ```

9. Goto to browser and check link as below

    ```
     http://localhost:4200/
    ```

## Testing

To run the tests in the server, stop the server and run

    ```
    cd server
    npm test
    ```
 
 and all your tests in the `test/` directory will be run.

 To run the tests in the client, run


    ```
    cd client
    ng test
    ```

to execute the unit tests via [Karma](https://karma-runner.github.io).

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

Before running the tests make sure you are serving the app via `ng serve`.

## Further help

For more information on all the things you can do with Feathers visit [docs.feathersjs.com](http://docs.feathersjs.com).

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## License

Copyright (c) 2017

Licensed under the [MIT license](LICENSE).
