$(function(){
  var image = [
    { title: "A great wave by the coast",
      src: "images/hiroshige/Hiroshige_A_great_wave_by_the_coast.jpg",
      color: "#7392aa",
      darkerColor: "#516778",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Evening view of a temple in the hills",
      src: "images/hiroshige/Hiroshige_Evening_view_of_a_temple_in_the_hills.jpg",
      color: "#748076",
      darkerColor: "#454d47",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Full moon over a mountain landscape",
      src: "images/hiroshige/Hiroshige_Full_moon_over_a_mountain_landscape.jpg",
      color: "#c5b9a3",
      darkerColor: "#918878",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Man on horseback crossing a bridge",
      src: "images/hiroshige/Hiroshige_Man_on_horseback_crossing_a_bridge.jpg",
      color: "#748565",
      darkerColor: "#47523e",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "People under maple trees by a stream",
      src: "images/hiroshige/Hiroshige_People_under_maple_trees_by_a_stream.jpg",
      color: "#7f2918",
      darkerColor: "#4d190e",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Shrines in snowy mountains",
      src: "images/hiroshige/Hiroshige_Shrines_in_snowy_mountains.jpg",
      color: "#304b80",
      darkerColor: "#1d2d4d",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Travellers surprised by sudden rain",
      src: "images/hiroshige/Hiroshige_Travellers_surprised_by_sudden_rain.jpg",
      color: "#e9c24d",
      darkerColor: "#b5973c",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Evening snow at Kanbara",
      src: "images/hiroshige/Hiroshige_Evening_snow_at_Kanbara.jpg",
      color: "#ee7d1d",
      darkerColor: "#ba6217",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    }
  ];

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
        $(".gallery").css("background", image[i].color);
        $("#closeModal circle").css("fill", image[i].color);
        $("#closeModal line").css("stroke", image[i].darkerColor);
      }
    }
    $( "#modal" ).dialog( "open" );
  });
});
