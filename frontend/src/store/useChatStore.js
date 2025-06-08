import {create} from "zustand"
import {axiosInstance} from "../lib/axios.js"
import toast from "react-hot-toast";
import { useAuthStore } from "./useAuthStore.js";

export const useChatStore = create((set,get) =>({
    messages: [],
    users: [],
    selectedUser: null,
    isUserLoading: false,
    isMessagesLoading: false,

    getUsers:async () =>{
        set({isUserLoading: true});
        try {
            const res = await axiosInstance.get("/messages/users");
            set({ users: res.data})
        } catch (error) {
            toast.error(error.response.data.message)
        }finally{
            set({isUserLoading: false});
        }
    },
    getMessages : async (userId) =>{
        
    set({isMessagesLoading: true})
    try {
        const res = await axiosInstance.get(`/messages/${userId}`)
        set({messages: res.data});
    } catch (error) {
        toast.error(error.response.data.message)
    }finally{
        set({isMessagesLoading: false})

    }
    },
    sendMessage : async (messageData) =>{
        const {selectedUser, messages} = get()
        try {
            const res = await axiosInstance.post(`/messages/send/${selectedUser._id}`,messageData)
            set({messages:[...messages,res.data]})
        } catch (error) {
                toast.error(error.response.data.message)
        }
    },
    subscrideToMessage: () =>{
        const{ selectedUser } = get()
        if(!selectedUser) return;

        const socket = useAuthStore.getState().socket;

        if (!socket) return;

        socket.on("NewMessage", (newMessage) =>{
            if(newMessage.senderId  !== selectedUser._id) return
            set({
                messages: [...get().messages, newMessage],
            })
        })
    },
    unsubscribeFromMessags: () =>{
        const socket = useAuthStore.getState().socket;
        socket.off("NewMessage")
    },
    setSelectedUser: (selectedUser) => set({selectedUser}),
}))