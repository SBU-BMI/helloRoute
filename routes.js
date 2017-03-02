module.exports = function(app) {
    // creating a try/catch function for use
    var safeUse = function(route,path){
        try{
            app.use(route, require(path));
        } catch (ex){
            app.use(route, function(req,res){
                res.end('error found:',ex.message)
            });
        }
    }
    //add the folders for each person here
    app.use('/jonas', require('./collabs/jonas/jonas.js'));
    //safeUse('/jonas', './collabs/jonas/jonas.js');

    app.use('/wade', require('./collabs/wade/wade.js'));

    app.use('/paul', require('./collabs/paul/paul.js'));
    
    app.use('/kimon', require('./collabs/kimon/kimon.js'));

    app.use('/eileen', require('./collabs/eileen/eileen.js'));

    app.use('/', require('./root.js'));
}
