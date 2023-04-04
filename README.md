# M10-SVG-Logo-Maker
Using node.js, this code can be locally run in command line. This code will prompt a user to answer a few questions and generate a new logo. This is a part of the Module 10 Challenge for the Ohio State University Coding Bootcamp.

 Video Demo: https://drive.google.com/file/d/1ChMzCJSPc_DhuWcltu7Pyqw7wLNIqLpl/view 

## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  - [Tests](#tests)
  - [Questions](#questions)

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

    ## License
    ISC https://opensource.org/licenses/ISC

    ## Tests
    You can use the tests in the test folder. Please disregard the extra tests folder, as these are a rough draft of tests I plan to work on in future.

    ## Questions
    If you have any questions about my Github Project, please send an email to chelsea.m.lueavno@gmail.com .

   