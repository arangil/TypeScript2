var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var AddHeading_1 = require('./Library/Helpers/AddHeading');
var enums_1 = require('./Library/Enums/enums');
var Physician_1 = require('./Library/Classes/Physician');
var Employee_1 = require('./Library/Classes/Employee');
function GetAllPhysicians() {
    var physicians = [
        { id: 1, title: 'MD', name: 'James Haeller', newpatients: true, speciality: enums_1.Speciality.Heart },
        { id: 2, title: 'MS', name: 'Thomas Kep', newpatients: true, speciality: enums_1.Speciality.Ortho },
        { id: 3, title: 'MBBS', name: 'Susan Bill', newpatients: false, speciality: enums_1.Speciality.Dental },
        { id: 4, title: 'MD', name: 'Walter Smith', newpatients: true, speciality: enums_1.Speciality.Heart }
    ];
    return physicians;
}
function GetCountDoctorsAcceptingNewPatients(physicians) {
    var count = 0;
    for (var _i = 0; _i < physicians.length; _i++) {
        var doc = physicians[_i];
        if (doc.newpatients)
            count++;
    }
    return count;
}
function GetPhysiciansByTitle(specialityFilter) {
    console.log('Getting physicians for' + enums_1.Speciality[specialityFilter]);
    for (var _i = 0; _i < allPhysicians.length; _i++) {
        var physician = allPhysicians[_i];
        if (physician.speciality == specialityFilter) {
            console.log('Found physician with match :' + physician.name);
        }
    }
}
function GetPhysicianByID(id) {
    return allPhysicians.filter(function (phy) { return phy.id === id; })[0];
}
function GetCustomPhysicianData(name, id) {
    return name + id;
}
// Overloaded function implementation
function GetPhysicianInfo(featureType) {
    // const physicians = GetAllPhysicians();
    var foundPhysicians = [];
    if (typeof (featureType) == 'string') {
        //Loop through physicians, find match and push matchess
        foundPhysicians.push('test string phy');
    }
    else if (typeof (featureType) == 'boolean') {
        //Loop through physicians, find match and push matchess
        foundPhysicians.push('test bool phy');
    }
    return foundPhysicians;
}
// End Over loading
// enum declaration in typescript
//enum Speciality { Heart, Ortho, Dental, Surgery, Pediatrics }
// Get all physicians
var allPhysicians = GetAllPhysicians();
var phycount = GetCountDoctorsAcceptingNewPatients(allPhysicians);
console.log("Number of physicians" + phycount);
GetPhysiciansByTitle(enums_1.Speciality.Heart);
AddHeading_1.AddHeading('Using Arrow Functions');
allPhysicians.forEach(function (phy) { return console.log('Physician Name : ' + phy.name); });
AddHeading_1.AddHeading('Using Arrow  Filter Functions');
allPhysicians.forEach(function (phy) {
    if (phy.speciality == enums_1.Speciality.Heart)
        console.log('Heart Physician Name : ' + phy.name);
});
var phyn = GetPhysicianByID(2);
console.log('Physician Name with ID 2 : ' + phyn.name);
var phy1 = GetCustomPhysicianData("Arun", 6);
console.log('Physician Name with ID 6 : ' + phy1);
var IdGen; // Matches the arrow funtion GetCustomPhysicianData declared before.
IdGen = function (name, id) { return id + ' ' + name; }; // Returns the order of return params.
var phy2 = IdGen('Arun', 8);
console.log('Physician Name with ID 8 : ' + phy2); // Returns the new order of return params.
// Using optional parameters
AddHeading_1.AddHeading('Using Optional Parameters');
function CreatePhysician(name, title, speciality, acceptNewpatients) {
    console.log('Created customer ' + name);
    if (acceptNewpatients) {
        console.log(' accepting new patients' + acceptNewpatients);
    }
}
CreatePhysician('Arun', '', '', true);
//Using rest parameters
AddHeading_1.AddHeading('Using Rest Parameters');
function AddSpecialityToPhysician(name) {
    var specility = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        specility[_i - 1] = arguments[_i];
    }
    console.log('Physician Name ' + name);
    for (var _a = 0; _a < specility.length; _a++) {
        var spec = specility[_a];
        console.log('Speciality added :' + spec);
    }
}
AddSpecialityToPhysician('Arun', 'MD', 'MBBS', 'LS', 'DS', 'HT', 'FRCS');
AddHeading_1.AddHeading('Overloading functions');
var phyfound = GetPhysicianInfo('Arun');
phyfound.forEach(function (output) { return console.log(output); });
phyfound = GetPhysicianInfo(false);
phyfound.forEach(function (output) { return console.log(output); });
// Start Using Interfaces //
AddHeading_1.AddHeading('Using Interfaces');
function PrintPhysicians(physician) {
    console.log('Physician name ' + physician.name);
}
var myphy1 = {
    id: 12,
    name: 'Arun',
    title: 'Doctor',
    speciality: enums_1.Speciality.Heart,
    newpatients: true,
    meateater: false // example of duck typing. you can mark myphy : IPhysician, that makes it a strict Physician object.
};
// Strict Physician object.
var myphy2 = {
    id: 12,
    name: 'Arun',
    title: 'Doctor',
    speciality: enums_1.Speciality.Heart,
    newpatients: true,
    yearsofexperience: 12
};
PrintPhysicians(myphy1); // pass a non strict object
PrintPhysicians(myphy2); // pass a physician object
// End Using Interfaces //
// Using Interface independently
AddHeading_1.AddHeading('Using Interfaces independently');
var logPhyError;
logPhyError = function (errorMsg) { return console.log('Physician error code :' + errorMsg); };
logPhyError('33234');
var myphy3 = {
    id: 12,
    name: 'Arun',
    title: 'Doctor',
    speciality: enums_1.Speciality.Heart,
    newpatients: true,
    yearsofexperience: 12,
    logText: function (errmsg) { return '2222'; }
};
AddHeading_1.AddHeading('Using Classes');
var myPhy4 = new Physician_1.Physician();
myPhy4.name = 'Arun';
myPhy4.Mentors('James');
AddHeading_1.AddHeading('Testing constructers');
var emp = new Employee_1.Employee();
emp.name = 'Arun';
emp.empid = 1;
emp.dob = '2/12/1989';
emp.printemp();
// using constructor with optional parameters.
var emp2 = new Employee_1.Employee(1, 'Arun Arangil');
emp2.printemp();
AddHeading_1.AddHeading('Testing default and Static fields');
// using default value for isdiabetic and static company name
var emp3 = new Employee_1.Employee(1, 'Arun Arangil');
emp3.isDiabetic = true;
emp3.printemp();
AddHeading_1.AddHeading('Testing Inherited class SpecialEmployee');
var emp4 = new Employee_1.SpecialEmployee(1, 'Arun Special');
emp4.SpecialCode = 'BSCDEE';
emp4.printemp();
AddHeading_1.AddHeading('Testing Abstract Inherited class SpecialEmployee1');
var emp5 = new Employee_1.SpecialEmployee1(1, 'Arun Abstract');
emp5.SpecialCode = 'BSCDEE';
emp5.printemp(); // abstract class implemented method
emp5.printTransscript(); // class implemented or overeidden abstract method.
AddHeading_1.AddHeading('Testing Class Expressions');
var emp6 = (function (_super) {
    __extends(class_1, _super);
    function class_1() {
        _super.apply(this, arguments);
    }
    class_1.prototype.printemp = function () {
        console.log("Extends employee " + this.name + " prints - class expression example");
    };
    return class_1;
})(Employee_1.Employee);
var emp7 = new emp6(1, 'Donald');
emp7.printemp();
//# sourceMappingURL=app.js.map