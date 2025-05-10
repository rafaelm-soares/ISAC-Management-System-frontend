import { ELifeCycle } from './enums/ELifeCycle';
import { EStatus } from './enums/EStatus';
import { IProject } from './IProject';
import { IJiraIssue } from './IJiraIssue';
import { IEmployee } from './IEmployee';
import { IUiPathProcess } from './uipath/IUiPathProcess';
import { IDashboard } from './IDashboard';
import { IDocument } from './IDocument';
import { IVersion } from './IVersion'

export interface IProjectVersion {
    id?: number;
    createdDate: string;
    deployDateQa?: string;
    deployDateProd?: string;
    lifecycle: string;
    status: EStatus;
    version: IVersion;
    project: IProject;
    jiraIssues: IJiraIssue[];
    employees: IEmployee[];
    uipathProcesses?: IUiPathProcess[];
    dashboards: IDashboard[];
    documents: IDocument[];
    active: boolean;
}
