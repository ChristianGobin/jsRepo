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