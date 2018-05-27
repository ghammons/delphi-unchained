/*
    Holds the JavaScript SDK of interacting with the Delphi API Resource "Stake"
*/

import {ENDPOINTS, BASEURL } from './../config'

const GetStakeInfoAtAddress = async (address) => {
    try {
        // Proxy Server means we don't need to specify API url or endpoint.
        // Check Package.json for configuration
        const request_url = `${BASEURL}${ENDPOINTS.GETSTAKE(address)}`
        const stakeInfo = await fetch(request_url, {mode:'no-cors', headers:{'Content-Type':'application/json'}})
        console.log("RECEIVED RESPONSE", stakeInfo.body)
        const stakeJson = await stakeInfo.json()

        return stakeJson.data
    } catch (error) {
        console.error(error)
    }
}

export default GetStakeInfoAtAddress
