import { EImpact } from './enums/EImpact';
import { ESupportTeam } from './enums/ESupportTeam';
import { EAsset } from './enums/EAsset';
import { EStatus } from './enums/EStatus';
import { IIUACode } from './IIUACode';
import { IDepartment } from './IDepartment';
import { IProjectVersion } from './IProjectVersion';

export interface IProject {
    id: number;
    projectCode: string;
    name: string;
    iuaCode: IIUACode;
    impact: EImpact;
    supportTeam: ESupportTeam;
    assets: EAsset[];
    status: EStatus;
    department: IDepartment;
    projectVersions: IProjectVersion[];
  }
