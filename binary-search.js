function binarySearch(array, searchTerm) {
	/*
	 ** Check the middle element, if it's higher than the searchTerm
	 ** then check the element in between the start and the middle, otherwise
	 ** check the element between the middle and the end

	 ** repeat the above process for the subset of the array
	 ** keep repeating with smaller and smaller subsets until you find the searchTerm
	 */
	
	let temp = array
	let mid = Math.floor(temp.length / 2)
	
	for (let i = 0; i < array.length; i++) {
		if(temp[mid] == searchTerm){
			console.log(mid)
			return 
		} else if(temp[mid] > searchTerm){
			temp = temp.slice(0 , mid)
			mid = Math.floor(temp.length / 2)
		}else if(temp[mid] < searchTerm){
			temp = temp.slice(mid)
			mid = Math.floor(temp.length / 2)
		}

	}



}

binarySearch([1,2,3,4,5,6,7] , 3)

module.exports = binarySearch;

