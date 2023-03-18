/* DOCUMENTATION:
        This will export all loaded controller to the routes so that they
        will be automatically be loaded once the method is called.
*/

const fs = require('fs');
const path = require('path');

const controllers = {};

// Read all files in the controllers directory
const controllersPath = path.join(__dirname, '../../application', 'controllers');
const controllerFiles = fs.readdirSync(controllersPath);

// Load all controller classes and add them to the controllers object
for (const file of controllerFiles) {
  const Controller = require(path.join(controllersPath, file));
  const controllerName = file.replace('.js', '');
  controllers[controllerName] = new Controller();
}

module.exports = controllers;