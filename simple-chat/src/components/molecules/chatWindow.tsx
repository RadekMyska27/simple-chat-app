import {Message} from "@types";
import {MessageBox} from "@components"; // Import the MessageBox component

interface ChatWindowProps {
    messages: Message[];
}

export const ChatWindow = ({messages}: ChatWindowProps) => {
    return (
        <div
            className="flex flex-col p-4 bg-white shadow-md rounded-lg w-full h-[75vh] overflow-y-auto border border-gray-200">
            {messages.map((message) => (
                <MessageBox message={message} key={message.id}/>
            ))}
        </div>
    );
};
