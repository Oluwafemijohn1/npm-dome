const _ = require("underscore");
const mongoose = require("mongoose");

console.log(_.contains([1, 2, 3], 3));

// to see the list of dependencies install
// npm list

// to see to a particular depth
// npm list --depth=0

//to see the dependency of a particular library
// npm view mongoose
// npm view mongoose dependencies
// npm view mongoose versions

//npm outdate ======> to see the outdate packages
//npm update ====> to update minor change library

//for major update
// sudo npm i -g npm-check-update

// then
// npm-check-update
// ncu -u
