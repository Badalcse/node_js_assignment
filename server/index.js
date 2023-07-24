const { log, Console } = require('console');
const fs = require('fs');
const { CLIENT_RENEG_WINDOW } = require('tls');

// asnchronous way

console.log("READ START");

fs.readFile('input.tex', function(err, data){
    if(err){

        console.log("Error:", err)
        return err
    }
    console.log('data:',data.toString())
    console.log("end start")
    return data;

});
console.log('OTHER STAF')

// synchronou way

let data = fs.readFileSync('input.tex');
console.log('data:',data.toString());
console.log("end start")
console.log('OTHER STAF')


const buf = new Buffer(1024);

fs.open('input.tex' , 'r+', function(err, fd){
    if(err){
        console.log("error in openning file", err);
    }
    console.log("file open seccusefuly")
    fs.read(fd ,buf,0,buf.length,0,function(err, byte){
        if(err){
            console.log("error in readfile");
        }
        console.log("data",byte.toString());
        console.log("data", buf.slice(0,byte).toString())

})


});

// append to file

fs.appendFile('index.tex', '-- badal kumar', 'utf8',function(err){
    if(err){
        console.log("error in the writing file")
    }
    else{
        console.log("seccesfully writting")
    }
});

//detelting file

fs.unlink('badal.text',function(err){
    if(err){
        console.log("err in the file")
    }
    else{
        console.log("seccesefully deleted")
    }
})