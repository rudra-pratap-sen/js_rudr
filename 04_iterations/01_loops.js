// ************ FOR LOOPS ****************

/* for (let index = 0; index < 10; index++) {
    const num = index;
    if (num===7) {
        console.log("Thala for a reason")
    }
    console.log("num");
} */

/*for ( let i = 1 ; i <= 10 ; i++) {
    console.log(`Table of ${i}`)
    for ( let j = 1 ; j <= 10 ; j++) {
        console.log(`${i} * ${j} = ${i*j}`)
    }
} */

/* let myArr = ["Flash","Batman","Superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    console.log("element");
    
} */

// **********BREAK & CONTINUE******************

/* for (let index = 1; index <= 20; index++) {
    if (index===5) {
        console.log("Detected 5")
        break // this break stop the loop at 5
    }
    console.log(`value of index ${index}`);
} */

for (let index = 1; index <= 20; index++) {
    if (index===5) {
        console.log("Detected 5")
        continue
    }
    console.log(`value of index ${index}`);
}