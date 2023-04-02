# M10-SVG-Logo-Maker
Using node.js, this code can be locally run in command line. This code will prompt a user to answer a few questions and generate a new logo. This is a part of the Module 10 Challenge for the Ohio State University Coding Bootcamp.

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)

    ## Installation
    Install node.js and inquirer
  
    ## Usage
    Download the Github code and run "node index.js" to answer questions

    ## Credits
    I had a tutoring session on 4/1 with Kyle. He helped me discover I was missing a new instance call to the svg file and helped me clean up the render return code within circle, square, and triangle.js files. 

    Ryan Spath, classmate, helped me in learning the flow of how the cli.js file should be calling the other classes. He helped me write what parameters to pass and troubleshoot errors, including on referencing parameters/variables and guided me to write the generateShape function.

    Nathan Moon shared code on how to validate hexadecimals using regular expression logic:
    "const hexadecimal = /^[0-9A-Fa-f]+$/g
    if((hexadecimal.test(splicedAnswer) == false)"

    ## Tests

