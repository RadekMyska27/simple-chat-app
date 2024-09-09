import {Button} from "flowbite-react";

export interface IButtonData {
    label?: string;
}

export const ButtonWithLabel = (data: IButtonData) => {
    return (
        <Button
            color="blue"
            pill
            className="text-lg px-6 py-3" // Make the button bigger with larger padding and font size
        >
            {data.label || "Flowbite React Button"}
        </Button>
    );
};
