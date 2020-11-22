
const fs = require('fs');
const generateREADME = require('./generateREADME.js');
const inquirer = require('inquirer');
const path = require('path');

let description;
let title;
let technologies;
let install;
let installIndex;
let usage;
let usageIndex;
let improvements;
let updates;
let collaborators;
let resources;
let contacts;
let license;
let resourcesUsedString;

const licenseArray = ["Apache", "Boost", "BSD", "Creative Commons", "Eclipse", "GNU", "IBM", "ISC", "MIT", "Mozilla", "Open Data Commons", "Perl", "Sil", "Unlicence and WTFPL", "Zlib"];
const apacheArray = ["Apache 2.0 License"];
const boostArray = ["Boost Software License 1.0"];
const BSDArray = ["BSD 3-Clause License", "BSD 2-Clause License"];
const ccArray = ["CC0", "Attribution 4.0 International", "Attribution-ShareAlike 4.0 International", "Attribution-NonCommercial 4.0 International", "Attribution-NoDerivates 4.0 International", "Attribution-NonCommmercial-ShareAlike 4.0 International", "Attribution-NonCommercial-NoDerivatives 4.0 International",];
const eclipseArray = ["Eclipse Public License 1.0"];
const GNUArray = ["GNU GPL v3", "GNU GPL v2", "GNU AGPL v3", "GNU LGPL v3", "GNU FDL v1.3"];
const IBMArray = ["IBM Public License Version 1.0"];
const ISCArray = ["ISC License (ISC)"];
const MITArray = ["The MIT License"];
const mozillaArray = ["Mozilla Public License 2.0"];
const ODCArray = ["Attribution License (BY)", "Open Database License (ODbL)", "Public Domain Dedication and License (PDDL)"];
const perlArray = ["The Perl License", "The Artistic License 2.0"];
const silArray = ["SIL Open Font License 1.1"];
const unArray = ["The Unlicense", "The Do What the Fuck You Want to Public License"];
const zlibArray = ["The zlib/libpng License"];

const clearDescription = () => {
    description = {
        what: "",
        why: "",
        solution: "",
        learn: "",
        standout: "",
    }
}

const clearInstall = () => {
    install = [];
    installIndex = 0;
}

const clearTechnologies = () => {
    technologies = [];
}

const clearUsage = () => {
    usage = [];
    usageIndex = 0;
}

const clearImprovements = () => {
    improvements = [];
}

const clearUpdates = () => {
    updates = [];
}

const clearCollborators = () => {
    collaborators = [];
}

const clearResources = () => {
    resources = [];
}

const clearContacts = () => {
    contacts = [];
}

const clearLicense = () => {
    license = [];
}

//Start the application 
const startApp = () => {

    inquirer
        .prompt([
            {
                name: "start",
                type: "list",
                message: "What would you like to do?",
                choices: ["New README", "Exit"],
            },
        ])
        .then((choice) => {
            if (choice.start === "Exit") {
                return;
            } else {
                projectTitle();
            }
        });
}

// get the project title
const projectTitle = async () => {
    await inquirer
        .prompt([
            {
                name: "title",
                type: "input",
                message: "What is your project title?",
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);

            if (answers.title == '') {
                // console.log("You must input a title");
                projectTitle();
            } else {
                title = answers.title;
                // console.log("variable content title =", title);

                clearDescription();
                descriptionPrompt();

            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

// get the Descrption Statment 
const descriptionPrompt = () => {

    inquirer
        .prompt([
            {
                name: "what",
                type: "input",
                message: "What is your project about?",
            },
            {
                name: "why",
                type: "input",
                message: "Why did you build this project?",
            },
            {
                name: "solution",
                type: "input",
                message: "What problem did it solve?",
            },
            {
                name: "learn",
                type: "input",
                message: "What did you learn?",
            },
            {
                name: "standout",
                type: "input",
                message: "What makes your project stand out",
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            description.what = answers.what;
            description.why = answers.why;
            description.solution = answers.solution;
            description.learn = answers.learn;
            description.standout = answers.standout;
            // console.log("variable content description =", description);

            clearInstall();
            installSteps();
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        });
}

// project installation process 
const installSteps = () => {

    inquirer
        .prompt([
            {
                name: "install",
                type: "input",
                message: "What is the first/next step to install your project?",
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Is there another step?",
                default: true,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            installIndex += 1;
            const obj = {
                Step: installIndex,
                instruct: answers.install,
            };
            install.push(obj);

            if (answers.askAgain == true) {
                installSteps();
            } else {
                // console.log('Your installation process:', install,);

                clearTechnologies();
                usedTechnologies();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

// what technologies where used? 
const usedTechnologies = () => {

    inquirer
        .prompt([
            {
                name: "tech",
                type: "input",
                message: "Name ONE technology that you used.",
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Did you use another technology?",
                default: true,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            technologies.push(answers.tech);

            if (answers.askAgain == true) {
                usedTechnologies();
            } else {
                // console.log('Your technologies used:', technologies, technologies.join(', '));

                clearUsage();
                usageSteps();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

// instructions for use
const usageSteps = () => {

    inquirer
        .prompt([
            {
                name: "usage",
                type: "input",
                message: "What is the first/next step to use your project?",
            },
            {
                name: "picture",
                type: "confirm",
                message: "Would you like to add a screenshot?",
                default: true,
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Is there another step?",
                default: true,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            usageIndex += 1;
            const obj = {
                Step: usageIndex,
                screenshot: answers.picture,
                instruct: answers.usage,
            };
            usage.push(obj);

            if (answers.askAgain == true) {
                usageSteps();
            } else {
                // console.log('Your installation process:', usage);

                anyImprovements();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

const anyImprovements = () => {

    inquirer
        .prompt([
            {
                name: "improvements",
                type: "confirm",
                message: "Do you want to add improvements at this time?",

            },
        ])
        .then((choice) => {
            // console.log("choice made =", choice.improvements);
            if (choice.improvements == true) {
                clearImprovements();
                improvementSection();
            } else if (choice.improvements == false) {
                clearUpdates();
                anyUpdates();
            }
        });
}

const improvementSection = () => {

    inquirer
        .prompt([
            {
                name: "improvement",
                type: "input",
                message: "What improvement would you like to make?",
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Do you want to make any more improvements?",
                default: true,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            improvements.push(answers.improvement);

            if (answers.askAgain == true) {
                improvementSection();
            } else {
                // console.log('Your technologies used:', improvements);

                clearUpdates();
                anyUpdates();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })

}

const anyUpdates = () => {

    inquirer
        .prompt([
            {
                name: "updates",
                type: "confirm",
                message: "Do you want to add updates at this time?",
            },
        ])
        .then((choice) => {
            // console.log("choice made =", choice.updates);
            if (choice.updates == true) {
                updateSection()
            } else if (choice.updates == false) {
                // console.log("response is no ");
                clearCollborators();
                projectCredits();
            }
        });
}

const updateSection = () => {

    inquirer
        .prompt([
            {
                name: "date",
                type: "input",
                message: "What date has the update been made?",
            },
            {
                name: "update",
                type: "input",
                message: "What is the update",
            },
            {
                name: "picture",
                type: "confirm",
                message: "Would you like to add a screenshot?",
                default: true,
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Do you want to add another update?",
                default: true,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            const obj = {
                date: answers.date,
                update: answers.update,
                screenshot: answers.picture,
            }
            updates.push(obj);

            if (answers.askAgain == true) {
                updateSection();
            } else {
                // console.log('Your updates are:', updates);
                clearCollborators();
                projectCredits();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

// Who collaborated on this project?  
const projectCredits = () => {

    inquirer
        .prompt([
            {
                name: "person",
                type: "input",
                message: "Who collaborated on this project?",
            },
            {
                name: "reason",
                type: "input",
                message: "How did they input to the project?",
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Did anyone else collaborate?",
                default: true,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            const obj = {
                name: answers.person,
                reason: answers.reason,
            }
            collaborators.push(obj);

            if (answers.askAgain == true) {
                projectCredits();
            } else {
                // console.log('Your technologies used:', technologies, technologies.join(', '));

                clearResources();
                projectResources();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

const projectResources = () => {

    inquirer
        .prompt([
            {
                name: "resource",
                type: "input",
                message: "What resources have helped you with the project?",
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Did you use any other resources?",
                default: true,
            },

        ])
        .then((answers) => {
            // console.log("answers =", answers);
            resources.push(answers.resource);
            let stringResourceToAppend = "- " + answers.resource + " /n ";
            resourcesUsedString += stringResourceToAppend;
            // console.log(resourcesUsedString);
            if (answers.askAgain == true) {
                projectResources();
            } else {
                // console.log('Your resources used:', resources, resources.join(', '));

                clearContacts();
                projectContacts();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })
}

const projectContacts = () => {

    inquirer
        .prompt([
            {
                name: "person",
                type: "input",
                message: "Input contacts name.",
            },
            {
                name: "email",
                type: "input",
                message: "What is their email?",
            },
            {
                name: "github",
                type: "input",
                message: "What is their Github username?",
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Did anyone else collaborate?",
                default: true,
            },

        ])
        .then((answers) => {
            // console.log("answers =", answers);
            const obj = {
                name: answers.person,
                email: answers.email,
                profile: answers.github,
            }
            contacts.push(obj);

            if (answers.askAgain == true) {
                projectContacts();
            } else {
                // console.log('Your resources used:', resources, resources.join(', '));

                clearLicense();
                projectLicence();
            }
        })
        .catch((error) => {
            // console.log("error =", error);
            // console.log("woops, something went wrong");
        })

}

// function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data);

}

// project licencing 
const projectLicence = () => {

    inquirer
        .prompt([
            {
                name: "license",
                type: "list",
                message: "How is your project licensed? - pick the type of license first ",
                choices: licenseArray,
            },
            {
                name: "appache",
                type: "list",
                message: "How is your project licensed?",
                choices: apacheArray,
                when: function (answers) {
                    return answers.license === "Apache";
                },
            },
            {
                name: "boost",
                type: "list",
                message: "How is your project licensed?",
                choices: boostArray,
                when: function (answers) {
                    return answers.license === "Boost";
                },
            },
            {
                name: "bsd",
                type: "list",
                message: "How is your project licensed?",
                choices: BSDArray,
                when: function (answers) {
                    return answers.license === "BSD";
                },
            },
            {
                name: "creativecomms",
                type: "list",
                message: "How is your project licensed?",
                choices: ccArray,
                when: function (answers) {
                    return answers.license === "Creative Commons";
                },
            },
            {
                name: "eclipse",
                type: "list",
                message: "How is your project licensed?",
                choices: eclipseArray,
                when: function (answers) {
                    return answers.license === "Eclipse";
                },
            },
            {
                name: "gnu",
                type: "list",
                message: "How is your project licensed?",
                choices: GNUArray,
                when: function (answers) {
                    return answers.license === "GNU";
                },
            },
            {
                name: "ibm",
                type: "list",
                message: "How is your project licensed?",
                choices: IBMArray,
                when: function (answers) {
                    return answers.license === "IBM";
                },
            },
            {
                name: "isc",
                type: "list",
                message: "How is your project licensed?",
                choices: ISCArray,
                when: function (answers) {
                    return answers.license === "ISC";
                },
            },
            {
                name: "mit",
                type: "list",
                message: "How is your project licensed?",
                choices: MITArray,
                when: function (answers) {
                    return answers.license === "MIT";
                },
            },
            {
                name: "mozilla",
                type: "list",
                message: "How is your project licensed?",
                choices: mozillaArray,
                when: function (answers) {
                    return answers.license === "Mozilla";
                },
            },
            {
                name: "opendatacomms",
                type: "list",
                message: "How is your project licensed?",
                choices: ODCArray,
                when: function (answers) {
                    return answers.license === "Open Data Commons";
                },
            },
            {
                name: "perl",
                type: "list",
                message: "How is your project licensed?",
                choices: perlArray,
                when: function (answers) {
                    return answers.license === "Perl";
                },
            },
            {
                name: "sil",
                type: "list",
                message: "How is your project licensed?",
                choices: silArray,
                when: function (answers) {
                    return answers.license === "Sil";
                },
            },
            {
                name: "unlicensed",
                type: "list",
                message: "How is your project licensed?",
                choices: unArray,
                when: function (answers) {
                    return answers.license === "Unlicence and WTFPL";
                },
            },
            {
                name: "zlib",
                type: "list",
                message: "How is your project licensed?",
                choices: zlibArray,
                when: function (answers) {
                    return answers.license === "Zlib";
                },
            },
            {
                name: "askAgain",
                type: "confirm",
                message: "Do you need another license",
                default: false,
            },
        ])
        .then((answers) => {
            // console.log("answers =", answers);
            switch (answers.license) {
                case "Apache":
                    license.push(answers.appache)
                    break;
                case "Boost":
                    license.push(answers.boost)
                    break;
                case "BSD":
                    license.push(answers.bsd)
                    break;
                case "Creative Commons":
                    license.push(answers.creativecomms)
                    break;
                case "Eclipse":
                    license.push(answers.eclipse)
                    break;
                case "GNU":
                    license.push(answers.gnu)
                    break;
                case "IBM":
                    license.push(answers.ibm)
                    break;
                case "ISC":
                    license.push(answers.isc)
                    break;
                case "MIT":
                    license.push(answers.mit)
                    break;
                case "Mozilla":
                    license.push(answers.mozilla)
                    break;
                case "Open Data Commons":
                    license.push(answers.opendatacomms)
                    break;
                case "Perl":
                    license.push(answers.perl)
                    break;
                case "Sil":
                    license.push(answers.sil)
                    break;
                case "Unlicence and WTFPL":
                    license.push(answers.unlicensed)
                    break;
                case "Zlib":
                    license.push(answers.zlib)
                    break;
            }

            if (answers.askAgain == true) {
                projectLicence();
            } else {
                // console.log('Your Licenses are:', license, license.join(', '));

                // console.log("thats the end of the interigation");
                // console.log(description, title, technologies, install, usage, improvements, updates, collaborators, resources, contacts, license);
                let readme = generateREADME.generateReadme(description, title, technologies, install, usage, improvements, updates, collaborators, resources, contacts, license);
                console.log("readme =", readme);
                writeToFile("README.md", readme);
                console.log("your file has been written");
            }
        })
        .catch((error) => {
            console.log("error =", error);
            console.log("woops, something went wrong");
        })
}

// function to initialize program
// function init() {

//     startApp()
//         .then((description, title, technologies, install, usage, improvements, updates, collaborators, resources, contacts, license) => {
//             const readme = generateREADME.generateReadme(description, title, technologies, install, usage, improvements, updates, collaborators, resources, contacts, license);
//             // console.log("readme =", readme);
//             writeToFile("README.md", readme);
//         })
//         .catch((error) => {
//             // console.log("error =", error);
//             // console.log("woops, something went wrong");
//         });

// }

// function call to initialize program
// init();

startApp();
