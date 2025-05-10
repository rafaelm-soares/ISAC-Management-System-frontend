import { EEntity } from "./enums/EEntity";
import { IBaseEntity } from "./IBaseEntity";
import { ICompany } from "./ICompany";
import { IDepartment } from "./IDepartment";

export interface IBusinessLine extends IBaseEntity {
    id?: number;
    departments: IDepartment[];
    entity: EEntity;
    company: ICompany;
}