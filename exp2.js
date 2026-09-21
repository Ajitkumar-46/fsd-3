const fs= require('fs');
fs.writeFileSync('example.txt','This is experiment 2 in FSD Workshop','utf8');
console.log('create file successfully');
const data=fs.readFileSync('example.txt','utf8');
console.log('file content is:',data);
fs.appendFileSync('example.txt','\n This is the new line');
// console.log('Example File is appende');
// fs.unlinkSync('student1.txt');
console.log('example file is deleted');
fs.mkdirSync('samplefolder');
console.log('a new folder is created');
fs.rmdirSync('samplefolder');
console.log('new folder is deleted');
if(fs.existsSync('secastudent.txt')){
    console.log('file exist');
}else{
    console.log('file not found, need to create this file');
}