// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
var caseA = Array.isArray(a);
var caseB = Array.isArray(b);
console.log(caseA);
console.log(caseB);


// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
for(var i = 0; i < a.length; i++){
	a[i] = a[i] * 2;
}
console.log(a);

// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
var case1 = "";
var case2 = "";
var case3 = "";
for(var i = 0; i < colors.length; i++){
	case1 = case1 + colors[i];
    case2 = case2 + colors[i];
    case3 = case3 + colors[i];
    if(i != colors.length-1){
    	case1 = case1 + " ";
        case2 = case2 + "+";
        case3 = case3 + ",";
    }
}
console.log(case1);
console.log(case2);
console.log(case3);


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
a.sort((x, y) => y - x);
console.log(a);

// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
function mode(array){
    return array.sort((x,y) =>
          array.filter(v => v===x).length
        - array.filter(v => v===y).length
    ).pop();
}
console.log(mode(a));