/**
 * Created by Михаил on 07.02.2018.
 */
function sum() {
    var c = Array.prototype.slice.call(arguments,0);
    let result = c.reduce((sum,current)=>sum+current,0);
    return result;
}
//sum(1,2,3,4);
console.log(sum(1,2,4,10,12));




//const square= (x) => x*x;
console.log([1,2,3,4,5].map((x)=>x*x));
