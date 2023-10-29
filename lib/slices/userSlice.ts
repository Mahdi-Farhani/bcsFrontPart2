import { create } from "zustand";
import { persist } from 'zustand/middleware';
export interface User {
    name: string
    lastName: string
    companyName: string
    phone: string
    email: string
    token: string
    publicKey: string
}

interface UserState {
    user: User;
    addUser: (user: User) => void;
    resetUser: () => void;
}

export const useUserStore = create<UserState>()(persist((set, get) => ({
    user: {
        name: "",
        lastName: "",
        companyName: "",
        phone: "",
        email: "",
        token: "",
        publicKey: ""
    },
    addUser: (user) => set({ user: user }),
    resetUser: () =>
        set({
            user: {
                name: "",
                lastName: "",
                companyName: "",
                phone: "",
                email: "",
                token: "",
                publicKey: ""
            },
        })
}),
    {
        name: 'user-store',
        getStorage: () => localStorage,
    }));