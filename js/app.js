$(function(){
  $("#openGallery").on("click", function(){
    if ($("#gallery").hasClass("active")) {
      $("#gallery").removeClass("active");
      $("#gallery").hide("slide", {
        direction: "right",
        easing: "easeInQuint"
      }, 400);
    }
    else {
      $("#gallery").addClass("active");
      $("#gallery").show("slide", {
        direction: "right",
        easing: "easeOutQuint"
      }, 600);
    }
  });
});
