module.exports = function(req,res){
    res.end('hello from "'+req.originalUrl+'" at '+Date()+', edited first via Fork, then from branch (Hi Joe)')
}
