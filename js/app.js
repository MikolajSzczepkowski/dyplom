$(function(){
  var image = [
    { title: "A great wave by the coast",
      src: "images/hiroshige/Hiroshige_A_great_wave_by_the_coast.jpg",
      color: "#e3d4bd",
      darkerColor: "#AB8E6C",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Evening view of a temple in the hills",
      src: "images/hiroshige/Hiroshige_Evening_view_of_a_temple_in_the_hills.jpg",
      color: "#839987",
      darkerColor: "#4C594F",
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
      color: "#af9e72",
      darkerColor: "#7d7151",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "People under maple trees by a stream",
      src: "images/hiroshige/Hiroshige_People_under_maple_trees_by_a_stream.jpg",
      color: "#9F4533",
      darkerColor: "#5F291F",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Shrines in snowy mountains",
      src: "images/hiroshige/Hiroshige_Shrines_in_snowy_mountains.jpg",
      color: "#848283",
      darkerColor: "#525051",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Travellers surprised by sudden rain",
      src: "images/hiroshige/Hiroshige_Travellers_surprised_by_sudden_rain.jpg",
      color: "#E9BC35",
      darkerColor: "#A98926",
      text: " It is Hokusai's most famous work, and one of the best recognized works of Japanese art in the world. It depicts an enormous wave threatening boats off the coast of the prefecture of Kanagawa. While sometimes assumed to be a tsunami, the wave is, as the picture's title suggests, more likely to be a large rogue wave.[2] As in all the prints in the series, it depicts the area around Mount Fuji under particular conditions, and the mountain itself appears in the background."
    },
    { title: "Evening snow at Kanbara",
      src: "images/hiroshige/Hiroshige_Evening_snow_at_Kanbara.jpg",
      color: "#BEBEBE",
      darkerColor: "#3E3E3E",
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
