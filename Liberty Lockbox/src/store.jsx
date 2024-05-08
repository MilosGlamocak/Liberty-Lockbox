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
    setSessionId: (sessionId) => set({ sessionId }),
    setUsername: (username) => set({ username }),
    clearAuthData: () => set({ sessionId: null, username: null }),
}));


