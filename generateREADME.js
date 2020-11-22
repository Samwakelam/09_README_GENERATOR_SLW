const generateReadme = (description, title, technologies, install, usage, improvements, updates, collaborators, resources, contacts, license ) => {
   
    // console.log("description =", description);

    const {what , why, solution, learn, standout} = description; 

    // console.log("title =", title);
    // console.log("technologies =", technologies);
    // console.log("technologies length =", technologies.length);

    
    const bulletList = (section) => {
        if (section == undefined){
            return "There is nothing to display at this time."
        }else{
            let outputArray = [];
            for (let i = 0; i < section.length; i++) {
                outputArray.push(`* ${section[i]}<br />`);
            }
            return outputArray;
        }
    }

    // console.log("install =", install);
    // console.log("install length =", install.length);

    const instructionSteps = (section) => {
        let outputArray = [];
        for (let i = 0; i < section.length; i++){
            let stepString = `* Step ${section[i].Step}: ${section[i].instruct}.`;
            let screenShot;
            switch(section[i].screenshot){
                case undefined: 
                    // console.log("there is not a screenshot option in this question");
                     screenShot = "";
                  break;
                case false:
                     screenShot = "";
                  break;
                case true:
                     screenShot = `![alternative text](link here)`
            }

            outputArray.push(`${stepString} <br />${screenShot}`);
        };
        return outputArray;
    }

    // console.log("usage =", usage);
    // console.log("usage length =", usage.length);

    // console.log("improvements =", improvements);
    // console.log("improvements length =", improvements.length);
    
    // console.log("updates=", updates);
    const ifUpdates = (updates) => {
        if (updates == undefined){
            return "There are no Updates at this time."
        }else{
            let screenShot;
            let outputArray = [];
            for (let i = 0; i < updates.length; i++) {
                if (updates[i].screenshot == true){
                    screenShot = "![alternative text](link here)";
                }
                outputArray.push( `(Update: ${updates[i].date}) - ${updates[i].update} <br />${screenShot}`);
            };
            return outputArray;
        };
    }

    // console.log("collaborators =", collaborators);
    // console.log("collaborators length=", collaborators.length);

    const listCollab = (collaborators) => {
        let outputArray = [];
        for (let i = 0; i < collaborators.length; i++) {
            outputArray.push( `* ${collaborators[i].name} - ${collaborators[i].reason}`);
        }
        return outputArray;
    }

    // console.log("resources =",  resources);
    // console.log("resources length =",  resources.length);

    // console.log("contacts =", contacts);
    // console.log("contacts length=", contacts.length );
    
    const whereContact = (contacts) => {
        let outputArray = [];
        for (let i = 0; i < contacts.length; i++) {
            outputArray.push( `* Name: ${contacts[i].name}  <br />Email: ${contacts[i].email} <br />Github Profile: ${contacts[i].profile}`);
        }
        return outputArray;
    }

    // console.log("license =", license);
    let badgesObj = {
        "Apache 2.0 License": `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
        "Boost Software License 1.0": `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
        "BSD 3-Clause License": `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
        "BSD 2-Clause License": `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`,
        "CC0": `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`,
        "Attribution 4.0 International": `[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by/4.0/)`,
        "Attribution-ShareAlike 4.0 International": `[![License: CC BY-SA 4.0](https://img.shields.io/badge/License-CC%20BY--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-sa/4.0/)`,
        "Attribution-NonCommercial 4.0 International": `[![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC%20BY--NC%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)`,
        "Attribution-NoDerivates 4.0 International": `[![License: CC BY-ND 4.0](https://licensebuttons.net/l/by-nd/4.0/80x15.png)](https://creativecommons.org/licenses/by-nd/4.0/)`,
        "Attribution-NonCommmercial-ShareAlike 4.0 International": `[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-sa/4.0/)`, 
        "Attribution-NonCommercial-NoDerivatives 4.0 International": `[![License: CC BY-NC-ND 4.0](https://img.shields.io/badge/License-CC%20BY--NC--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc-nd/4.0/)`,
        "Eclipse Public License 1.0": `[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`,
        "GNU GPL v3": `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`,
        "GNU GPL v2": `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
        "GNU AGPL v3": `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`,
        "GNU LGPL v3": `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`,
        "GNU FDL v1.3": `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL%20v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`,
        "IBM Public License Version 1.0": `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
        "ISC License (ISC)": `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`,
        "The MIT License": `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
        "Mozilla Public License 2.0": `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`,
        "Attribution License (BY)": `[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)`, 
        "Open Database License (ODbL)": `[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)`,
        "Public Domain Dedication and License (PDDL)": `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)`,
        "The Perl License": `[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
        "The Artistic License 2.0": `[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic%202.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)`,
        "SIL Open Font License 1.1": `[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL%201.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)`,
        "The Unlicense": `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`,
        "The Do What the Fuck You Want to Public License": `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`,
        "The zlib/libpng License": `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`,
    }

    const whichBadge = (license) => {
        let outputArray = [];
        for (let i = 0; i < license.length; i++) {
            // console.log("license[i] = ", license[i]);
            let badge = badgesObj[license[i]];
            outputArray.push(badge);
        } 
        return outputArray;
    }


let readme = `

# ${title}

${whichBadge(license)} 
[![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org) 
[![GitHub issues](https://img.shields.io/github/issues/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/issues/) 
[![GitHub pull-requests](https://img.shields.io/github/issues-pr/Naereen/StrapDown.js.svg)](https://GitHub.com/Naereen/StrapDown.js/pull/)
[![GitHub version](https://badge.fury.io/gh/Naereen%2FStrapDown.js.svg)](https://github.com/Naereen/StrapDown.js)
[![Awesome Badges](https://img.shields.io/badge/badges-awesome-green.svg)](https://github.com/Naereen/badges)
[![NPM Version](https://img.shields.io/npm/v/npm.svg?style=flat)]()
[![GitHub last commit](https://img.shields.io/github/last-commit/google/skia.svg?style=flat)]()

## Description

${what}

${why}

${solution}

${learn}

${standout}


## Contents: 
1. [Installation](#Instalation) 
2. [Usage](#Usage)
3. [Improvements](#Improvements)
4. [Updates](#Updates)
5. [Credits](#Credits)
6. [License](#License)
7. [Contact](#Contact)

## Instalation

${instructionSteps(install)}


### Technologies 

The technologies I have used are:
${bulletList(technologies)}


## Usage

${instructionSteps(usage)}


## Improvements

${bulletList(improvements)}


## Updates 

${ifUpdates(updates)}

    
## Credits 

[![saythanks](https://img.shields.io/badge/say-thanks-ff69b4.svg)](https://saythanks.io/to/kennethreitz)
Thanks go to:
${listCollab(collaborators)}

Resources I have referenced:   
${bulletList(resources)}


## License 

${bulletList(license)}  

Where appropriate: 
Alot of the graphics included in my projects I have drawn myself and are copyright 2020. 
No useage without permission. 
If I have not originated the imagery I have gained the permission of the owner and acreditied 
where necessary. These are also not for re-purpose without permission of the owner.

You must make reference where the code originated. I would also love to see what changes and improvements you make.  
Design by Samantha Wakelam, please respect copyright 2020. 


## Contact

${whereContact(contacts)}

`;

return readme;
}

module.exports = {
    "generateReadme": generateReadme,
};