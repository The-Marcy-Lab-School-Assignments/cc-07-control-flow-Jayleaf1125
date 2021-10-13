//1
function sumOfFourAndSix() {
    let sum = 0;
    for (let i = 0; i <= 1000; i++) {
        if (i % 4 === 0 && i % 6 === 0) {
            sum += i
        }
    }
    return sum;
}


//2
function oddAndEvenInFifteen() {
    for (let i = 0; i <= 15; i++) {
        if (i % 2 === 0) {
            console.log(`${i} is even`)
        }
        else if (i % 2 !== 0) {
            console.log(`${i} is odd`)
        }
        else {
            console.log(null);
        }
    }
}

//3
function assignGrade(int) {
    if (100 === int || int >= 91) {
        return "A";
    } else if (90 === int || int >= 81) {
        return "B";
    } else if (80 === int || int >= 71) {
        return "C"
    } else if (70 === int || int >= 65) {
        return "D";
    } else if (int < 65) {
        return "F";
    }
    else {
        return null;
    }
}

// function assignGradeRefactor(int) {
//     if (100 === int || int >= 90) {
//         return "A";
//     } else if (90 === int || int >= 81) {
//         return "B";
//     } else if (80 === int || int >= 71) {
//         return "C"
//     } else if (70 === int || int >= 65) {
//         return "D";
//     } else if (int < 65) {
//         return "F";
//     }
//     else {
//         return null;
//     }
// }

// Call.
// console.log(sumOfFourAndSix());
// oddAndEvenInFifteen();
console.log(assignGrade(70));

