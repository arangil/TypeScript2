var AddHeading_1 = require('./Library/Helpers/AddHeading');
var enums_1 = require('./Library/Enums/enums');
var Physician_1 = require('./Library/Classes/Physician');
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
AddHeading_1.AddHeading('Using Rest Parameters');
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
PrintPhysicians(myphy1);
PrintPhysicians(myphy2);
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
//# sourceMappingURL=app.js.map