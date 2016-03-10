rev = function(str){
    var str_array = str.split("");
    left_pointer = 0;
    right_pointer = str_array.length - 1
    
    while (left_pointer < right_pointer) {
    	temp = str_array[left_pointer];
    	str_array[left_pointer] = str_array[right_pointer];
    	str_array[right_pointer] = temp;
    
    	left_pointer += 1;
    	right_pointer -= 1;
	}
    return str_array.join("");
}
console.log(rev('abcdef'));