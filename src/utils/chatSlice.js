import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_OFFSET } from "../components/constants";

const chatSlice = createSlice({
    name: 'chat',
    initialState: {
        messages: [{
            name:"Ravi Singh",
            message: "Lorem ipsum dolor sit amet",
        }]
    },
    reducers: {
        addMessage: (state,action) => {
            if(state.messages.length > LIVE_CHAT_OFFSET){
                state.messages.splice(LIVE_CHAT_OFFSET,1)     // Whenever the chat message length goes beyond the certain offest value we delete 1 element from that index using splice()
            }
            state.messages.unshift(action.payload)
        }
    }
})

export const { addMessage } = chatSlice.actions

export default chatSlice.reducer