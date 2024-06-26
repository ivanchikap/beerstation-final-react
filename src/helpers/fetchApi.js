const fetchInfo = async (apiUrl) => {
    const res = await fetch(`${apiUrl}`)

    if (!res.ok) {
        throw Error(`Something wrong during fetch general-info: ${res.status} ${res.statusText}`)
    }

    return await res.json()
}

const fetchShops = async (apiUrl) => {
    const res = await fetch(`${apiUrl}`)

    if (!res.ok) {
        throw Error(`Something wrong during fetch shops: ${res.status} ${res.statusText}`)
    }

    return await res.json()
}

export default {fetchShops, fetchInfo}