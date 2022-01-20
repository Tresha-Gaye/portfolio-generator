const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2);
// console.log(profileDataArgs);
// const name = profileDataArgs[0];
// const github = profileDataArgs[1]; OR (same array destructured below):
const [name, github] = profileDataArgs;

fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});
// console.log(name, github);
// console.log(generatePage(name, github));

// Notice the lack of parentheses around the `profileDataArr` parameter?
// const printProfileData = profileDataArr => {
//     // This...
//     for (let i = 0; i < profileDataArr.length; i++) {
//         console.log(profileDataArr[i]);
//     }

//     console.log('================');

//     // Is the same as this...
//     profileDataArr.forEach((profileItem) => console.log(profileItem));

// };

// printProfileData(profileDataArgs);