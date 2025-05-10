import { IBaseEntity } from "./IBaseEntity";
import { IProject } from './IProject';

export interface IIUACode extends IBaseEntity {
  projects?: IProject[];
}