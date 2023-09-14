const button = document.getElementById('button')

function toggleList() {
    button.classList.toggle('active')
    var list = document.getElementById("item-list");
    if (list.style.display === "none") {
      list.style.display = "block";
    } else {
      list.style.display = "none";
    }
  }