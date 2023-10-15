#!/usr/bin/env node
import inquirer from "inquirer";
import showbanner from "node-banner";
import chalk from "chalk";
(async () => {
    await showbanner("The Quiz Show!", "Complete these Questions!", "green", "red");
})();
async function Quiz_Show() {
    const Question1 = await inquirer.prompt([
        {
            message: chalk.greenBright.italic("Question 1. What is the date of release Of Minecraft?"),
            type: "list",
            choices: [`A. 2017`, `B. 2018`, `C. 2011`, `D. 2023`],
            name: "FirstQuestion"
        }
    ]);
    const { FirstQuestion } = Question1;
    if (FirstQuestion) {
        if (FirstQuestion === `C. 2011`) {
            console.log(`Correct! Moving On:`);
            const Question2 = await inquirer.prompt([
                {
                    message: chalk.greenBright.italic("Question 2. Who made Facebook?"),
                    type: "list",
                    choices: [`A. Mark Zukerberg`, `B. Bill Gates`, `C. Elon Musk`, `D. Me`],
                    name: "SecondQuestion"
                }
            ]);
            const { SecondQuestion } = Question2;
            if (SecondQuestion) {
                if (SecondQuestion === "A. Mark Zukerberg") {
                    console.log(`Correct! Moving on:`);
                    const Question3 = await inquirer.prompt([
                        {
                            message: chalk.greenBright.italic("Question 3. Who made Minecraft?"),
                            type: "list",
                            choices: [`A. Jeb`, `B. JackaBoy`, `C. Baba Yaga`, `D. Notch`],
                            name: "ThirdQuestion"
                        }
                    ]);
                    const { ThirdQuestion } = Question3;
                    if (ThirdQuestion) {
                        if (ThirdQuestion === "D. Notch") {
                            console.log(`Very Good! Moving on:`);
                            const Question4 = await inquirer.prompt([
                                {
                                    message: chalk.greenBright.italic("Question 4. How many sides does a pentagon have?"),
                                    type: "list",
                                    choices: [`A. 6`, `B. 5`, `C. 8`, `D. 10`],
                                    name: "FourthQuestion"
                                }
                            ]);
                            const { FourthQuestion } = Question4;
                            if (FourthQuestion) {
                                if (FourthQuestion === "B. 5") {
                                    console.log(chalk.greenBright.italic(`You are nearly there! Last Question:`));
                                    const QuestionLast = await inquirer.prompt([
                                        {
                                            message: chalk.greenBright.italic("Last Question. What is 7 ^ 3?"),
                                            type: "list",
                                            choices: [`A. 343`, `B. 313`, `C. 333`, `D. 49`],
                                            name: "LastQuestion"
                                        }
                                    ]);
                                    const { LastQuestion } = QuestionLast;
                                    if (LastQuestion) {
                                        if (LastQuestion === "A. 343") {
                                            console.log(`You completed the quiz! Congrats!`);
                                        }
                                        else {
                                            console.log(`Noooo! You were there! Try again!`);
                                        }
                                    }
                                }
                                else {
                                    console.log(`You were so close! Try again!`);
                                }
                            }
                        }
                        else {
                            console.log(`You got quite far, Try again!`);
                        }
                    }
                }
                else {
                    console.log(`Wrong Answer. Better Luck Next time!`);
                }
            }
        }
        else {
            console.log(`Wrong Answer. You failed. Better luck next Time!`);
        }
    }
}
setTimeout(() => {
    Quiz_Show();
}, 100);
