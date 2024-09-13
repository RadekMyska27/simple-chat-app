interface UserInfoProps {
    name: string;
    time: string;
}

export const UserInfo = ({name, time}: UserInfoProps) => {
    return (
        <div className="text-sm">
            <span className="font-semibold">{name}</span>
            <span className="text-sm ml-2">{time}</span>
        </div>
    );
};
