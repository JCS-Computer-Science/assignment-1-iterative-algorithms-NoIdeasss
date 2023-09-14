function insertionSort(array) {
	/*
	 ** For each element in the array, swap it with the element
	 ** before it over and over as long as the element before it
	 ** is bigger
	 */
	let temp

	for (let i = 1; i < array.length; i++) {
		if(array[i] < array[i-1]){
			temp = array[i]
			array[i] = array[i-1]
			array[i-1] = temp
			i = i-2
		}
	}
	
	return array;
}

module.exports = insertionSort;
