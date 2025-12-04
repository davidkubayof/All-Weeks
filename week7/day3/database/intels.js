//The “database” will be stored as a simple JavaScript array in its own file, exported so other modules can use it.
const INTELS = [
    { id: "3", terroristName: "david", weapons: ["GUN"], text: "david is" },
    { id: "2", terroristName: "avi", weapons: ["SORT"], text: "avi not" },
    { id: "1", terroristName: "dan", weapons: ["DRT"], text: "DAN IS" }   
];


//import { INTELS } //חייבים להשתמש בשם המקורי
export {INTELS};

//import INTELS // השם בייבוא יכול להשתנות
export default INTELS;

