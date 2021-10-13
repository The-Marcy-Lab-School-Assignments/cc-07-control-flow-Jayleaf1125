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
    if (int === 91 || int === 92 || int === 93 || int === 94 || int === 95 || int === 96 || int === 97 || int === 98 || int === 99 || int === 100) {
        return "A";
    }
    else if (int === 81 || int === 82 || int === 83 || int === 84 || int === 85 || int === 86 || int === 87 || int === 88 || int === 89 || int === 90) {
        return "B";
    }
    else if (int === 71 || int === 72 || int === 73 || int === 74 || int === 75 || int === 76 || int === 77 || int === 78 || int === 79 || int === 80) {
        return "C";
    }
    else if (int === 65 || int === 66 || int === 67 || int === 68 || int === 69 || int === 70) {
        return "D";
    }
    else if (int < 65) {
        return "F";
    }
    else {
        return null;
    }
}

// Call.
console.log(sumOfFourAndSix());
oddAndEvenInFifteen();
console.log(assignGrade(55));
