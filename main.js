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
  }
  function filter(array, f) {
    var acc = [];
    each(array, function (element, index) {
      if (f(element, index)) {
        acc.push(element);
      }
    });
    return acc;
  }

  //  cards object
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
  function displayCards(filteredCards) {
    cardscontain.empty();
    each(filteredCards, function (element) {
      cardscontain.append(`
        <div class="cards">
          <div class="container">
            <div class="wrapper">
              <img src="${element.image}" alt="${element.name}">
              <h1>${element.name}</h1>
              <h3>${element.price}</h3>
              <button class="add-to-cart">Add to Cart</button>
              <button class="remove-from-cart">Remove from Cart</button>
            </div>
          </div>
        </div>
      `);
    });
  }

  displayCards(cards);

  // filter buttons using our filter
  $("#menbtn").on("click", function () {
    var menCards = filter(cards, function (card) {
      return card.for === "men";
    });
    displayCards(menCards);
  });

  $("#wombtn").on("click", function () {
    var womenCards = filter(cards, function (card) {
      return card.for === "women";
    });
    displayCards(womenCards);
  });

  $("#kidbtn").on("click", function () {
    var kidsCards = filter(cards, function (card) {
      return card.for === "kids";
    });
    displayCards(kidsCards);
  });
  $("#allbtn").on("click", function () {
    displayCards(cards);
  });
  // Search bar  using our filter
  $("#search-bar").on("input", function () {
    var searchTerm = $(this).val().toLowerCase();
    var filteredCards = filter(cards, function (card) {
      return card.name.toLowerCase().includes(searchTerm);
    });
    displayCards(filteredCards);
  });
  // add and remove
  var cartCount = 0;
  var cartSpan = $(".icon-cart span");
  function updateCartCount(count) {
    cartSpan.text(count);
  }
  $(".add-to-cart").on("click", function () {
    cartCount++;
    updateCartCount(cartCount);
  });

  $(".remove-from-cart").on("click", function () {
    if (cartCount > 0) {
      cartCount--;
      updateCartCount(cartCount);
    }
  });
});
