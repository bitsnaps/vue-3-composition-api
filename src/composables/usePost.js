import postcss from 'postcss'
import { ref } from 'vue'

const baseURL = "https://jsonplaceholder.typicode.com/posts"
const posts = ref([])
const post = ref(null)

export default function usePost() {

    const fetchAll = async () => {
        const response = await fetch(baseURL)
        posts.value = await response.json()
    }

    const fetchOne = async (id) => {
        const response = await fetch(`${baseURL}/${id}`)
        post.value = await response.json()

    }

    return {
        posts, 
        fetchAll,
        post,
        fetchOne
    }

}