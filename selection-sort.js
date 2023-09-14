function selectionSort(array) {
	/*
	 ** Search through the whole array for the smallest element
	 ** then swap it with the first element.
	 ** Next, search through the whole array (except the first element)
	 ** for the smallest, then swap it with the second element.
	 ** Continue like this until you have only one element left.
	 */

	
	for (let i = 0; i < array.length; i++) {
		small = Math.min(...array.slice(i))
		sIndex = array.indexOf(small)
		
		temp = array[i]
		array[i] = small
		array[sIndex] = temp

	}
	
	return array;
}


selectionSort([1,3,6,4,0,0,1])
module.exports = selectionSort;
