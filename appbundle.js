var Utils;
(function (Utils) {
    var CalculateUtil;
    (function (CalculateUtil) {
        function Add(num1, num2) {
            return num1 + num2;
        }
        CalculateUtil.Add = Add;
        function Multiply(num1, num2) {
            return num1 * num2;
        }
        CalculateUtil.Multiply = Multiply;
    })(CalculateUtil = Utils.CalculateUtil || (Utils.CalculateUtil = {}));
    //Private function accessible only by Ultils namespace
    function LogMessage(message) {
        console.log('Logged message :' + message);
    }
})(Utils || (Utils = {}));
// This will not work as node wants to load multiple files using modules not namespaces. Utils.ts has namespaces.
/// <reference path = "./Library/Helpers/Utils.ts" />
var util = Utils.CalculateUtil;
var sumval = util.Add(12, 12);
console.log("Sum : " + sumval);
