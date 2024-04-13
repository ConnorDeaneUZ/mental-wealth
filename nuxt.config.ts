// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    pages: true,
    components: [
        {
            path: "~/components",
            pathPrefix: false,
        },
    ],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxtjs/supabase',
        "@pinia/nuxt"
    ],
    supabase: {
        url: process.env.SUPABASE_URL,
        key: process.env.SUPABASE_KEY,
        redirect: false,
        redirectOptions: {
            login: '/login',
            callback: '/confirm',
            include: undefined,
            exclude: [],
            cookieRedirect: false,
        }
    },

});
