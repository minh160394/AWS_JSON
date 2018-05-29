var express = require("express");
var app = express();
var request = require("request");
app.set("view engine", "ejs");
app.use( express.static( "images" ) );
 var query ;
 var datas = "";
app.get("/",function(req,res){
    if(req.query.movie){
    query = req.query.movie;
    }
    else{
        query = "hello";
    }
    var url = "http://www.omdbapi.com/?s=" + query + "&apikey=76396031" ;
   request(url,function(error, response, body){
       if(!error && response.statusCode == 200){
            datas = JSON.parse(body);
           res.render("home", {datas : datas});
            }
      
   });
});
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Sever start !!!!");
})
