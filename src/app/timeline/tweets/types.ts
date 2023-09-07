import { Tweet } from "./tweet.model";

export type TweetSave = Partial<Tweet> & { userId: number };