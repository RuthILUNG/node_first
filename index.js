//npm init es6
// create a index.js file 
//export the greet function fron greet.js
//import the greet function in index.js
//install it 
//import it =>
import {greet} from './greet.js';
import{yo} from './greet.js';
//import chalk from chalk;

console.log(yo("Ntombi"));

//let vs const

let name="Ntombi";
name="lihle";
console.log(greet(name));
import chalk, { Chalk } from 'chalk';
//import the greet module that is in the current folder


const styledMessage = chalk.bgGreen.black(greet('Xola'));
console.log(styledMessage)

import cowsay from 'cowsay';
import figlet from 'figlet';
figlet('hello world ',function(err,data)
{
    if (err)
    {
        console,log("something went wrong....");
        console.dir(err);
        return;
    }
    console.log(data);

    
});

console.log(chalk.bgGreen.black(cowsay.say({
     text: greet('Nombi')

})));
   

