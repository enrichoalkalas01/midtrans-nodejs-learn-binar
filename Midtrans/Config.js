const SANDBOX_BASE_URL = 'https://api.sandbox.midtrans.com/v2';
const PRODUCTION_BASE_URL = 'https://api.midtrans.com/v2';

class Config {
    static serverKey = 'SB-Mid-server-7OOJtkV08r6KUnMJq3CsdugS';
    static isProduction = false;
    static is3ds = false;
    static isSanitized = false;

    static getBaseUrl() {
        return Config.isProduction ? PRODUCTION_BASE_URL : SANDBOX_BASE_URL
    }
}

module.exports = Config