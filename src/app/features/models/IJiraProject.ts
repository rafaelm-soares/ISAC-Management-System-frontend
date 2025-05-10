import { IJiraIssue } from './IJiraIssue';

export interface IJiraProject {
    id?: number;
    externalId: string;
    name: string;
    jiraIssues?: IJiraIssue[];
}
