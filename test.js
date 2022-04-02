// simple test with Node.js

const factory = require('./math.js');

factory().then((instance) => {
    // using cwrap (direct call)
    console.log(instance._int_add(3, 2));
    console.log(instance._int_sqrt(9));
    // using ccall
    console.log(instance.ccall('int_mul', 'number', ['number', 'number'], [3, 2]));
});


