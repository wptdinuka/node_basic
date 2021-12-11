const fs = require('fs');
const path = require('path');

// Create Folder

/*

fs.mkdir(path.join(__dirname, '/test'), {}, function(err) {
    if(err) throw err;
    console.log('Folder Created.');
}) ;

*/

// Create and Write to File

/*
fs.writeFile(path.join(__dirname, '/test' , 'wpt.txt'), 'Hello World', 
function(err) {
    if(err) throw err;
    console.log('Folder Writen.');

    //File append
    fs.appendFile(path.join(__dirname, '/test' , 'wpt.txt'), 'WPT World', 
    function(err) {
    if(err) throw err;
    console.log('Folder Writen.');
}
) ;
}) ;

*/

//Read File

/*

fs.readFile(path.join(__dirname, '/test', 'wpt.txt'), 'utf8', function(err, data) {
    if(err) throw err;
    console.log(data);
}) ;

*/

//Rename File

fs.rename(
    path.join(__dirname, '/test', 'wpt.txt'), 
    path.join(__dirname, '/test', 'wptnode.txt'), 

function(err) {
    if(err) throw err;
    console.log('Renamed');
}) ;