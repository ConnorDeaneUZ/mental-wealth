import { ref, onMounted } from 'vue';
import { useStore } from "~/store/useStore";


const entries = ref();

export function useJournal() {
    const supabase = useSupabaseClient();
    const store = useStore();


    const fetchData = async () => {
        console.log('Fetching all entries');
        let { data, error } = await supabase.from("journal").select();
        entries.value = data;

    };

    const fetchSingle = async (id: string) => {
        let { data, error } = await supabase.from("journal").select().eq('id', id);

        if (error) {
            console.error('Error fetching single entry:', error);
            return null;
        } else {
            console.log('Fetched single entry:', data[0]);
            return data[0];
        }
    };

    const deletePost = async (itemId: number) => {
        console.log('Deleting entry');
        const { data, error } = await supabase
            .from("journal")
            .delete()
            .match({ id: itemId });
        store.showModal = false;

        fetchData();
    };

    const insertData = async (item: { body: string, title: string }) => {
        console.log('Inserting new entry');
        const { data, error } = await supabase
            .from("journal")
            .insert([{ entry: item.body, heading: item.title }]);
        store.showModal = false;
        fetchData();
    };

    onMounted(fetchData);

    return { entries, deletePost, insertData, fetchSingle };
}
