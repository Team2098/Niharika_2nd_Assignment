
/*document.getElementById("submit").addEventListener("click",function(event){
  event.preventDefault();
  alert("Please fill all details.");

  checkData();
});

var username = document.getElementById("fname");


function checkData(){
  var usernameValue = username.value.trim();
  
  if (username == ""|| username==null) {
    setError(username,"First Name must be filled out");
  }else{
    setSuccess(username);
  }
}

function setError(u, msg){
  var parentBox = u.parentElement;
  parentBox.className="name error";
  var span = parentBox.querySelector("span");
  span.innerText=msg;
}

function setSuccess(u){
  var parentBox = u.parentElement;
  parentBox.className="name error";
}
