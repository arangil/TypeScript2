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
/// <reference path = "./Library/Helpers/Utils.ts" />
var util = Utils.CalculateUtil;
var sumval = util.Add(1, 2);
console.log("Sum : " + sumval);
