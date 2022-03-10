// 1.使用commonjs的模块化规范
const {add, mul} = require('./mathUtils.js')

// 2.使用es6模块化
console.log(add(20, 30));
console.log(mul(20, 30));

import { name, age } from './info';
console.log(name);
console.log(age);