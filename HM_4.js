function isPalindrome(str) {
    const cleanedString = str.replace(/[^A-Za-z]/g, '').toLowerCase();
    
    for (let leftIndex = 0; leftIndex < cleanedString.length / 2; leftIndex++) {
        if (cleanedString[leftIndex] !== cleanedString[cleanedString.length - 1 - leftIndex]) {
            return false;
        }
    }
    
    return true;
}

console.log(isPalindrome("tenet"));  
console.log(isPalindrome("tenet!"));

//  2
function longestWord(str) {
    const wordsArray = str.split(' ');
    let longestWord = "";

    for (const word of wordsArray) { 
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    return longestWord;
}

console.log(longestWord("Maybe, It's Too Late Or, Maybe, Early"));

//  3
function sortAlphabetically(str) {
    return str.split('').sort().join('');
}

console.log(sortAlphabetically("alphabetical")); 

//  4
function firstUniqueCharacter(str) {
    const charCount = {};
    
    for (const character of str) {
        charCount[character] = (charCount[character] || 0) + 1;
    }   
    
    for (let index = 0; index < str.length; index++) {
        if (charCount[str[index]] === 1) {
            return index;
        }
    }   
    
    return -1;
}

console.log(firstUniqueCharacter('фывфавыапрс'));

//  5
function countVowels(str) {
    str = str.toLowerCase();
    let vowelCount = 0;
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    for (const char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        }
    }
    return vowelCount;
}

console.log(countVowels("Maybe, It's Too Late Or, Maybe, Early"));