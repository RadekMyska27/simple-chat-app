import {Button} from "flowbite-react";

interface InputWithButtonProps {
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSend: () => void;
}

export const InputWithButton = ({value, onChange, onSend}: InputWithButtonProps) => {
    return (
        <div className="relative flex items-center w-full">
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder="Type your message..."
                className="w-full py-2 pl-4 pr-20 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
                color="blue"
                pill
                size="xs"
                className="absolute right-1 px-3 py-1"
                onClick={onSend}
            >
                Send
            </Button>
        </div>
    );
};
