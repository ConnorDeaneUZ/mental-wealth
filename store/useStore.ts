import { defineStore } from "pinia";

export const useStore = defineStore({
    id: "store",
    state: () => ({
        showModal: false
    }),

});
