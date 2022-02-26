const ApiRequestor = require('./ApiRequestor')
const Config = require('./Config')

class CoreApi {
    static Charge(payloads) {
        let result = ApiRequestor.post(
            Config.getBaseUrl() + "/charge",
            Config.serverKey,
            payloads
        )
    }
}

module.exports = CoreApi