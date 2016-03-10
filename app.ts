function GetAllPhysicians() {
    let physicians = [
        { id: 1, title: 'MD', name: 'James Haeller', newpatients: true, speciality: Speciality.Heart },
        { id: 2, title: 'MS', name: 'Thomas Kep', newpatients: true, speciality: Speciality.Ortho },
        { id: 3, title: 'MBBS', name: 'Susan Bill', newpatients: false, speciality: Speciality.Dental },
        { id: 4, title: 'MD', name: 'Walter Smith', newpatients: true, speciality: Speciality.Heart }
    ];
    return physicians;
}

function GetCountDoctorsAcceptingNewPatients(physicians): number {
    let count = 0;
    for (let doc of physicians) {
        if (doc.newpatients) count++;
    }
    return count;
}

function GetPhysiciansByTitle(specialityFilter: Speciality) {
    console.log('Getting physicians for' + Speciality[specialityFilter]);
    for (let physician of allPhysicians) {
        if (physician.speciality == specialityFilter) {
            console.log('Found physician with match :' + physician.name);
        }
    }
}


function GetPhysicianByID(id: number) {
    return allPhysicians.filter(phy => phy.id === id)[0];
}


function GetCustomPhysicianData(name: string, id: number): string {
    return name + id;
}

enum Speciality { Heart, Ortho, Dental, Surgery, Pediatrics }

const allPhysicians = GetAllPhysicians();

let phycount = GetCountDoctorsAcceptingNewPatients(allPhysicians);

console.log("Number of physicians" + phycount);
GetPhysiciansByTitle(Speciality.Heart);

console.log('');
console.log('Using Arrow Functions');
console.log('-------------------------');
allPhysicians.forEach((phy) => console.log('Physician Name : ' + phy.name));

console.log('');
console.log('Using Arrow  Filter Functions');
console.log('-------------------------');
allPhysicians.forEach((phy) => {
    if (phy.speciality == Speciality.Heart)
        console.log('Heart Physician Name : ' + phy.name);
});

let phyn = GetPhysicianByID(2);
console.log('Physician Name with ID 2 : ' + phyn.name);

let phy1 = GetCustomPhysicianData("Arun", 6);
console.log('Physician Name with ID 6 : ' + phy1);

let IdGen: (char: string, num: number) => string; // Matches the arrow funtion GetCustomPhysicianData declared before.
IdGen = (name: string, id: number) => { return id + ' ' + name }; // Returns the order of return params.
let phy2 = IdGen('Arun', 8);
console.log('Physician Name with ID 8 : ' + phy2); // Returns the new order of return params.


// Using optional parameters
function CreatePhysician(name: string, title?: string, speciality?: string, acceptNewpatients?: boolean): void {

    console.log('Created customer ' + name);

    if (acceptNewpatients) {
        console.log(' accepting new patients' + acceptNewpatients);
    }

}

CreatePhysician('Arun', '', '', true);

//Using rest parameters

function AddSpecialityToPhysician(name: string, ...specility: string[]) {
    console.log('Physician Name ' + name);
    for (let spec of specility) {
        console.log('Speciality added :' + spec);
    }
}

console.log('');
console.log('Using rest params');
console.log('-------------------------');

AddSpecialityToPhysician('Arun', 'MD', 'MBBS', 'LS', 'DS', 'HT', 'FRCS');