// simple test with Node.js

const factory = require('./math.js');

factory().then((module) => {

    // using ccall
    console.log(module.ccall('int_add', 'number', ['number', 'number'], [3, 2]));

    // using cwrap (direct call)
    console.log(module._int_add(3, 2));
    console.log(module._int_mul(3, 2));
    console.log(module._int_sqrt(9));
});


