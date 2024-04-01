#! /usr/bin/env node

import inquirer from "inquirer";
let zakat:number = 2.5;
let GoldWeightInTolaReq= 7.5;
let GoldValueInTola = 234800;


const answer = await inquirer.prompt([
    {
        name:"GoldWeight",
        message:"Enter Gold Weight",
        type:"number"
    }
])

let GoldWeight = answer.GoldWeight;
if(GoldWeight.GoldWeight>=GoldWeightInTolaReq){
    let calculatedzakat=(GoldWeight * GoldValueInTola) * (zakat/100);
    console.log(`The calculated Value of goldweight ${GoldWeight} tola is ${calculatedzakat}`);
    }
    else{console.log("zakat not applicable");
    }