

// _dirname - path to current directory
// _filename - file name
// require - function to use module
// process - infor about env where the program is being executed

// setInterval(()=>{
//     console.log('hello world')
// },1require0)
const names = require('./index')
const greet =require ('./greet')
//  const john ="john"
//  const peter="peter"
//  const kawira = "kawira"

//  const sayHi=(name)=>{
    // console.log (`hello there ${name}`)
//  }

//  sayHi(john)
// modules- encapsulate code(only share min)
// commonjs, every file is  a module,by default
greet('bernard')
greet(names.ann)
greet(names.lord)
greet(names.gen)


