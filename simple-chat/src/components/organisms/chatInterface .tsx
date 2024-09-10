import {useState} from "react";
import {useDispatch} from "react-redux";

import {Sender} from "@enums";
import {ChatWindow, InputWithButton} from "@components";
import {addMessage, RootState, sendMessage} from "@store";
import {useAppSelector} from "@components/hooks/hooks.tsx";

export const ChatInterface = () => {
    // const dispatch = useAppDispatch(); // Correctly typed dispatch
    const dispatch = useDispatch(); // Correctly typed dispatch

    const messages = useAppSelector((state: RootState) => state.messages.messages);
    const loading = useAppSelector((state: RootState) => state.messages.loading);

    const [inputValue, setInputValue] = useState<string>("");

    const handleSendMessage = () => {
        if (inputValue.trim() === "") return;

        const newMessage = {
            id: messages.length + 1,
            sender: Sender.Me,
            text: inputValue,
        };

        // Add the user's message immediately
        dispatch(addMessage(newMessage));

        // Clear the input field
        setInputValue("");

        // Dispatch the async thunk to send the message
        dispatch(sendMessage(newMessage));
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
            {loading && <p className="text-blue-500 mt-2">Sending...</p>}
        </div>
    );
};
