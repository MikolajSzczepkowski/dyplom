$(function(){
  var image = [
    { title: "A great wave by the coast",
      src: "images/hiroshige/Hiroshige_A_great_wave_by_the_coast.jpg",
      color: "#e3d4bd",
      darkerColor: "#AB8E6C",
      typoColor: "#2d322c",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Evening view of a temple in the hills",
      src: "images/hiroshige/Hiroshige_Evening_view_of_a_temple_in_the_hills.jpg",
      color: "#839987",
      darkerColor: "#516655",
      typoColor: "#DBE5DD",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Full moon over a mountain landscape",
      src: "images/hiroshige/Hiroshige_Full_moon_over_a_mountain_landscape.jpg",
      color: "#c5b9a3",
      darkerColor: "#918878",
      typoColor: "#2d322c",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Man on horseback crossing a bridge",
      src: "images/hiroshige/Hiroshige_Man_on_horseback_crossing_a_bridge.jpg",
      color: "#af9e72",
      darkerColor: "#7d7151",
      typoColor: "#FBEABD",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "People under maple trees by a stream",
      src: "images/hiroshige/Hiroshige_People_under_maple_trees_by_a_stream.jpg",
      color: "#b64f48",
      darkerColor: "#a03c37",
      typoColor: "#e6d6bf",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Shrines in snowy mountains",
      src: "images/hiroshige/Hiroshige_Shrines_in_snowy_mountains.jpg",
      color: "#436fac",
      darkerColor: "#004078",
      typoColor: "#d8d8d8",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Travellers surprised by sudden rain",
      src: "images/hiroshige/Hiroshige_Travellers_surprised_by_sudden_rain.jpg",
      color: "#e7bc54",
      darkerColor: "#ae881e",
      typoColor: "#2d322c",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Evening snow at Kanbara",
      src: "images/hiroshige/Hiroshige_Evening_snow_at_Kanbara.jpg",
      color: "#BEBEBE",
      darkerColor: "#898989",
      typoColor: "#2d322c",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    }
  ],
  svg = [
    { path: "images/svg/crane-01.svg",
      instruction: "Weź kwadratową kartkę i ułóż ją przed sobą."
    },
    { path: "images/svg/crane-02.svg",
      instruction: "Złóż kartkę na pół w pionie."
    },
    { path: "images/svg/crane-03.svg",
      instruction: "Wyprostuj kartkę."
    },
    { path: "images/svg/crane-04.svg",
      instruction: "Złóż kartkę na poł w poziomie."
    },
    { path: "images/svg/crane-05.svg",
      instruction: "Wyprostuj kartkę i odwróć."
    },
    { path: "images/svg/crane-06.svg",
      instruction: "Złóż kartkę na pół po przekątnej."
    },
    { path: "images/svg/crane-07.svg",
      instruction: "Wyprostuj kartkę."
    },
    { path: "images/svg/crane-08.svg",
      instruction: "Złóż kartkę na pół po przeciwnej przekątnej."
    },
    { path: "images/svg/crane-09.svg",
      instruction: "Wyprostuj kartkę."
    },
    { path: "images/svg/crane-10.svg",
      instruction: "Obróć kartkę o 45 stopni."
    },
    { path: "images/svg/crane-11.svg",
      instruction: "Chwyć dwa rogi po bokach i przyciągnij je do siebie. Górny róg powinien przykrywać całość."
    },
    { path: "images/svg/crane-12.svg",
      instruction: "Zegnij jeden róg kwadratu aby jego krawędź pokryła się z przekątną."
    },
    { path: "images/svg/crane-13.svg",
      instruction: "Powtórz z drugiej strony."
    },
    { path: "images/svg/crane-14.svg",
      instruction: "Wyprostuj zgięcia."
    },
    { path: "images/svg/crane-15.svg",
      instruction: "Chwyć za dolny róg i unieś, aby się otworzył."
    },
    { path: "images/svg/crane-16.svg",
      instruction: "Zegnij kartkę do środka wzdłuż wcześniejszych zgięć."
    },
    { path: "images/svg/crane-17.svg",
      instruction: "Zegnij kartkę do środka wzdłuż wcześniejszych zgięć po drugiej stronie."
    },
    { path: "images/svg/crane-18.svg",
      instruction: "Popraw zgięcia spłaszczając kartkę."
    },
    { path: "images/svg/crane-19.svg",
      instruction: "Podnieś i wyprostuj powstałą zakładkę."
    },
    { path: "images/svg/crane-20.svg",
      instruction: "Zegnij zakładkę aby jej krawędź pokrywała się z przekątną."
    },
    { path: "images/svg/crane-21.svg",
      instruction: "Zegnij zakładkę aby jej krawędź pokrywała się z przekątną z drugiej strony."
    },
    { path: "images/svg/crane-22.svg",
      instruction: "Odwróć kartkę na drugą stronę i wykonaj te same kroki."
    },
    { path: "images/svg/crane-23.svg",
      instruction: "Zegnij jeden róg kwadratu aby jego krawędź pokryła się z przekątną."
    },
    { path: "images/svg/crane-24.svg",
      instruction: "Powtórz z drugiej strony."
    },
    { path: "images/svg/crane-25.svg",
      instruction: "Wyprostuj zgięcia."
    },
    { path: "images/svg/crane-26.svg",
      instruction: "Chwyć za dolny róg i unieś, aby się otworzył."
    },
    { path: "images/svg/crane-27.svg",
      instruction: "Zegnij kartkę do środka wzdłuż wcześniejszych zgięć."
    },
    { path: "images/svg/crane-28.svg",
      instruction: "Zegnij kartkę do środka wzdłuż wcześniejszych zgięć po drugiej stronie."
    },
    { path: "images/svg/crane-29.svg",
      instruction: "Popraw zgięcia spłaszczając kartkę."
    },
    { path: "images/svg/crane-30.svg",
      instruction: "Podnieś i wyprostuj powstałą zakładkę."
    },
    { path: "images/svg/crane-31.svg",
      instruction: "Zegnij zakładkę aby jej krawędź pokrywała się z przekątną."
    },
    { path: "images/svg/crane-32.svg",
      instruction: "Zegnij zakładkę aby jej krawędź pokrywała się z przekątną z drugiej strony."
    },
    { path: "images/svg/crane-33.svg",
      instruction: "Chwyć za prawą krawędź i zgnij ją do lewej."
    },
    { path: "images/svg/crane-34.svg",
      instruction: "Zegnij dolną część tak, aby jej wierzchołek pokrywał się z górnym."
    },
    { path: "images/svg/crane-35.svg",
      instruction: "Zegnij górną wierzchnią część, aby powstała głowa żurawia."
    },
    { path: "images/svg/crane-36.svg",
      instruction: "Chwyć za lewą krawędź i zegnij całoś na prawą stronę. Wymodeluj pod odpowiednim kątem szyję i głowę żurawia."
    },
    { path: "images/svg/crane-37.svg",
      instruction: "Zegnij do środka lewą zakładkę, aby powstał ogon żurawia."
    },
    { path: "images/svg/crane-38.svg",
      instruction: "Wymodeluj ogon żurawia pod odpowiednim kątem."
    },
    { path: "images/svg/crane-39.svg",
      instruction: "Zegnij w dół wierzchnią część tak, aby powstało skrzydło żurawia."
    },
    { path: "images/svg/crane-40.svg",
      instruction: "Powtórz z drugiej strony"
    },
    { path: "images/svg/crane-41.svg",
      instruction: "Fantastycznie! Udało ci się złożyć żurawia."
    },
    { path: "images/svg/crane-41.svg",
      instruction: "Fantastycznie! Udało ci się złożyć żurawia."
    }
  ],
  controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}});

  $("#openAside").on("click", function(){
    if ($("#aside").hasClass("active")) {
      $("#aside").removeClass("active");
      $("#aside").hide("slide", {
        direction: "right",
        easing: "easeInQuint"
      }, 400);
    }
    else {
      $("#aside").addClass("active");
      $("#aside").show("slide", {
        direction: "right",
        easing: "easeOutQuint"
      }, 600);
    }
  });
  $( "#modal" ).dialog({
    autoOpen: false,
    modal: true,
    width: "65%",
    resizable: false,
    draggable: false,
    dialogClass: "no-title gallery",
    show: { effect: "fade",
      duration: 200
    },
    hide: { effect: "fade",
      duration: 200
    },
    open: function(){
      $(".ui-widget-overlay").bind("click",function(){
        $("#modal").dialog("close");
      });
    }
  });
  $("#modal").on("click", "#closeModal", function(){
    $(this).closest("#modal").dialog("close");
  });
  $("#aside a").on("click", function(e){
    e.preventDefault();
    var id = $(this).find("img").attr("title");
    for (var i = 0; i < image.length; i++) {
      if (image[i].title == id) {
        $("#modalImgHolder img").attr("src", image[i].src);
        $("#modalTextHolder h3").text(image[i].title);
        $("#modalTextHolder p").text(image[i].text);
        $("#modalTextHolder").css("color", image[i].typoColor);
        $(".gallery").css("background", image[i].color);
        $("#closeModal circle").css("fill", image[i].color);
        $("#closeModal line").css("stroke", image[i].darkerColor);
      }
    }
    $( "#modal" ).dialog( "open" );
  });

  $.each( svg, function(){
    var path = this.path,
      craneName = path.slice(11, path.length - 4),
      liId = "#" + craneName,
      image = "<img src=" + path + " alt=" + craneName + " />",
      instruction = "<p>" + this.instruction + "</p>";

    $("#origami ul").append("<li id=" + craneName + "><div>" + image + instruction + "</div></li>");

    new ScrollMagic.Scene({triggerElement: liId})
              .setClassToggle( liId , "active")
              .addTo(controller);
  });

  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});
