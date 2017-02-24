module.exports = function(req,res){
    var h ='<div style="font-family:Verdana">' 
    h += '<h2 style="color:maroon">Hello route from root :-),</h2>'
    h += '<p style="color:navy">'
    h += '<br>This service is being automatically deployed from <a href="https://github.com/SBU-BMI/helloRoute" target="_blank">https://github.com/SBU-BMI/helloRoute</a>.'
    h += '<br>The routes are defined at <a href="https://github.com/SBU-BMI/helloRoute/blob/master/routes.js" target="_blank">https://github.com/SBU-BMI/helloRoute/blob/master/routes.js</a>,<br>&nbsp;&nbsp;&nbsp; all others fall to the root automatically.'
    h += '<br>ie <a href="https://helloroute.herokuapp.com/jonas" target="_blank">https://helloroute.herokuapp.com/jonas</a>,'
    h += '<br>&nbsp;&nbsp;&nbsp; <a href="https://helloroute.herokuapp.com/wade" target="_blank">https://helloroute.herokuapp.com/wade</a>,'
    h += '<br>&nbsp;&nbsp;&nbsp; <a href="https://helloroute.herokuapp.com/paul" target="_blank">https://helloroute.herokuapp.com/paul</a>,'
    h += '<br>&nbsp;&nbsp;&nbsp; <a href="https://helloroute.herokuapp.com/eileen" target="_blank">https://helloroute.herokuapp.com/eileen</a>,'
    '<br>&nbsp;&nbsp;&nbsp; etc ...'
    h += '</p>'
    h += '</div>'
    res.send(h)
}
