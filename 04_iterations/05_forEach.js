const heroes = ["Superman" , "Batman" , "IronMan" , "OmniMan"]

/* heroes.forEach( function (i) {
    console.log(i);
}) */

// In form of arrow function

/* heroes.forEach((i) => {
    console.log(i);
}) */

// Alternate 

/* function printMe(i) {
    console.log(i)
}

heroes.forEach(printMe) */

// For Each Loop for Array consisting Objects

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )