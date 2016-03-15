
import {AddHeading} from './Library/Helpers/AddHeading';
import {Speciality} from './Library/Enums/enums';
import {IErrorLogger} from './Library/Interfaces/IErrorLogger';
import {IPhysician, IPhysicianManager} from './Library/Interfaces/IPhysician';
import {Physician} from './Library/Classes/Physician';
import {abstEmployee, Employee, SpecialEmployee, SpecialEmployee1} from './Library/Classes/Employee';



function GetAllPhysicians(): IPhysician[] {
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


// Start Over loading
// Overloaded function definitions
function GetPhysicianInfo(name: string): string[];
function GetPhysicianInfo(newpatients: boolean): string[];
// Overloaded function implementation
function GetPhysicianInfo(featureType: any): string[] {
    // const physicians = GetAllPhysicians();
    const foundPhysicians: string[] = [];

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
const allPhysicians = GetAllPhysicians();

let phycount = GetCountDoctorsAcceptingNewPatients(allPhysicians);

console.log("Number of physicians" + phycount);
GetPhysiciansByTitle(Speciality.Heart);

AddHeading('Using Arrow Functions');
allPhysicians.forEach((phy) => console.log('Physician Name : ' + phy.name));

AddHeading('Using Arrow  Filter Functions');
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
AddHeading('Using Optional Parameters');
function CreatePhysician(name: string, title?: string, speciality?: string, acceptNewpatients?: boolean): void {

    console.log('Created customer ' + name);

    if (acceptNewpatients) {
        console.log(' accepting new patients' + acceptNewpatients);
    }

}

CreatePhysician('Arun', '', '', true);

//Using rest parameters
AddHeading('Using Rest Parameters');

function AddSpecialityToPhysician(name: string, ...specility: string[]) {
    console.log('Physician Name ' + name);
    for (let spec of specility) {
        console.log('Speciality added :' + spec);
    }
}

AddSpecialityToPhysician('Arun', 'MD', 'MBBS', 'LS', 'DS', 'HT', 'FRCS');


AddHeading('Overloading functions');
let phyfound = GetPhysicianInfo('Arun');
phyfound.forEach((output) => console.log(output));
phyfound = GetPhysicianInfo(false);
phyfound.forEach((output) => console.log(output));

// Start Using Interfaces //
AddHeading('Using Interfaces');
function PrintPhysicians(physician: IPhysician): void {
    console.log('Physician name ' + physician.name);
}
let myphy1  = {
    id: 12,
    name: 'Arun',
    title: 'Doctor',
    speciality: Speciality.Heart,
    newpatients: true,
    meateater: false // example of duck typing. you can mark myphy : IPhysician, that makes it a strict Physician object.
}

// Strict Physician object.
let myphy2: IPhysician = {
    id: 12,
    name: 'Arun',
    title: 'Doctor',
    speciality: Speciality.Heart,
    newpatients: true,
    yearsofexperience: 12 
}

PrintPhysicians(myphy1); // pass a non strict object
PrintPhysicians(myphy2); // pass a physician object
// End Using Interfaces //

// Using Interface independently
AddHeading('Using Interfaces independently');
let logPhyError: IErrorLogger;
logPhyError = (errorMsg: string) => console.log('Physician error code :' + errorMsg);
logPhyError('33234');

let myphy3: IPhysician = {
    id: 12,
    name: 'Arun',
    title: 'Doctor',
    speciality: Speciality.Heart,
    newpatients: true,
    yearsofexperience: 12, 
    logText:  (errmsg: string) => '2222'
}
AddHeading('Using Classes');
let myPhy4: Physician = new Physician();
myPhy4.name = 'Arun';
myPhy4.Mentors('James');

AddHeading('Testing constructers');

let emp: Employee = new Employee();
emp.name = 'Arun';
emp.empid = 1;
emp.dob = '2/12/1989';
emp.printemp();

// using constructor with optional parameters.
let emp2: Employee = new Employee(1, 'Arun Arangil');
emp2.printemp();

AddHeading('Testing default and Static fields');
// using default value for isdiabetic and static company name
let emp3: Employee = new Employee(1, 'Arun Arangil');
emp3.isDiabetic = true;
emp3.printemp();

AddHeading('Testing Inherited class SpecialEmployee');
let emp4: SpecialEmployee = new SpecialEmployee(1, 'Arun Special');
emp4.SpecialCode = 'BSCDEE';
emp4.printemp();

AddHeading('Testing Abstract Inherited class SpecialEmployee1');
let emp5: SpecialEmployee1 = new SpecialEmployee1(1, 'Arun Abstract');
emp5.SpecialCode = 'BSCDEE';
emp5.printemp(); // abstract class implemented method
emp5.printTransscript(); // class implemented or overeidden abstract method.

AddHeading('Testing Class Expressions');
let emp6 = class extends Employee {
    printemp(): void {
        console.log(`Extends employee ${this.name} prints - class expression example`);
    }
}

let emp7 = new emp6(1,'Donald');
emp7.printemp();

