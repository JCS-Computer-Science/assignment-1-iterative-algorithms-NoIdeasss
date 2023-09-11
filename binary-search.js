function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	let temp = array
	let t = Math.floor(array.length / 2)

	
	if(temp[t] > searchTerm){
		temp = array.slice(0,t)
		console.log(temp)
	}else if(temp[t] < searchTerm){
		temp = array.slice(t + 1)
		console.log(temp);
	}
	
}

binarySearch([1,2,3,4,5], 4)

module.exports = binarySearch;

