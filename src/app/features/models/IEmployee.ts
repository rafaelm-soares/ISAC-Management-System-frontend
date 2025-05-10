import { IDepartment } from './IDepartment';
import { IProfessionalFunction } from './IProfessionalFunction';
import { IProjectVersion } from './IProjectVersion';

export interface IEmployee {
    id?: number;
    name: string;
    username: string;
    email: string;
    isActive: boolean;
    isInternal: boolean;
    department: IDepartment;
    professionalFunction: IProfessionalFunction;
    projectVersions?: IProjectVersion[];
}
