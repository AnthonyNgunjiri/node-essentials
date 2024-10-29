// const path =require('path')

// console.log(path.sep)//return se

// const filepath= path.join('/content','subfolder','text.txt')
// console.log(filepath)

// const base = path.basename(filepath)
// console.log(base)
// const absolute = path.resolve(__dirname,'content','subfolder','test.txt')
// console.log(absolute)

const{readFile, writeFile} = require('fs')
const util =require('util')

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)


const start= async()=>{
    try{
    const  first= await readFilePromise('./content/first.txt')
    const  second= await readFilePromise ('./content/second.txt')
    await writeFilePromise('./content/result-two.txt',`this is amazing:${first}${second}`,{flag:'a'})
    console.log(first,second)
    }catch(error){
        console.log(error)
    }
    
    }
    start()
// const getText=(path) =>{
//     return new promise((resolve,reject)=>{
//         readFile(path, 'utf8',(err,data)=>{
//             if(err){
//                 reject(err)
//             }else{
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then((result) => console.log(result))
// .catch((err) => console.log(err))

// const start= async()=>{
// try{
//     first= await getText('./content/first.txt')
//     second= await getText('./content/second.txt')
// console.log(first,second)
// }catch(error){
//     console.log(error)
// }

// }
// start()



