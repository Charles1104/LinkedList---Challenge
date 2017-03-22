var saveJump = linkedListGenerator();
var save = document.querySelector("#save");
var jump = document.querySelector("#dump");
var data = document.querySelector("#data");
var display = document.querySelector("#display");
var increment = 0;

console.log(save);

save.addEventListener("click", function(){
  if (saveJump.getHead() === null){
    saveJump.add(data.value);
  }
  else{
    saveJump.insert(data.value,0);
  }

  data.value = "";
  increment++;
});

jump.addEventListener("click", function(){

  for (var i = 0; i < increment; i++){
    display.innerHTML += "<li>" + saveJump.get(i).value + "</li>";
  }

  display.innerHTML = "<ol type=\"1\">" + display.innerHTML + "</ol>";

});
