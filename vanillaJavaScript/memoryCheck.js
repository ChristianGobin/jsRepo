// Construct a class, object, higher order function, variable

higherOrder = (x) => {
	return (z) => {
		if(x >= 10){
			return true;
		} else {
			return false;
		}
	}
}

