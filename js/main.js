var users = [
  {
    username: "amir",
    password: "123"
  },
  {
    username: "pouya",
    password: "123"
  },
  {
    username: "ali",
    password: "123"
  },
  {
    username: "parsa",
    password: "123"
  },
  {
    username: "alex",
    password: "123"
  },
];

var myuser = document.getElementById ("myin1");
var mypass = document.getElementById ("myin2");
var signed = document.getElementById ("youre");

myuser.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		submit();
	};
}, false);
mypass.addEventListener('keypress', function enterKey(e) {
	if(e.keyCode == 13) {
		submit();
	};
}, false);

function submit() {
  if (myuser.value == "" || mypass.value == "") {
    alert ("Type Username and Password")
};
    for (var i = 0; i < users.length; i = i + 1)
    if (myuser.value === users[i].username && mypass.value === users[i].password) {
      signed.textContent = "You Are Signed In";
      return;
    } else if (myuser.value !== "" && mypass.value !== "") {
      signed.textContent = "Your username Or Password is not matched."
    }
}
