const Express = require('express')
const App = Express()
const PORT = process.env.PORT || 7900

App.use(Express.urlencoded({ extended: true}))
App.use(Express.json())
App.listen(PORT, () => { console.log(`Server running in port : ${ PORT }`) })

const Routes = require('./Routes')
App.use(Routes)