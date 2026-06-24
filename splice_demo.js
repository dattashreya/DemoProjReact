const arr = [1,2,3];
console.log("Array:",arr);
t=5
arrOp(arr,t);
function arrOp(arr,t) {
  const i = arr.indexOf(t);
  if(i === -1)
  {
    arr.push(t);
    console.log(arr);
  } else {
    arr.splice(i,1);
    console.log(arr);
  }
return arr;
}
