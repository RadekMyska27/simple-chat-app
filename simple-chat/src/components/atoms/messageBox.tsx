import {Message, Sender} from "@types";
import {MessageHeader} from "@components";

interface MessageBoxProps {
    message: Message;
    key: number
}

export const MessageBox = ({message, messageKey}: MessageBoxProps) => {
    return (
        <div
            className={`p-2 my-2 max-w-xs rounded-md ${
                message.sender === Sender.Me
                    ? "ml-auto bg-blue-500 text-white"
                    : "mr-auto bg-gray-200 text-gray-800"
            }`}
            key={messageKey}
        >
            {/* Message Header */}
            <MessageHeader message={message} time={message.time}/>
            {/* Message Text */}
            <div>{message.text}</div>
        </div>
    );
};
