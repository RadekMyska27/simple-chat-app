import {Avatar} from "flowbite-react";
import {Message, Sender} from "@types";

export interface MessageHeaderProps {
    message: Message
    time: string;
}

export const MessageHeader = ({message, time}: MessageHeaderProps) => {
    //TODO add icon for avatar

    const isAI = message.sender === Sender.Partner
    const name = isAI ? "AI" : "Me"
    const img = isAI ? "" : ""

    return (
        <div className="flex items-center mb-1">
            <Avatar
                img={img}
                rounded={true}
                alt={`${name}'s avatar`}
                placeholderInitials={name ? name[0].toUpperCase() : "?"} // Use the first letter of the user's name as a placeholder
                size="sm" // Choose the size for the avatar, e.g., 'xs', 'sm', 'md', 'lg'
                className="mr-2"
            />
            <div className="text-sm">
                <span className="font-semibold">{name}</span>
                <span className="text-xs text-gray-500 ml-2">{time}</span>
            </div>
        </div>
    );
};
