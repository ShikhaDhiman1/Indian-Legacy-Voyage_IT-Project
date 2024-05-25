console.log(document.getElementsByClassName("more"));

const name = localStorage.getItem("Name");
const email = localStorage.getItem("Email");
console.log(name);
console.log(email);

if(name){
    const bodyDiv = document.getElementById("body-cover");
  bodyDiv.classList.remove("body-div");
//   document.getElementById("form-div").remove();
    document.getElementsByClassName("more")[0].style.display = "none";
    document.getElementById("user_home").innerHTML =
          "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";
}