function SearchBar() {
    var search = document.getElementById("search-main-menu");
    if (search.style.display === "block") {
      search.style.display = "none";
    } else {
      search.style.display = "block";
    }
  }