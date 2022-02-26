const Express = require("express")
const Routes = Express()
const { MidtransClient } = require('midtrans-node-client')

// Controllers
const MidtransController = require('./Midtrans/IndexController')

Routes.get('/', (req, res) => {
    res.send('ok')
})
Routes.post('/midtrans', MidtransController.BankTransfer)
Routes.get("/midtrans", (req, res) => {
    console.log(MidtransClient)

    // const iris = new MidtransClient.Iris({
    //     isProduction: process.env.DEVELOPMENT,
    //     serverKey: `Basic ${ Buffer.from('SB-Mid-server-7OOJtkV08r6KUnMJq3CsdugS' + ":").toString("base64") }`,
    //     clientKey: 'SB-Mid-client-aOcgOhxD7Or8nkcF'
    // })

    const iris = new MidtransClient.Iris({
        isProduction: process.env.DEVELOPMENT,
        serverKey: `${ Buffer.from('SB-Mid-server-GwUP_WGbJPXsDzsNEBRs8IYA').toString("base64") }`,
        clientKey: 'SB-Mid-client-61XuGAwQ8Bj8LxSS'
    })

    console.log(Buffer.from('SB-Mid-server-7OOJtkV08r6KUnMJq3CsdugS' + ":").toString("base64"))
       
    iris.getTransactionHistory({ from_date: "2020-11-01", to_date: "2020-12-28" })
    .then(console.log)
    .catch(console.error)
})

module.exports = Routes