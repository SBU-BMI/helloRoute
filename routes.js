module.exports = function(app) {
    //add the folders for each person here
    app.use('/jonas', require('./collabs/jonas/jonas.js'));

    app.use('/paul', require('./collabs/paul/paul.js'));

    app.use('/', require('./root.js'));
}

