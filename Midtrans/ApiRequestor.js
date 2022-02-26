const Axios = require('axios')

class ApiRequestor {
    static get(url, serverKey, data_hash) {
        return this.remoteCall(url, serverKey, data_hash, false)
    }

    static post(url, serverKey, data_hash) {
        return this.remoteCall(url, serverKey, data_hash, true)
    }

    static remoteCall(url, serverKey, data_hash, post = true) {
        const headers = {
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Authorization": `Basic ${ Buffer.from(serverKey + ":").toString("base64") }`
        }

        console.log(headers)

        let body = JSON.stringify(data_hash)
        let result

        if ( post ) {
            result = Axios.post(url, body, { headers: headers }).then(response => response.data).catch(err => console.log(err))
        } else {
            result = Axios.get(url, { headers: headers }).then(response => response.data).catch(err => console.log(err))
        }
    }
}

module.exports = ApiRequestor