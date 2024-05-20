/*import {create} from 'zustand'

export const useAuth = create((set) => ({
    sessionId: null,
    username: null,
    setSessionId: (id) => set((state) => ({sessionId: id})),
    setUsername: (username) => set((state) => ({username: username})),
}))*/

import {create} from 'zustand';

export const useAuth = create((set) => ({
    sessionId: null,
    username: null,
    avatar: null,
    email: null,
    label: null,
    userId: null,
    clearAuthData: () => set({ sessionId: null, username: null, avatar: null, email: null, label: null, userId }),
}));


export const useItems = create((set) => ({
    items: [],
    clearItemsData: () => set({ items: [] }),
}));


