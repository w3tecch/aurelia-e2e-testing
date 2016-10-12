# aurelia-e2e-testing

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.
2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed globally. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
  > **Note:** Gulp must be installed globally, but a local version will also be installed to ensure a compatible version is used for the project.

## Running The E2E Tests
Integration tests are performed with [Protractor](http://angular.github.io/protractor/#/).

1. Place your E2E-Tests into the folder ```test/e2e/src```
2. Install the necessary webdriver (this is done automatically with gulp e2e)

  ```shell
  npm run pree2e
  ```

3. Configure the path to the webdriver by opening the file ```protractor.conf.js``` and adjusting the ```seleniumServerJar``` property. Typically its only needed to adjust the version number.

4. In another console run the E2E-Tests

  ```shell
  npm run e2e
  ```

5. You can set the protractor baseUrl with environmental variable E2E_URL or like this (default is http://localhost:9000)

  ```shell
  npm run e2e -- --baseUrl http://localhost:3000
  ```

## A word on angularJS
To make angular work with this repository just remove the aurelia plugin in ```protractor.conf.js``` and replace ```loadAndWaitForAureliaPage``` with ```get``` in file ```demo.spec.js```.
This is already enough for AngularJS 1 to work.

If you like to run AngularJS 2 apps, you need to add the following to your ```protractor.conf.js``` in addition:
  ```
  onPrepare: function() {
    browser.ignoreSynchronization = true;
  },

  useAllAngular2AppRoots: true
  ```

## Other Framework
If you like to play around with other frameworks, you could use the following site containing sample apps for testing proposes:
- http://todomvc.com/