import { EJiraIssueType } from './enums/EJiraIssueType';
import { EJiraStatus } from './enums/EJiraStatus';
import { IJiraProject } from './IJiraProject';
import { IProjectVersion } from './IProjectVersion';

export interface IJiraIssue {
    id?: number;
    externalId: string;
    name: string;
    issueType: EJiraIssueType;
    issueStatus: EJiraStatus;
    jiraProject: IJiraProject;
    projectVersions?: IProjectVersion[];
}
