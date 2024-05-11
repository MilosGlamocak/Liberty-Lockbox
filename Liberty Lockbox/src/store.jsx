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
    setSessionId: (sessionId) => set({ sessionId }),
    setUsername: (username) => set({ username }),
    setAvatar: (avatar) => set({ avatar }),
    setEmail: (email) => set({ email }),
    setLabel: (label) => set({ label }),
    clearAuthData: () => set({ sessionId: null, username: null, avatar: null, email: null, label: null }),
}));


