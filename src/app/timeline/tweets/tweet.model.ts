import { User } from "../../users/user.model";

export interface Tweet {
    id: string;
    text: string;
    date: Date;
    user: User;
    replaysCount: number;
    retweetsCount: number;
    likesCount: number;
    viewsCount: number;
}