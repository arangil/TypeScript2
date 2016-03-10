import {IPhysician} from '../Interfaces/IPhysician';
import {Speciality} from '../Enums/enums';
import {IErrorLogger} from '../Interfaces/IErrorLogger';

class Physician implements IPhysician {
    id: number;
    title: string;
    name: string;
    newpatients: boolean;
    speciality: Speciality;
    yearsofexperience: number = 0;
    logText: IErrorLogger = (errMsg: string) => '';

    Mentors(student: string) {
        console.log(this.name + ' mentors ' + student);
    }
}

export {Physician};
