function GetAllPhysicians() {
    var physicians = [
        { id: 1, title: 'MD', name: 'James Haeller', newpatients: true, speciality: Speciality.Heart },
        { id: 2, title: 'MS', name: 'Thomas Kep', newpatients: true, speciality: Speciality.Ortho },
        { id: 3, title: 'MBBS', name: 'Susan Bill', newpatients: false, speciality: Speciality.Dental },
        { id: 4, title: 'MD', name: 'Walter Smith', newpatients: true, speciality: Speciality.Heart }
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
    console.log('Getting physicians for' + Speciality[specialityFilter]);
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
var Speciality;
(function (Speciality) {
    Speciality[Speciality["Heart"] = 0] = "Heart";
    Speciality[Speciality["Ortho"] = 1] = "Ortho";
    Speciality[Speciality["Dental"] = 2] = "Dental";
    Speciality[Speciality["Surgery"] = 3] = "Surgery";
    Speciality[Speciality["Pediatrics"] = 4] = "Pediatrics";
})(Speciality || (Speciality = {}));
var allPhysicians = GetAllPhysicians();
var phycount = GetCountDoctorsAcceptingNewPatients(allPhysicians);
console.log("Number of physicians" + phycount);
GetPhysiciansByTitle(Speciality.Heart);
console.log('');
console.log('Using Arrow Functions');
console.log('-------------------------');
allPhysicians.forEach(function (phy) { return console.log('Physician Name : ' + phy.name); });
console.log('');
console.log('Using Arrow  Filter Functions');
console.log('-------------------------');
allPhysicians.forEach(function (phy) {
    if (phy.speciality == Speciality.Heart)
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
AddSpecialityToPhysician('Arun', 'MD', 'MBBS', 'LS', 'DS');
//# sourceMappingURL=app.js.map