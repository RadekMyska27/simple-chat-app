import {useState} from "react";
import {Sender} from "@enums";
import {ChatWindow, InputWithButton} from "@components";

export interface Message {
    id: number;
    sender: Sender;
    text: string;
}

export const ChatInterface = () => {
    const [messages, setMessages] = useState<Message[]>([
        {id: 1, sender: Sender.Partner, text: "Hello! How can I help you?"},
    ]);
    const [inputValue, setInputValue] = useState<string>("");

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;

        const newMessage: Message = {
            id: messages.length + 1,
            sender: Sender.Me,
            text: inputValue,
        };

        // Add the user's message
        setMessages((prevMessages) => [...prevMessages, newMessage]);

        // Clear the input field
        setInputValue("");

        // Simulate a partner response
        setTimeout(() => {
            const partnerResponse: Message = {
                id: messages.length + 2,
                sender: Sender.Partner,
                text: "This is an automated response.",
            };
            setMessages((prevMessages) => [...prevMessages, partnerResponse]);
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center p-4 w-full max-w-md mx-auto">
            <ChatWindow messages={messages}/>
            <div className="mt-4 w-full">
                <InputWithButton
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onSend={handleSendMessage}
                />
            </div>
        </div>
    );
};
