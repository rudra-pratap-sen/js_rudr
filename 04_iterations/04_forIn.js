// ************* FOR IN LOOP ********************

const prog = {
    "py": "python",
    "js": "javascript",
    "rb": "rust",
    "cpp": "c plus plus"
}

for (const i in prog) {
    console.log(`filename for ${prog[i]} is ${i}`);
}

const arr = ["js","py","cpp","rb"]

for (const num in arr) {
    console.log(num);
}

/* here the for loop returns the index of the values bcs in case of array the index position is the key . To solve this problem object is
created where key can be anything . */

// don't run on map