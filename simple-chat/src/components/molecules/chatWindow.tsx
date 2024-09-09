// Enum for sender roles
import {Message} from "@components";

export enum Sender {
    Me = "me",
    Partner = "partner",
}

interface ChatWindowProps {
    messages: Message[];
}

export const ChatWindow = ({messages}: ChatWindowProps) => {
    return (
        <div className="w-full max-w-md h-80 overflow-y-auto p-4 border border-gray-300 rounded-md bg-white shadow-sm">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`mb-2 p-2 rounded-lg ${
                        message.sender === Sender.Me
                            ? "bg-blue-500 text-white self-end"
                            : "bg-gray-100 text-gray-800 self-start"
                    }`}
                >
                    {message.text}
                </div>
            ))}
        </div>
    );
};
