module.exports = function(req,res){
    res.send('Hello route from root :-),')
    res.send('\nThis service is being automatically deployed from https://github.com/SBU-BMI/helloRoute.')
    res.send('\nThe routes are defined at https://github.com/SBU-BMI/helloRoute/blob/master/routes.js, all others fall to the root automatically,')
    res.end('\ni.e. try https://helloroute.herokuapp.com/jonas, https://helloroute.herokuapp.com/wade, https://helloroute.herokuapp.com/paul, etc')
}
