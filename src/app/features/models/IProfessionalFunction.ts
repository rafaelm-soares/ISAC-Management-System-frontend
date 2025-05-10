import { IEmployee } from './IEmployee';

export interface IProfessionalFunction {
    id?: number;
    name: string;
    employees?: IEmployee[];
}
