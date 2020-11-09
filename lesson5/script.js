//isVowel method takes a character and returns true if it is a vowel, false otherwise.
function isVowel(char){
    if (char.trim().toString() !== "") {
        if (char.toLowerCase().includes("a")
            || char.toLowerCase().includes("e")
            || char.toLowerCase().includes("i")
            || char.toLowerCase().includes("o")
            || char.toLowerCase().includes("u")) {
                return true;
            }
        }
    return false;
 }

//wordLongerThan returns true if word's length is greated than an integer lengthi
function wordLongerThan(word, lengthi) {
    return (word.length > parseInt(lengthi));
}

//getBigger method takes two arguments and returns the bigger value between them.
function getBigger(big, num) {
    if (parseFloat(num) > parseFloat(big))
        return parseFloat(num);
    else
        return parseFloat(big);
}

//getSum method takes two arguments and returns the summation of them.
function getSum(total, num) {
    return parseFloat(total) + parseFloat(num);
}

//getproduct method takes two arguments and returns the multiplication of them.
function getproduct(total, num) {
    return parseFloat(total) * parseFloat(num);
}

//maxOf method takes two arguments and returns the maximum value between them.
function maxOf(num1, num2) {
    return Math.max(parseFloat(num1), parseFloat(num2));
}

//The max2 takes two numbers as arguments and returns the largest of them.
$("#max2").click(function (evt) {

    const num1 = $("#max21").val();
    const num2 = $("#max22").val();
    const result = document.getElementById("max2Result");
    if (num1.trim().toString() !== "" && num2.trim().toString() !== "") {
        const max = maxOf(num1, num2);
        result.innerText = "The max number is : " + max;
    } else {
        result.innerText = "You have not entered two numbers!";
    }
});

// Test for the previous function
$("#max2Test").click(function (evt) {
    const result = document.getElementById("max2TestResult");
    const num1 = 4567;
    const num2 = 10000;
    const expectedResult = 10000;
    const actualResult = maxOf(num1, num2);
    resultString = "Asserting result: '" + expectedResult + "', for input numbers: '" + num1 + "', '" + num2 + "', '" + "' : \n" + (expectedResult === actualResult);
    const num12 = 9999;
    const num22 = 6789;
    const expectedResult2 = 6789;
    const actualResult2 = maxOf(num12, num22);
    resultString += "\nAsserting result: '" + expectedResult2 + "', for input numbers: '" + num12 + "', '" + num22 + "' : \n" + (expectedResult2 === actualResult2);
    result.innerText = resultString
})

//The max3 method takes three numbers as arguments and returns the largest of them.

$("#max3").click(function (evt) {

    const num1 = $("#max31").val();
    const num2 = $("#max32").val();
    const num3 = $("#max33").val();
    const result = document.getElementById("max3Result");
    if (num1.trim().toString() !== "" && num2.trim().toString() !== "" && num3.trim().toString() !== "") {
        const max = maxOf(num1, maxOf(num3, num2));
        result.innerText = "The max number is : " + max;
    } else {
        result.innerText = "You have not entered three numbers!";
    }
});

// Test for the previous function
$("#max3Test").click(function (evt) {
    const result = document.getElementById("max3TestResult");
    const num1 = 1234;
    const num2 = 20;
    const num3 = 3457;
    const expectedResult = 3457;
    const actualResult = maxOf(num1, maxOf(num3, num2));
    resultString = "Asserting result: '" + expectedResult + "', for input numbers: '" + num1 + "', '" + num2 + "', '" + num3 + "' : \n" + (expectedResult === actualResult);
    const num12 = 6578;
    const num22 = 4256;
    const num32 = 7;
    const expectedResult2 = 4256;
    const actualResult2 = maxOf(num12, maxOf(num32, num22));
    resultString += "\nAsserting result: '" + expectedResult2 + "', for input numbers: '" + num12 + "', '" + num22 + "', '" + num32 + "' : \n" + (expectedResult2 === actualResult2);
    result.innerText = resultString
})

//The isVowel method takes a character and returns true if it is a vowel, false otherwise.
$("#isVowel").click(function (evt) {
    const char = $("#checkForVowel").val().toString();
    const result = document.getElementById("isVowelResult");
    if (char.trim().toString() !== "") {
        if (isVowel(char)) {
            result.innerText = "The '" + char + "' is a vowel.";
        } else {
            result.innerText = "The '" + char + "' is NOT a vowel.";
        }
    } else {
        result.innerText = "You have not entered a char!";
    }
});

// Test for the previous function
$("#isVowelTest").click(function (evt) {
    const result = document.getElementById("isVowelTestResult");
    const enteredGoodChar = 'A'
    const expectedResult = true;
    const actualResult = isVowel(enteredGoodChar)
    resultString = "Asserting result: '" + expectedResult + "', for input array: '" + enteredGoodChar + "' : \n" + (expectedResult === actualResult);
    const enteredBadChar = 'f'
    const expectedResult2 = false;
    const actualResult2 = isVowel(enteredBadChar)
    resultString += "\nAsserting result: '" + expectedResult2 + "', for input array: '" + enteredBadChar + "' : \n" + (expectedResult2 === actualResult2);
    result.innerText = resultString
})

// The sumArray method sums all the numbers in an array of numbers.
$("#sumArray").click(function (evt) {
    const enteredArray = $("#sumArrayInput").val().trim().split(" ");
    const result = document.getElementById("sumArrayResult");
    if (enteredArray.length >= 2) {

        result.innerText = "The sum is : " + enteredArray.reduce(getSum, 0);

    } else {
        if (enteredArray.length == 1 && enteredArray[0] != "") {
            result.innerText = "The sum is : " + enteredArray[0].trim();
        } else {
            result.innerText = "You have not entered integers separated by spaces!";
        }

    }
});

// Test for the previous function
$("#sumArrayTest").click(function (evt) {
    const enteredArray = [1,2,3,4]
    const result = document.getElementById("sumArrayTestResult");
    const expectedResult = 10;
    const actualResult = enteredArray.reduce(getSum, 0);
    result.innerText = "Asserting result: '" + expectedResult + "', for input array: '" + enteredArray + "' : \n" + (expectedResult === actualResult);
})

//The productArray multiplies all the numbers in an array of numbers.
$("#productArray").click(function (evt) {
    const enteredArray = $("#productArrayInput").val().trim().split(" ");
    const result = document.getElementById("productArrayResult");
    if (enteredArray.length >= 2) {

        result.innerText = "The product is : " + enteredArray.reduce(getproduct, 1);

    } else {
        if (enteredArray.length == 1 && enteredArray[0] != "") {
            result.innerText = "The product is : " + enteredArray[0].trim();
        } else {
            result.innerText = "You have not entered integers separated by spaces!";
        }

    }
});

// Test for the previous function
$("#productArrayTest").click(function (evt) {
    const enteredArray = [1,2,3,4]
    const result = document.getElementById("productArrayTestResult");
    const expectedResult = 24;
    const actualResult = enteredArray.reduce(getproduct, 1);
    result.innerText = "Asserting result: '" + expectedResult + "', for input array: '" + enteredArray + "' : \n" + (expectedResult === actualResult);
})

//The reverse method computes the reversal of a string.    
$("#reverse").click(function (evt) {
    const enteredString = $("#reverseInput").val().trim();
    const result = document.getElementById("reverseResult");
    if (enteredString.length >= 2) {
        result.innerText = "The reverse of " + enteredString + " is : " + enteredString.split("").reverse().join("");

    } else {
        if (enteredString.length == 1) {
            result.innerText = "The reverse is : " + enteredString.trim();
        } else {
            result.innerText = "You have not entered any string!";
        }

    }
});

// Test for the previous function
$("#reverseTest").click(function (evt) {
    const enteredString = "jag testar"
    const result = document.getElementById("reverseTestResult");
    const expectedResult = "ratset gaj";
    const actualResult = enteredString.split("").reverse().join("");
    result.innerText = "Asserting result: '" + expectedResult + "', for input array: '" + enteredString + "' : \n" + (expectedResult === actualResult);
})

//The findLongest method takes an array of words and returns the length of the longest one.
$("#findLongest").click(function (evt) {
    const enteredString = $("#findLongestInput").val().trim().split(" ");
    const result = document.getElementById("findLongestResult");
    if (enteredString.length >= 1 && enteredString != "") {
        const results = enteredString.map(x => x.length);
        result.innerText = "The longest word is  " + results.reduce(getBigger, results[0]);

    } else {
        result.innerText = "You have not entered any set of words separated by spaces!";
    }
});

// Test for the previous function
$("#findLongestTest").click(function (evt) {
    const enteredArray = ["the", "singer", "did", "not", "want", "to", "sing", "in", "public"];
    const result = document.getElementById("findLongestTestResult");
    const expectedResult = 6;
    const results = enteredArray.map(x => x.length);
    const actualResult = results.reduce(getBigger, results[0]);
    result.innerText = "Asserting result: '" + expectedResult + "', for input array: '" + enteredArray + "' : \n" + (expectedResult === actualResult);
})

//The filterLong method takes an array of words and an integer i and returns the array of words that are longer than i.
$("#filterLong").click(function (evt) {
    const enteredArray = $("#filterLongInput").val().trim().split(" ");
    const enteredi = $("#ifilterLongInput").val().trim();

    const result = document.getElementById("filterLongResult");
    if (enteredArray.length >= 1 && enteredi.trim() !== "") {
        result.innerText = "The words are : " + enteredArray.filter(x => wordLongerThan(x, enteredi));

    } else {
        result.innerText = "You have not entered any set of words separated by spaces!";
    }
});

// Test for the previous function
$("#filterLongTest").click(function (evt) {
    const enteredArray = ["the", "singer", "did", "not", "want", "to", "sing", "in", "public"];
    const enteredi = 3
    const result = document.getElementById("filterLongTestResult");
    const expectedResult = ["singer", "want", "sing", "public"];
    const actualResult = enteredArray.filter(x => wordLongerThan(x, enteredi))
    result.innerText = "Asserting result: '" + expectedResult + "', for input array: '" + enteredArray + "' and input integer: " + enteredi + " : \n" + expectedResult.every((val, index) => val === actualResult[index]);
})

//product each element by 10 using map. 
$("#map10Array").click(function (evt) {
    const enteredArray = $("#map10ArrayInput").val().trim().split(" ");
    const result = document.getElementById("map10ArrayResult");
    if (enteredArray.length >= 2) {

        result.innerText = "The product *10 is : " + enteredArray.map(e => e * 10);

    } else {
        if (enteredArray.length == 1 && enteredArray[0] != "") {
            result.innerText = "The product * 10 is : " + enteredArray[0].trim() * 10;
        } else {
            result.innerText = "You have not entered a set of integers separated by spaces.";
        }

    }
})

// Test for the previous function
$("#map10ArrayTest").click(function (evt) {
    const enteredArray = [1, 3, 5, 3, 3];
    const result = document.getElementById("map10ArrayTestResult");
    const expectedResult = [10, 30, 50, 30, 30];
    const actualResult = enteredArray.map(e => e * 10);
    result.innerText = "Asserting result: " + expectedResult + ", for input: " + enteredArray + " : \n" + expectedResult.every((val, index) => val === actualResult[index]);
})

//Returns array with all elements equal to 3. 
$("#filter3").click(function (evt) {
    const enteredArray = $("#filter3Input").val().trim().split(" ");
    const result = document.getElementById("filter3Result");
    if (enteredArray.length >= 2) {

        result.innerText = "The filtered elements are : " + enteredArray.filter(e => e == 3);

    } else {
        if (enteredArray.length == 1 && enteredArray[0] != "") {
            result.innerText = "The filtered elements are : " + enteredArray.filter(e => e == 3);
        } else {
            result.innerText = "You have not entered a set of integers separated by spaces.";
        }

    }
})

// Test for the previous function
$("#filter3Test").click(function (evt) {
    const enteredArray = [1, 3, 5, 3, 3];
    const result = document.getElementById("filter3TestResult");
    const expectedResult = [3, 3, 3];
    const actualResult = enteredArray.filter(e => e == 3);
    result.innerText = "Asserting result: " + expectedResult + ", for input: " + enteredArray + " : \n" + expectedResult.every((val, index) => val === actualResult[index]);
})

//Returns the product of all elements. 
$("#reduceProduct").click(function (evt) {
    const enteredArray = $("#reduceProductInput").val().trim().split(" ");
    const result = document.getElementById("reduceProductResult");
    if (enteredArray.length >= 2) {

        result.innerText = "The filtered elements are : " + enteredArray.reduce((a, b) => a * b, 1);

    } else {
        if (enteredArray.length == 1 && enteredArray[0] != "") {
            result.innerText = "The filtered elements are : " + enteredArray.reduce((a, b) => a * b, 1);
        } else {
            result.innerText = "You have not entered a set of integers separated by spaces.";
        }

    }
})

// Test for the previous function
$("#reduceProductTest").click(function (evt) {
    const enteredArray = [1, 3, 5, 3, 3];
    const result = document.getElementById("reduceProductTestResult");
    const expectedResult = 135;
    const actualResult = enteredArray.reduce((a, b) => a * b, 1);
    result.innerText = "Asserting result: " + expectedResult + ", for input: " + enteredArray + " : \n" + (expectedResult === actualResult);
})

$("#max21").change(function (evt) {
    const result = document.getElementById("max2Result");
    result.innerText = "";
});

$("#max22").change(function (evt) {
    const result = document.getElementById("max2Result");
    result.innerText = "";
});

$("#max31").change(function (evt) {
    const result = document.getElementById("max3Result");
    result.innerText = "";
});

$("#max32").change(function (evt) {
    const result = document.getElementById("max3Result");
    result.innerText = "";
});

$("#max33").change(function (evt) {
    const result = document.getElementById("max3Result");
    result.innerText = "";
});

$("#checkForVowel").change(function (evt) {
    const result = document.getElementById("isVowelResult");
    result.innerText = "";
});

$("#sumArrayInput").change(function (evt) {
    const result = document.getElementById("sumArrayResult");
    result.innerText = "";
});

$("#productArrayInput").change(function (evt) {
    const result = document.getElementById("productArrayResult");
    result.innerText = "";
});

$("#reverseInput").change(function (evt) {
    const result = document.getElementById("reverseResult");
    result.innerText = "";
});

$("#findLongestInput").change(function (evt) {
    const result = document.getElementById("findLongestResult");
    result.innerText = "";
});

$("#filterLongInput").change(function (evt) {
    const result = document.getElementById("filterLongResult");
    result.innerText = "";
});




