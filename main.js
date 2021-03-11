var hamMenu = $(".fa-bars");
var menu = $(".hamburger-menu");
var close = $(".close");

// hamMenu.click(
//   function (){
//     menu.addClass("active");
//   }
// );
//
// close.click(
//   function (){
//     menu.removeClass("active");
//   }
// );

function openCloseMenu (open, close, item) {
  open.click(
    function (){
      item.addClass("active");
    }
  );

  close.click(
    function (){
      item.removeClass("active");
    }
  );
}

openCloseMenu(hamMenu, close, menu);
