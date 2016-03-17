
// This will not work as node wants to load multiple files using modules not namespaces. Utils.ts has namespaces.
/// <reference path = "./Library/Helpers/Utils.ts" />
import util = Utils.CalculateUtil;
let sumval = util.Add( 12, 12 );
console.log( `Sum : ${sumval}` );
