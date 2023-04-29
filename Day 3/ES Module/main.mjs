import add from "./defaullt.mjs";
import both from './exportBoth.mjs';
import { multiply } from "./named.mjs";
import { greets } from "./AllExport.mjs";
const { modulo,
    divide } = both;
console.log(add(2, 5));
console.log(modulo(10,2));
console.log(divide(10,2));
console.log(multiply(2,5));
greets();
