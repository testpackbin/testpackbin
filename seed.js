'use strict'

const Bin       = require('./server/models/Bin'),
      User      = require('./server/models/User'),
      mongoose  = require('mongoose'),
      config    = require('./config');

console.log('Seeding database');
mongoose.connect(config.mongoURI.development, function(err) {
  if (err) console.log('Error connecting to database:', err);
  console.log('connected to database');
});

Bin.remove({})
.then(r => {
  console.log('Removed all bins!');
  Bin.insertMany([
    {
      "id" : "reactTest",
      "author" : "admin",
      "tests" : [
          {
              "name" : "spec.js",
              "content" : "describe('Bin', () => {\n it('should run the test', () => {\n expect(true).toEqual(true);  \n});\n  });"
          }
      ],
      "packages" : {
          "react" : "0.14.7",
          "react-dom" : "0.14.7"
      },
      "loaders" : {
          "babel" : {
              "stage0" : true,
              "es2015" : true,
              "react" : true
          }
      },
      "files" : [
          {
              "name" : "index.html",
              "content" : "<!DOCTYPE html>\n<html>\n  <head>\n    <meta charset=\"utf-8\"/>\n  </head>\n  <body>\n    <div id=\"app\"></div>\n    <script src=\"main.js\"></script>\n  </body>\n</html>"
          },
          {
              "name" : "main.js",
              "content" : "import React from 'react';\nimport {render} from 'react-dom';\nimport HelloWorld from './HelloWorld.js';\n\nrender(<HelloWorld/>, document.querySelector('#app'));",
              "isEntry" : true
          },
          {
              "name" : "HelloWorld.js",
              "content" : "import React from 'react';\n\nfunction HelloWorld () {\n  return (\n    <h1>Hello World!</h1>\n  );\n}\n\nexport default HelloWorld;"
          }
      ],
      "isLive" : null,
      "readme": "React Test",
      "name": "Test out testpackbin with this boilerplate.",
      "subject": "React"
  },
  {
    "id": "angular1",
    "author": "admin",
    "tests": [{
      "name": "spec.js",
      "content": "describe(\"mainCtrl\",function(){var e,o,t,n;beforeEach(module(\"myApp\")),beforeEach(inject(function(c,i){e=c,o=e.$new(),t=i,n=t(\"mainCtrl\",{$rootScope:e,$scope:o})})),it(\"should exist\",function(){expect(n).toBeDefined()}),it(\"should say 'Hello World'\",function(){var e={};t(\"mainCtrl\",{$scope:e});expect(e.message).toEqual(\"Hello World\")})});"
    }],
    "packages" : {
      "angular" : "1.5.0",
    },
    "loaders": {
      "babel": {
        "stage0" : true,
        "es2015" : true
      }
    },
    "files" : [
      {
        "name": "index.html",
        "content": "<!DOCTYPEhtml><html><head><metacharset=\"utf-8\"><title>HelloWorld</title></head><body></div></body></html>"
      },
      {
        "name": "app.js",
        "content": ""
      },
      {
        "name": "mainCtrl.js",
        "content": ""
      }
    ],
    "isLive": null,
    "readme": "## Angular Friends\r\n\r\n### Introduction\r\n\r\nWelcome to Day 1 of AngularJS. Angular is a powerful JavaScript framework created by Google, designed to optimize front-end web development.\r\n\r\n##### Objective\r\n\r\nStudents will learn and utilize Angular directives to create a simple SPA application. They will create an angular module, create a controller, and grab data from said controller to put on the view.\r\n\r\n#####(As a bonus, students can create and use a Service to pull in data from http://jsonplaceholder.typicode.com/)#####\r\n\r\n### !!!!!!!!!!Install Angular!!!!!!!!\r\nWithout an AngularJS script, you will not be able to access any of Angular's capabilities.\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js\"></script>\r\n####\r\n\r\n\r\n####\r\n\r\n* Declare your Angular app. Name it \"myApp\".\r\n\r\n* Create a controller for your app in a separate file. Make sure that the app and the controller are both attached. Name the controller \"mainCtrl\"\r\n\r\nInject $scope into \"mainCtrl\".\r\n\r\n* Add the necessary ng-directives to the index.html file to include your Angular files in the view.\r\n\r\n* Test your controller by adding a scope variable called 'message' with the value 'Hello World' as a string.\r\n\r\n* Bind the $scope variable you just created to the view (index.html) using double curly brackets around the variable name, {{message}}, to see if your controller is working.\r\n\r\n(Hint: Binding the $scope variable to the view will only work if the correct Angular directive put the controller on the view.)\r\n'",
    "subject": "Angular",
    "name": "Angular Friends"
  },
  {
    "id": "angular1",
    "author": "admin",
    "tests": [{
      "name": "spec.js",
      "content": "describe(\"mainCtrl\",function(){var e,o,t,n;beforeEach(module(\"myApp\")),beforeEach(inject(function(c,i){e=c,o=e.$new(),t=i,n=t(\"mainCtrl\",{$rootScope:e,$scope:o})})),it(\"should exist\",function(){expect(n).toBeDefined()}),it(\"should say 'Hello World'\",function(){var e={};t(\"mainCtrl\",{$scope:e});expect(e.message).toEqual(\"Hello World\")})});"
    }],
    "packages" : {
      "angular" : "1.5.0",
    },
    "loaders": {
      "babel": {
        "stage0" : true,
        "es2015" : true
      }
    },
    "files" : [
      {
        "name": "index.html",
        "content": "<!DOCTYPEhtml><html><head><metacharset=\"utf-8\"><title>HelloWorld</title></head><body></div></body></html>"
      },
      {
        "name": "app.js",
        "content": "angular.module('myApp', [])"
      },
      {
        "name": "mainCtrl.js",
        "content": ""
      }
    ],
    "isLive": null,
    "readme": "## Angular Friends\r\n\r\n### Introduction\r\n\r\nWelcome to Day 1 of AngularJS. Angular is a powerful JavaScript framework created by Google, designed to optimize front-end web development.\r\n\r\n##### Objective\r\n\r\nStudents will learn and utilize Angular directives to create a simple SPA application. They will create an angular module, create a controller, and grab data from said controller to put on the view.\r\n\r\n#####(As a bonus, students can create and use a Service to pull in data from http://jsonplaceholder.typicode.com/)#####\r\n\r\n### !!!!!!!!!!Install Angular!!!!!!!!\r\nWithout an AngularJS script, you will not be able to access any of Angular's capabilities.\r\n\r\n<script src=\"https://ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js\"></script>\r\n####\r\n\r\n\r\n####\r\n\r\n* Declare your Angular app. Name it \"myApp\".\r\n\r\n* Create a controller for your app in a separate file. Make sure that the app and the controller are both attached. Name the controller \"mainCtrl\"\r\n\r\nInject $scope into \"mainCtrl\".\r\n\r\n* Add the necessary ng-directives to the index.html file to include your Angular files in the view.\r\n\r\n* Test your controller by adding a scope variable called 'message' with the value 'Hello World' as a string.\r\n\r\n* Bind the $scope variable you just created to the view (index.html) using double curly brackets around the variable name, {{message}}, to see if your controller is working.\r\n\r\n(Hint: Binding the $scope variable to the view will only work if the correct Angular directive put the controller on the view.)\r\n'",
    "subject": "Angular",
    "name": "Angular Friends"
  }

], (err, docs) => {
    if (err) throw err;
    process.exit(0)
  })
})
