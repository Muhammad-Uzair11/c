#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
{
    console.log("welcome to the number guessing game");
}
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess the number 1-6",
    },
]);
if (answer.userGuessedNumber === randomnumber) {
    console.log("congratulation! you guessed the right number");
}
else {
    console.log("you guess wrong number");
}
