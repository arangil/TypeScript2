var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var abstEmployee = (function () {
    function abstEmployee(Empid, Name) {
        this.isdiabetic = false; // default value for private property. cannot be accessed by inherited classes
        this.deptCode = 342; // can only be accessed by class and inherited class members.
        this.empid = Empid;
        this.name = Name;
        console.log("creating constructor class employee..");
    }
    Object.defineProperty(abstEmployee.prototype, "isDiabetic", {
        get: function () {
            return this.isdiabetic;
        },
        set: function (boolDiabetic) {
            this.isdiabetic = boolDiabetic;
        },
        enumerable: true,
        configurable: true
    });
    abstEmployee.prototype.printemp = function () {
        console.log(this.name + " is diabetic (" + this.isDiabetic + ") works for " + Employee.companyname + " is being printed");
    };
    abstEmployee.companyname = 'MH';
    return abstEmployee;
})();
exports.abstEmployee = abstEmployee;
var Employee = (function () {
    function Employee(Empid, Name) {
        this.isdiabetic = false; // default value for private property. cannot be accessed by inherited classes
        this.deptCode = 342; // can only be accessed by class and inherited class members.
        this.empid = Empid;
        this.name = Name;
        console.log("creating constructor class employee..");
    }
    Object.defineProperty(Employee.prototype, "isDiabetic", {
        get: function () {
            return this.isdiabetic;
        },
        set: function (boolDiabetic) {
            this.isdiabetic = boolDiabetic;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.printemp = function () {
        console.log(this.name + " is diabetic (" + this.isDiabetic + ") works for " + Employee.companyname + " is being printed");
    };
    Employee.companyname = 'MH';
    return Employee;
})();
exports.Employee = Employee;
var SpecialEmployee = (function (_super) {
    __extends(SpecialEmployee, _super);
    function SpecialEmployee(id, name) {
        _super.call(this, id, name);
    }
    SpecialEmployee.prototype.printemp = function () {
        _super.prototype.printemp.call(this);
        console.log(this.SpecialCode + " is the special code and has dept code " + this.deptCode); // deptcode is a protected member from parent class
    };
    return SpecialEmployee;
})(Employee);
exports.SpecialEmployee = SpecialEmployee;
// Inheriting abstract class example
var SpecialEmployee1 = (function (_super) {
    __extends(SpecialEmployee1, _super);
    function SpecialEmployee1(id, name) {
        _super.call(this, id, name);
    }
    SpecialEmployee1.prototype.printemp = function () {
        _super.prototype.printemp.call(this);
        console.log(this.SpecialCode + " is the special code and has dept code " + this.deptCode); // deptcode is a protected member from parent class
    };
    SpecialEmployee1.prototype.printTransscript = function () {
        console.log("Printing transscript for " + this.name);
    };
    return SpecialEmployee1;
})(abstEmployee);
exports.SpecialEmployee1 = SpecialEmployee1;
//# sourceMappingURL=Employee.js.map