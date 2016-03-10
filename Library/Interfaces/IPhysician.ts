import {Speciality} from '../Enums/enums';
import {IErrorLogger} from './IErrorLogger';

interface IPhysician {
    id: number;
    title: string;
    name: string;
    newpatients: boolean;
    speciality: Speciality;
    yearsofexperience?: number;
    logText?: IErrorLogger;
}

interface IPhysicianManager extends IPhysician {
    departmentId: number,
    departmentname: string
}


export {IPhysician, IPhysicianManager};
