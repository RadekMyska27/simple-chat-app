export enum Sender {
    Me = "me",
    Partner = "partner",
}

export interface User {
    name: string;
    avatar: string;
}

export interface Message {
    id: number;
    sender: Sender;
    text: string;
    time: string;
}
