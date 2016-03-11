abstract class abstEmployee {
    empid: number;
    name: string;
    dob: string;
    private isdiabetic: boolean = false; // default value for private property. cannot be accessed by inherited classes
    static companyname: string = 'MH';
    protected deptCode: number = 342; // can only be accessed by class and inherited class members.

    constructor(Empid?: number, Name?: string) {
        this.empid = Empid;
        this.name = Name;
        console.log("creating constructor class employee..");
    }    

    get isDiabetic(): boolean {
        return this.isdiabetic;
    }

    set isDiabetic(boolDiabetic: boolean) {
        this.isdiabetic = boolDiabetic;
    }
    
    printemp(): void {
        console.log(`${this.name} is diabetic (${this.isDiabetic}) works for ${Employee.companyname} is being printed`);
    }

    abstract printTransscript(): void; 
}

class Employee {
    empid: number;
    name: string;
    dob: string;
    private isdiabetic: boolean = false; // default value for private property. cannot be accessed by inherited classes
    static companyname: string = 'MH';
    protected deptCode: number = 342; // can only be accessed by class and inherited class members.

    constructor(Empid?: number, Name?: string) {
        this.empid = Empid;
        this.name = Name;
        console.log("creating constructor class employee..");
    }

    get isDiabetic(): boolean {
        return this.isdiabetic;
    }

    set isDiabetic(boolDiabetic: boolean) {
        this.isdiabetic = boolDiabetic;
    }

    printemp(): void {
        console.log(`${this.name} is diabetic (${this.isDiabetic}) works for ${Employee.companyname} is being printed`);
    }
}


class SpecialEmployee extends Employee {
    constructor(id: number, name: string) {
        super(id, name);
    }

    SpecialCode: string;
    
    printemp(): void {
        super.printemp();
        console.log(`${this.SpecialCode} is the special code and has dept code ${this.deptCode}`); // deptcode is a protected member from parent class
    }

}

// Inheriting abstract class example
class SpecialEmployee1 extends abstEmployee {
    constructor(id: number, name: string) {
        super(id, name);
    }

    SpecialCode: string;

    printemp(): void {
        super.printemp();
        console.log(`${this.SpecialCode} is the special code and has dept code ${this.deptCode}`); // deptcode is a protected member from parent class
    }

    printTransscript(): void {

        console.log(`Printing transscript for ${this.name}`);  
    }
}


export {abstEmployee, Employee, SpecialEmployee, SpecialEmployee1 };