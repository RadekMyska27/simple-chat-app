import {Sender} from "@enums";

interface Message {
    id: number;
    sender: Sender;
    text: string;
}

interface ChatWindowProps {
    messages: Message[];
}

export const ChatWindow = ({messages}: ChatWindowProps) => {
    return (
        <div
            className="flex flex-col p-4 bg-white shadow-md rounded-lg w-full h-[75vh] overflow-y-auto border border-gray-200">
            {messages.map((message) => (
                <div
                    key={message.id}
                    className={`p-2 my-1 max-w-xs rounded-md ${
                        message.sender === Sender.Me
                            ? "ml-auto bg-blue-500 text-white"
                            : "mr-auto bg-gray-200 text-gray-800"
                    }`}
                >
                    {message.text}
                </div>
            ))}
        </div>
    );
};
