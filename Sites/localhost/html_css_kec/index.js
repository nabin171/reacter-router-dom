function displayName() {
  var Name = document.getElementById("name").value;
  var Phone = document.getElementById("phone").value;
  var Email = document.getElementById("email").value;
  var Address = document.getElementById("address").value;
  var Skills = document.getElementById("skills").value;
  var Country = document.getElementById("country").value;
  var radio1 = document.getElementById("male");
  var radio2 = document.getElementById("female");

  var valid = false;

  if (
    Name == "" ||
    Phone == "" ||
    Email == "" ||
    Address == "" ||
    Skills == "" ||
    Country == ""
  ) {
    alert("All field are Mandatory..!!");
    return false;
  } else if (Name.length < 3 || Name.length > 50) {
    alert(
      "Name should be between 3-50 characters..!! Please enter valid name..!!"
    );
    return false;
  } else if (Phone.length < 10 || Phone.length > 10) {
    alert(
      "Phone number should be of 10 digits..!! Please enter valid number..!!"
    );
    return false;
  } else if (isNaN(Phone)) {
    alert("Only numbers are allowed..!! Please enter valid number..!!");
    return false;
  } else if (!Email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
    alert("Please enter a valid email..!!");
    return false;
  }

  // For radio

  if (radio1.checked == true) {
    true;
  } else if (radio2.checked == true) {
    true;
  } else {
    alert("Please select Gender..!!");
    return false;
  }

  // For checkbox
  if (document.getElementById("dancing").checked) {
    valid = true;
  } else if (document.getElementById("eating").checked) {
    valid = true;
  } else if (document.getElementById("cooking").checked) {
    valid = true;
  }

  if (valid) {
    alert("Your Form has been Submitted..!!");
  } else {
    alert("Please select Hobbies..!!");
    return false;
  }
}
