/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(s) {
	const str = s.toLowerCase().replace(/[^a-z0-9]/g,'');
	let i = 0;
	let j = str.length - 1;
	while(i < j){
		if(str[i] != str[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}

const isAlpha = (str) => {
	const regex = /^[a-z0-9]+$/;
	return regex.test(str);
}

console.log(isPalindrome('cooc'));
console.log(isPalindrome('coocs'));
console.log(isPalindrome('rAcEcAr'));
console.log(isPalindrome(''));
console.log(isPalindrome('A man, a plan, a canal. Panama'));
console.log(isPalindrome('Was it a car or a cat I saw'));
console.log(isPalindrome('Able wa,s I ere I saw Elba!'));

module.exports = isPalindrome;
