export const formatTime = (): string => {
    const date: Date = new Date()

    const day = date.getDate().toString().padStart(2, "0"); // Get day and pad with zero if needed
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Get month (0-indexed) and pad with zero
    const hours = date.getHours().toString().padStart(2, "0"); // Get hours and pad with zero
    const minutes = date.getMinutes().toString().padStart(2, "0"); // Get minutes and pad with zero

    return `${day}.${month} ${hours}:${minutes}`;
};
