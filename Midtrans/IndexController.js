const CoreApi = require('./CoreApi')
const BankTransferConfig = require('./BankTransfer')

exports.BankTransfer = async (req, res) => {
    let data
    let body = req.body
    let customer = {
        email: "admin@gmail.com",
        first_name: "admin",
        last_name: "adminlast",
        phone: "087882820337",
    }

    let bankTransfer = new BankTransferConfig(body.items, customer)
    switch (body.channel) {
        case "BCA":
            data = bankTransfer.bca()
            break;
        case "BNI":
            data = bankTransfer.bni()
            break;

        case "PERMATA":
            data = bankTransfer.permata()
            break;
    }

    // return data
    // return CoreApi.Charge(data)

    res.send({
        data: data,
        charge: CoreApi.Charge(data)
    })
}