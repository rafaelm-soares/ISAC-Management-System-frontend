import { ERole } from './enums/ERole';

export interface IUser {
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password?: string;
    lastLoginAt?: string;
    createdAt: string;
    role: ERole;
    isActive: boolean;
    isDeleted: boolean;
}
