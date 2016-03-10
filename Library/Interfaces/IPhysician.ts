import {Speciality} from '../Enums/enums';

interface IPhysician {
    id: number;
    title: string;
    name: string;
    newpatients: boolean;
    speciality: Speciality;
    yearsofexperience?: number
}


export {IPhysician};
