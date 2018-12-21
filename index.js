let esprima = require('esprima');
let estraverse = require('estraverse');
let escodegen = require('escodegen');

let code = 'let test = ()=>{}';
// 将代码专程转成成语法树
let ast = esprima.parse(code);
console.dir(ast)
// 遍历抽象语法树
estraverse.traverse(ast,{
    enter(node){
        console.log("enter:",node.type)
        if(node.type === 'Identifier'){
            node.name += "_np_";
        }
    },
    leave(node){
        console.log("leave:",node.type)
    }
});

let res = escodegen.generate(ast);
console.log(res);