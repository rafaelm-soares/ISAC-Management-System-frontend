import { IBaseEntity } from "./IBaseEntity";
import { IBusinessLine } from './IBusinessLine';

export interface ICompany extends IBaseEntity {
    businessLines?: IBusinessLine[];
}
