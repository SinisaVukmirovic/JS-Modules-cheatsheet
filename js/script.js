// importing doubleNum function from utils.js file (./ and .js is required!)
// ================================================

// import { doubleNum } from './utils.js';

// console.log(doubleNum(5));

// ===============================================
// importing both doubleNum function and details variable containing string from utils.js file
// ==============================================

// import { doubleNum, details } from './utils.js';

// console.log(doubleNum(5));
// console.log(details);

// ===============================================
// if we use miltiple import and need to rename our imports
// ===============================================

// import { doubleNum as renamed, details } from './utils.js'

// console.log(renamed(7));
// console.log(details);
// console.log(doubleNum(5));

// ===============================================
// to import multiple import, everything at once
// ===============================================
// import * as Utils from './utils.js';

// console.log(Utils.doubleNum(3));
// console.log(Utils.details);

// ===============================================
// to import something as the dafault
// ===============================================
// import { default as whatever } from './utils.js';
// or more common
// import whatever from './utils.js';

// whatever();

// ===========================================================
// AGGREGATING MODULES
// ===========================================================
import { something } from './utils.js';

something();