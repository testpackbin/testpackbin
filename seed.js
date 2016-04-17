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
      "author" : "14604998946975184",
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
      "Name": "Test out testpackbin with this boilerplate.",
      "subject": "React"
  }

], (err, docs) => {
    if (err) throw err;
    console.log('Done!');
    console.log('Added to database', docs);
    process.exit(0)
  })
})
