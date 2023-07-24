const { log, Console } = require('console');
const rd = require("rd")
const { CLIENT_RENEG_WINDOW } = require('tls');

console.log("READ ME")

rd.readfile('badal.text', function(err, data){
    if(err){
        console.log('error',err)
        return err;
    }
    console.log('data', data.Tostring())
    console.log("END DATA")
    return data;

});
console.log("NEW DATA")