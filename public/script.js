const divForm = document.getElementById("form-div");
const name = localStorage.getItem("Name");
if(name){
  document.getElementById("user_home").innerHTML =
        "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";
}

function validate_password() {
  var passw = document.getElementById("passw").value;
  var confirmPassw = document.getElementById("confirmPassword").value;

  if (passw != confirmPassw) {
    document.getElementById("wrong_pass_alert").style.color = "red";
    document.getElementById("wrong_pass_alert").innerHTML =
      "Use correct password!";
    document.getElementById("formSubmitSignup").disabled = true;
    document.getElementById("formSubmitSignup").style.opacity = 0.4;
    document.getElementById("formSubmitSignup").style.cursor = "not-allowed";
  } else {
    document.getElementById("wrong_pass_alert").style.color = "green";
    document.getElementById("wrong_pass_alert").innerHTML = "Correct password!";
    document.getElementById("formSubmitSignup").disabled = false;
    document.getElementById("formSubmitSignup").style.opacity = 1;
    document.getElementById("formSubmitSignup").style.cursor = "pointer";
  }
}

function formAction() {
  const bodyDiv = document.getElementById("body-cover");
  bodyDiv.classList.remove("body-div");
  divForm.remove();
  document.getElementById("user_home").innerHTML =
    "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";
  document.getElementById("login_user").style.left = "93%";
  document.getElementById("login_user").style.borderRadius = "50%";
}

function formActionHome() {
  divForm.remove();
  document.getElementById("user_home").innerHTML =
    "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";

  document.getElementById("login_user").style.left = "93%";
  document.getElementById("login_user").style.borderRadius = "50%";
}

function clickSignIn() {
  divForm.innerHTML =
    "<center><h3 class='form-heading'>LOGIN</h3></center><form action=# onsubmit=formAction()><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <button id='formSubmitLogin'>SUBMIT</button> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUp()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>";
}

function clickSignUp() {
  divForm.innerHTML =
    "<center><h3 class='form-heading'>SIGN UP</h3></center> <form action='#' onsubmit='formAction()'> <label for='Fname'>First Name:<span class='sup'> *</span></label> <input type='text' name='fname' id='Fname' required placeholder='Your first name' /><br /> <label for='Lname'>Last Name:</label> <input type='text' name='lname' id='Lname' placeholder='Your last name' /><br /> <label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail'  /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <label for='confirmPassword'>Confirm Password:<span class='sup'> *</span></label> <input type='password' name='confpass' id='confirmPassword' required placeholder='password' onkeyup='validate_password()' /><br /> <button id='formSubmitSignup'>SUBMIT</button> <hr> <p class='sign-up'>Already a have an account? <a onclick = 'clickSignIn()' id = 'link-login' href='#'>SIGN IN</a> </p> </form>";
}

function clickUserLogin() {
  divForm.style.display = "block";
}

const homePageForm = document.getElementsByClassName("home")[0];
function clickClose() {
  homePageForm.style.display = "none";
}

function clickSignUpHome() {
  homePageForm.innerHTML = `<i onclick="clickClose()" class="fa fa-times-circle-o"></i>
    <center><h3 class="form-heading">SIGN UP</h3></center>
    <!-- <hr> -->
    <form action="#" onsubmit="formActionHome()">
      <label for="Fname">First Name:<span class="sup"> *</span></label>
      <input
        type="text"
        name="fname"
        id="Fname"
        required
        placeholder="Your first name"
      /><br />
      <label for="Lname">Last Name:</label>
      <input
        type="text"
        name="lname"
        id="Lname"
        placeholder="Your last name"
      /><br />
      <label for="email">E-mail Id:<span class="sup"> *</span></label>
      <input
        type="email"
        name="email"
        id="email"
        required
        placeholder="E-mail"
      /><br />
      <label for="passw">Password:<span class="sup"> *</span></label>
      <input
        type="password"
        name="password"
        id="passw"
        required
        placeholder="password"
      /><br />
      <label for="confirmPassword"
        >Confirm Password:<span class="sup"> *</span></label
      >
      <input
        type="password"
        name="confpass"
        id="confirmPassword"
        required
        placeholder="password"
        onkeyup="validate_password()"
      /><br />
      <span id="wrong_pass_alert"></span>
      <button id="formSubmitSignup">SUBMIT</button>
      <hr />
      <p class="sign-up">
        Already a have an account?
        <a onclick="clickSignInHome()" id="link-login" href="#">SIGN IN</a>
      </p>
    </form>`;
}

function clickSignInHome() {
  homePageForm.innerHTML = `<i onclick = 'clickClose()' class='fa fa-times-circle-o'></i> <center><h3 class='form-heading'>LOGIN</h3></center><form action='#' onsubmit='formActionHome()'><label for='email'>E-mail Id:<span class='sup'> *</span></label> <input type='email' name='email' id='email' required placeholder='E-mail' /><br /> <label for='passw'>Password:<span class='sup'> *</span></label> <input type='password' name='password' id='passw' required placeholder='password' /><br /> <button id='formSubmitLogin'>SUBMIT</button> <hr> <p class='sign-up'>Do not have an account? <a onclick = 'clickSignUpHome()' id = 'link-register' href='#'>SIGN UP</a> </p> </form>`;

  // LOGIN
  document
    .getElementById("formSubmitLogin")
    .addEventListener("click", async function (event) {
      event.preventDefault();

      console.log("Login");

      // Form data collection
      var email = document.getElementById("email").value;
      var password = document.getElementById("passw").value;

      let data = {
        email: email,
        password: password,
      };
      //   console.log(data);
      let response = await postData("/login", data);
      if (response.message === "Login successful") {
        alert(response.message);
        document.getElementsByClassName("div-form")[0].style.display = "none";
        localStorage.setItem("Email", email);
        localStorage.setItem("Name", response.fname + " " + response.lname);

        document.getElementById("user_home").innerHTML =
          "<a onclick = 'toggleDropdown()' id = 'login_user' class = 'login' href='#'><i style='font-size:20px;' class='fa fa-user-circle-o'></i></a>";

        clickSignInHome();
      } else {
        alert("Login failed. Please try again.", response.message);
      }
    });
}

function toggleDropdown() {
  var boxProfile = document.getElementById("profile-dropdown");
  console.log(boxProfile);
  if (window.getComputedStyle(boxProfile).display == "block") {
    boxProfile.style.display = "none";
  } else if (window.getComputedStyle(boxProfile).display == "none") {
    boxProfile.style.display = "block";
  }
}

function toggleProfile() {
  var profileContainer =
    document.getElementsByClassName("profile-container")[0];
  if (document.querySelector("body").contains(profileContainer)) {
    profileContainer.style.display = "none";
    profileContainer.remove();
  } else {
    document.querySelector("body").innerHTML += `<div class="profile-container">
    <div class="user-profile">
      <center><i style='font-size:80px; color:#06908c;' class='fa fa-user-circle-o'></i></center>
      <p><strong>Name: </strong><span class="name">${localStorage.getItem(
        "Name"
      )}</span></p>
      <p><strong>Email: </strong><span class="name">${localStorage.getItem(
        "Email"
      )}</span></p>
      <p><strong>Contact: </strong><span class="name">9999999999</span></p>
      <p><strong>Country: </strong><span class="name">India</span></p>
    </div>
  </div>`;
  }
}

function showMore() {
  const container = (document.getElementById(
    "container"
  ).innerHTML = `<div class="container-details" id="more-details">
  <div class="heading">
    <!--<h2>Heading of Event</h2>-->
   </div>
  <ul>
    <li>
      <h3>Time Period:</h3>
      <span>2600 BCE - 1900 BCE</span>
    </li>
    <li>
      <h3>Location:</h3>
      <span
        >Present-day Pakistan (Indus Valley region)
      </span>
    </li>
    <li>
      <h3>Information:</h3>
      <span
        >The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world's earliest urban civilizations. It flourished in the basins of the Indus River and the Ghaggar-Hakra River in present-day Pakistan and northwest India. The civilization is known for its advanced urban planning, sophisticated drainage systems, and impressive craftsmanship.</span
      >
    </li>
  </ul>
</div>`);
}

let dataset = [
  {
    sno: 1,
    event: "Indus Valley Civilization",
    time: "2600 BCE - 1900 BCE",
    location: "Present-day Pakistan (Indus Valley region)",
    description:
      "The Indus Valley Civilization, also known as the Harappan Civilization, was one of the world's earliest urban civilizations. It flourished in the basins of the Indus River and the Ghaggar-Hakra River in present-day Pakistan and northwest India. The civilization is known for its advanced urban planning, sophisticated drainage systems, and impressive craftsmanship.",
  },
  {
    sno: 2,
    event: "Ajanta and Ellora Caves",
    time: "2nd century BCE - 10th century CE",
    location: "Maharashtra",
    description:
      "These cave complexes contain Buddhist, Hindu, and Jain temples and monasteries, famous for their exquisite rock-cut architecture and ancient Indian art.",
  },
  {
    sno: 3,
    event: "Vedic Period",
    time: "1500 BCE - 500 BCE",
    location: "Indo-Gangetic Plain, primarily in present-day northern India",
    description:
      "The Vedic Period is named after the Vedas, the oldest sacred texts of Hinduism. It is characterized by the Indo-Aryan migration into the Indian subcontinent and the development of the early Vedic literature, which includes the Rigveda, Samaveda, Yajurveda, and Atharvaveda. This period laid the foundation of Hinduism and saw the emergence of early Hindu rituals, philosophies, and social structures.",
  },
];

// login

async function postData(url = "", data = {}) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

// SIGNUP on clicking submit button
document
  .getElementById("formSubmitSignup")
  .addEventListener("click", async function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Validate the passwords match
    var pass = document.getElementById("passw").value;
    var confPass = document.getElementById("confirmPassword").value;
    if (pass !== confPass) {
      alert("Passwords do not match!");
      return false;
    }

    // Form data collection
    var fname = document.getElementById("Fname").value;
    var lname = document.getElementById("Lname").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("passw").value;

    let data = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
    };

    let response = await postData("/signup", data);
    if (response.message === "Signup successful") {
      alert(response.message);
      clickSignInHome();
    } else {
      alert("Sign up failed. Please try again.", response.message);
    }
  });

// LOGOUT

document.getElementById("logOut").addEventListener("click", function () {
  // let response = await postData("/logout");
  console.log("Logout");
  localStorage.removeItem("Email");
  localStorage.removeItem("Name");
  document.getElementById(
    "user_home"
  ).innerHTML = `<a onclick="clickUserLogin()" id="user_login" class="login" href="#"
  >Login/ Sign Up</a
>`;
  document.getElementById("profile-dropdown").style.display = "none";
});
