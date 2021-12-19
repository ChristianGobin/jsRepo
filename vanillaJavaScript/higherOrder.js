isInBetween = (val1, val2) => {
	return (
		(z) => {
			if(z > val1 && z < val2){
				return true;
			} else {
				return false;
			}
		}
	)
}

adultCheck = isInBetween(0, 21);
console.log(adultCheck(19));


multiplyByParam = (x) => {
	return(
		(num) => {
			return num * x;
		}
	)
}

timesThree = multiplyByParam(3);
timesNine = multiplyByParam(9);
console.log(timesThree(3));
console.log(timesNine(3));