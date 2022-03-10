import { name,sum } from "./aaa.js";

console.log(name);
console.log(sum(1, 2));

import { num,sub,Run } from "./aaa.js";
console.log(num);
console.log(sub(2, 1));

const r = new Run();
r.run();


import h from "./aaa.js";
// console.log(h);
h(1.88)

// 统一全部导入
import * as aaa from './aaa.js';
console.log(aaa.name);