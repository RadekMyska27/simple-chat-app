import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Sender} from "@enums";

interface Message {
    id: number;
    sender: Sender;
    text: string;
}

interface MessagesState {
    messages: Message[];
    loading: boolean;
    error: string | null;
}

// Initial state
const initialState: MessagesState = {
    messages: [
        {id: 1, sender: Sender.Partner, text: "Hello! How can I help you?"},
    ],
    loading: false,
    error: null,
};

// Dummy function to simulate backend call
const dummySendMessage = async (message: Message): Promise<Message> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                id: message.id + 1,
                sender: Sender.Partner,
                text: "This is an automated response.",
            });
        }, 1000);
    });
};

// Async thunk for sending message
export const sendMessage = createAsyncThunk<Message, Message>(
    "messages/sendMessage",
    async (message: Message, {rejectWithValue}) => {
        try {
            const response: Message = await dummySendMessage(message);
            return response;
        } catch (error) {
            return rejectWithValue("Failed to send message");
        }
    }
);

const messagesSlice = createSlice({
    name: "messages",
    initialState,
    reducers: {
        addMessage: (state, action: PayloadAction<Message>) => {
            state.messages.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(sendMessage.pending, (state: MessagesState) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(sendMessage.fulfilled, (state: MessagesState, action: PayloadAction<Message>) => {
                state.messages.push(action.payload);
                state.loading = false;
            })
            .addCase(sendMessage.rejected, (state: MessagesState, action) => {
                state.loading = false;
                state.error = action.payload as string;
            });
    },
});

export const {addMessage} = messagesSlice.actions;
export default messagesSlice.reducer;
