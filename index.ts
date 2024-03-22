#! /usr/bin/env node


import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random() * 6 + 1);

const answer = await inquirer.prompt([
  {
    name: "userGuessedNumber",
    type: "number",
    message: "please guess the number",
  },
]);

if (answer.userGuessedNumber === randomnumber) {
  console.log("congratulation! you guessed the right number");
} else {
  console.log("you guess wrong number");
}
