import { useStore } from "~/store/useStore";

const entries = ref()
export function useJournal() {
    const supabase = useSupabaseClient();
    const store = useStore()

    const fetchData = async () => {
        console.log('fetch')
        let data = await supabase.from("journal").select();
        entries.value = data.data

    }

    const deletePost = async (item: number) => {
        console.log('delete')
        const { data, error } = await supabase
            .from("journal")
            .delete()
            .match({ id: item });
        fetchData();
    };

    const newMessage = ref();
    const insertData = async (item: object) => {
        console.log('post')
        const { data, error } = await supabase
            .from("journal")
            .insert([{ entry: item.body, heading: item.title }]);

        store.showModal = false
        fetchData();
    };

    onMounted(fetchData)

    return { entries, deletePost, insertData }
}
