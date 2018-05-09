import {API_URL, API_PORT, ENDPOINTS } from './config'

const GetStakeInfoAtAddress = async (address) => {
    try {
        const request_url = `http://${API_URL}:${API_PORT}${ENDPOINTS.GETSTAKE(address)}`
        const stakeInfo = await fetch(request_url)
        const stakeJson = await stakeInfo.json()
        return stakeJson.data
    } catch (error) {
        console.error(error)
    }
}

export default GetStakeInfoAtAddress