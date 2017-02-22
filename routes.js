app = require('express')

//app.use('/jonas',require('./jonas/jonas.js'))
app.use('/',require('./root.js') )

app.use('/wade',require('./wade.js') )

