// ask questions for the description and project title. 

const inquirer = require('inquirer');


const promptQuestions = () => {

    inquirer
      .prompt([
        {type:"input", name:"title", message: "What is your project title"},

        // {type:"input", name:"descriptionWhat", message: "What is your project about?"},
        // {type:"input", name:"descriptionWhy", message: "Why did you build this project?"},
        // {type:"input", name:"descriptionSolution", message: "What problem did it solve?"},
        // {type:"input", name:"descriptionLearn", message: "What did you learn?"},
        // {type:"input", name:"descriptionStandOut", message: "What makes your project stand out?"},
        {type:"confirm", name:"confirm", message:"are you checking this?"}

        {type:"input", name:"instalation", message: "How do you install the application? - provide a step by step description of how to get the deployment enviroment running."},

        {type:"checkbox", name:"technologies", message:"What Technologies or frameworks have you used?", choices:["HTML","CSS","Javascript","Node.js","Bootstrap","Semantics"]},

        // {type:"input", name:"usage", message:"What are the instructions for use?" },

        // {type:"input", name:"improvements", message:"" },
        // {type:"input", name:"updates", message:"" },

        // {type:"input", name:"credits", message:"Who has collaborated on this projects?" },
        // {type:"input", name:"resources", message:"What resources have you utilised on this project" },

        // {type:"checkbox", 
        //  name:"license", 
        //  message:"What licencing are you using?", 
        //  choices: ["Apache License 2.0", "Boost Software License", "GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License","MIT license","The Unlicense" ]}
      ])
}

      module.exports = {
          "promptQuestions": promptQuestions,
      }