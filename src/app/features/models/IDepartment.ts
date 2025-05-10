import { IBaseEntity } from "./IBaseEntity";
import { IBusinessLine } from "./IBusinessLine";

export interface IDepartment extends IBaseEntity {

    businessLine : IBusinessLine;
}