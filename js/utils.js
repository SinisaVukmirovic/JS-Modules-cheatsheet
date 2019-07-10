// exporting doubleNu function and details variable containing string
// ===========================================================

// export function doubleNum(num) {
//     return num * 2;
// }

// export const details = 'You can export and import anything - variable, faunctions, objects, Classes...';

// ===========================================================
// to export evertyhing with one export
// ===========================================================

// export { doubleNum, details };

// function doubleNum(num) {
//     return num * 2;
// }

// const details = 'You can export and import anything - variable, faunctions, objects, Classes...';

// ===========================================================
// to export something as the default (there can be only one default export in a module!)
// ===========================================================
// export default function sayName() {
//     console.log('JS Modules');
// }

// ===========================================================
// AGGREGATING MODULES
// ===========================================================
export { something } from './helper.js';