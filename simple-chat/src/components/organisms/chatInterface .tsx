import {useState} from "react";
import {useDispatch} from "react-redux";

import {Message, Sender} from "@types";
import {ChatWindow, InputWithButton} from "@components";
import {addMessage, RootState, sendMessage} from "@store";
import {useAppSelector} from "@components/hooks/hooks.tsx";
import {formatTime} from "@utils";

export const ChatInterface = () => {
    const dispatch = useDispatch(); // Correctly typed dispatch

    const {messages, loading} = useAppSelector((state: RootState) => state.messages);

    const [inputValue, setInputValue] = useState<string>("");

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;

        const newMessage: Message = {
            id: messages.length + 1,
            sender: Sender.Me,
            text: inputValue,
            time: formatTime()
        };

        // Add the user's message immediately
        dispatch(addMessage(newMessage));

        // Clear the input field
        setInputValue("");

        // Dispatch the async thunk to send the message
        dispatch(sendMessage(newMessage));
    };

    return (
        <div className="flex flex-col items-center p-4 w-full max-w-screen-lg mx-auto space-y-4">
            <ChatWindow messages={messages}/>
            <div className="w-full">
                <InputWithButton
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onSend={handleSendMessage}
                />
            </div>
            {loading && <p className="text-blue-500 mt-2">Sending...</p>}
        </div>
    );
};
