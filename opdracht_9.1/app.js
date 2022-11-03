let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
let title = document.getElementById("result")

btn.onclick = function() {
  modal.style.display = "block";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function submitChecker() {
  let value = document.getElementById("lname")
  if (value.value < 18) {
    console.log(value)
      title.style.display = "block";
      title.style.display = "flex";
      title.style.justifyContent = "center";
      title.innerHTML = "Helaas je bent te jong";
      title.style.color = "red";
  } else {
      window.open('https://www.techniekcollegerotterdam.nl/', '_blank');
  }
}