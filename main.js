/* drop-dowon button from w3school */
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
// add to cart + shpping cart
$(document).ready(function () {
  function each(coll, f) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        f(coll[i], i);
      }
    } else {
      for (var key in coll) {
        f(coll[key], key);
      }
    }
  } //  cards object
  var cards = [
    {
      id: 1,
      name: "toycat",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/044/861/280/small_2x/kids-shoes-isolated-png.png",
      for: "kids",
      price: "55DT",
    },
    {
      id: 2,
      name: "nike pinky",
      image: "https://pngimg.com/d/running_shoes_PNG5785.png",
      for: "women",
      price: "220DT",
    },
    {
      id: 3,
      name: "blue ice",
      image:
        "https://static.vecteezy.com/system/resources/previews/043/344/686/non_2x/lightweight-footwear-for-men-on-transparent-background-png.png",
      for: "men",
      price: "350DT",
    },
  ];
  var cardscontain = $("#cards");
  //  lopping throw our array of object using the each
  each(cards, function (element, i) {
    cardscontain.append(`
            <div class="cards">
              <div class="container">
                <div class="wrapper">
                  <img src="${element.image}" alt="${element.name}">
                  <h1>${element.name}</h1>
              <h3>${element.price}</h3>
                </div>
                
              </div>
            </div>
          `);
  });
});
