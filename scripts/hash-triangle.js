var hashTriangle = function(size){
  for(var string = "#" ; string.length <= size ; string += "#")
    console.log(string);
}

hashTriangle(Number(prompt("Enter size")));
