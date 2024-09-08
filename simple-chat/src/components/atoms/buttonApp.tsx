import {Button} from "flowbite-react";

export interface IButtonData {
}

export const ButtonApp = (data: IButtonData) => {
    return (
        <Button color="blue" pill>
            {"Flowbite React Button"}
        </Button>
    );
}