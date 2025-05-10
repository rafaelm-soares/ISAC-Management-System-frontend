import { ELanguage } from './enums/ELanguage';
import { EDocumentType } from './enums/EDocumentType';
import { ECompletionLevel } from './enums/ECompletionLevel';
import { IProjectVersion } from './IProjectVersion';

export interface IDocument {
    id?: number;
    name: string;
    url: string;
    comment?: string;
    language: ELanguage;
    documentType: EDocumentType;
    completionLevel: ECompletionLevel;
    projectVersion: IProjectVersion;
}