import { ref } from 'vue'
import usePageRequests from './usePageRequests'

export default function useResource(resource) {

const { makeRequest } = usePageRequests()

const baseURL = `https://jsonplaceholder.typicode.com/${resource}`
const items = ref([])
const item = ref(null)


/*    const fetchAll = async () => {
        const response = await fetch(baseURL)
        items.value = await response.json()
    }
*/

    const fetchAll = async () => items.value = await makeRequest(baseURL)

/*    const fetchOne = async (id) => {
        const response = await fetch(`${baseURL}/${id}`)
        item.value = await response.json()
    }
*/

    const fetchOne = async (id) => item.value = await makeRequest(`${baseURL}/${id}`)
    
    return {
        items,
        fetchAll,
        item,
        fetchOne
    }

}