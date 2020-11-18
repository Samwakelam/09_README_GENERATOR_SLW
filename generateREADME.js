const generateReadme = (answers) => {
    const { title, descriptionWhat, descriptionWhy, descriptionSolution, descriptionLearn,
        descriptionStandOut, technologies, instalation, usage, improvements, updates, credits, resources, license } = answers;
return `

# ${title}

## Description
${descriptionWhat}
${descriptionWhy}
${descriptionSolution}
${descriptionLearn}
${descriptionStandOut}


## Contents: 
1. [Installation](#Instalation) 
2. [Usage](#Usage)
3. [Improvements](#Improvements)
4. [Updates](#Updates)
5. [Credits](#Credits)
6. [License](#License)

## Instalation
${instalation}

### Technologies 
${technologies}

## Usage
${usage}

## Improvements
${improvements}

## Updates 
${updates}
    
## Credits 
${credits}


Resources I have referenced:   
${resources} 

## License 
${license}

I have drawn the graphics myself and they are copyright 2020. No useage without permission. 
You must make reference where the code originated. I would also love to see what changes and improvements you make.  
Design by Samantha Wakelam, please respect copyright 2020. 

`;
}

module.exports = {
    "generateReadme": generateReadme,
};