import { User } from "../../users/user.model";

export interface Tweet {
    id: number;
    text: string;
    date: Date;
    user: User;
    replaysCount: number;
    retweetsCount: number;
    likesCount: number;
    viewsCount: number;
    tweetId?: number | null;
}