const http = require('http')

 const ser =  http.createServer((req, res)=>{
    if(req.url == '/'){
        console.log("<h>hello badal kumar</h>")
    }
    if (req.url == 'about/') {
        console.log("erver is ruuning about section")
        
    } else {
        
    }
    res.end();

});
ser.listen(201);
console.log("http is running is port num 201");