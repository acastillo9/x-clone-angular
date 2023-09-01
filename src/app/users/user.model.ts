export interface User {
    id?: number;
    name: string;
    username: string;
    password?: string;
    email: string;
    dateBirth: Date;
    profileImage?: string;
}