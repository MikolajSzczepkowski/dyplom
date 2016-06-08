$(function(){
  var image = [
    { title: "A great wave by the coast",
      src: "images/hiroshige/Hiroshige_A_great_wave_by_the_coast.jpg",
      color: "#e3d4bd",
      darkerColor: "#AB8E6C",
      typoColor: "#2d322c",
      text: "Hiroshige wykonywał większość swoich prac w technice drzeworytu. Początkowo tworzył portrety, przedstawiające głównie aktorów i kobiety, ale w późniejszych latach stał się sławny dzięki pejzażom i obrazom natury. Wykonał tysiące kompozycji przedstawiających kwiaty i ptaki, ale także Edo, miasta i drogi. Jego twórczość stała się inspiracją dla europejskich malarzy impresjonistycznych."
    },
    { title: "Evening view of a temple in the hills",
      src: "images/hiroshige/Hiroshige_Evening_view_of_a_temple_in_the_hills.jpg",
      color: "#839987",
      darkerColor: "#516655",
      typoColor: "#DBE5DD",
      text: "Origami to sztuka składania papieru, pochodząca z Chin, rozwinięta w Japonii i dlatego uważa się ją za tradycyjną sztukę japońską. W XX w. ostatecznie ustalono reguły origami: punktem wyjścia ma być kwadratowa kartka papieru, której nie wolno ciąć, kleić i dodatkowo ozdabiać i z której poprzez zginanie tworzone są przestrzenne figury."
    },
    { title: "Full moon over a mountain landscape",
      src: "images/hiroshige/Hiroshige_Full_moon_over_a_mountain_landscape.jpg",
      color: "#c5b9a3",
      darkerColor: "#918878",
      typoColor: "#2d322c",
      text: "Ukiyo-e 'obrazy przepływającego świata' – rodzaj malarstwa i drzeworytu japońskiego.  Ukiyo-e były plastycznym środkiem wyrazu powstającym w obrębie dzielnic rozrywki największych miast japońskich okresu Edo. Technika wykonywania drzeworytu monochromatycznego pojawiła się w Japonii przypuszczalnie w VIII wieku za pośrednictwem warsztatów koreańskich i stosowana była przede wszystkim do druku tekstów i wizerunków buddyjskich. Z czasem zaczęto ją stosować także do druku literatury edukacyjnej, popularnej i pornograficznej."
    },
    { title: "Man on horseback crossing a bridge",
      src: "images/hiroshige/Hiroshige_Man_on_horseback_crossing_a_bridge.jpg",
      color: "#af9e72",
      darkerColor: "#7d7151",
      typoColor: "#FBEABD",
      text: "Kaligrafia (jap. Shodō- 'droga pisma') obejmuje kilka stylów pisma w języku japońskim, wywodzi się z kaligrafii chińskiej. Od kaligrafii pisanej w jakimkolwiek kraju europejskim różni się podejściem do samej czynności oraz efektu końcowego. Nie jest wcale najważniejszą informacja, którą niesie dany znak, tylko jego perfekcyjnego wykonanie, do którego należy dążyć konsekwentnie, w pełnym skupieniu."
    },
    { title: "People under maple trees by a stream",
      src: "images/hiroshige/Hiroshige_People_under_maple_trees_by_a_stream.jpg",
      color: "#b64f48",
      darkerColor: "#a03c37",
      typoColor: "#e6d6bf",
      text: "Japońska ceramika pamięta czasy neolitu. Od VI wieku wykonywano ją według metod chińskich i koreańskich. Niemniej jednak swą uznaną dziś wysoką jakość osiągnęła w XIV wieku, kiedy po okresie izolacji Japonia odnowiła kontakty z Chinami, a ośrodkiem jej produkcji stało się miasto Seto, położone nieopodal Nagoi. Natomiast wyroby z takich miejsc, jak: Karatsu czy Hagi, a także ceramika raku rozwinęły się pod wpływem ceremonii parzenia herbaty. Początki stosowania kintsukuroi, techniki naprawy potłuczonej ceramiki za pomocą żywicy przypominającej złoto lub srebro, sięgają XVI wieku."
    },
    { title: "Shrines in snowy mountains",
      src: "images/hiroshige/Hiroshige_Shrines_in_snowy_mountains.jpg",
      color: "#436fac",
      darkerColor: "#004078",
      typoColor: "#d8d8d8",
      text: "Powstałe w VII wieku malowidła naścienne głównego pawilonu świątyni Hōryū-ji nieopodal Nary, reprezentujące chiński styl i buddyjską tematykę, należą do najstarszych w Japonii. Później w okresie Heian rozpowszechniło się malarstwo krajobrazowe, portretowe oraz przedstawiające życie dworskie. Ozdabiały one parawany, przesuwne drzwi jak również zwoje kakemono."
    },
    { title: "Travellers surprised by sudden rain",
      src: "images/hiroshige/Hiroshige_Travellers_surprised_by_sudden_rain.jpg",
      color: "#e7bc54",
      darkerColor: "#ae881e",
      typoColor: "#2d322c",
      text: "Już od tysiąca lat uroczystościom cesarskim, shintō i buddyjskim towarzyszy wielka orkiestra gagaku, wykorzystująca instrumenty takie jak: biwa (rodzaj dużej lutni), koto (13-strunowa cytra), flety poprzeczne i perkusja, w skład której wchodzą bębny tsuzumi oraz wielki taiko. Stworzone przez buddyjskich mnichów, stylizowane i zawodzące shōmyō stało się najpopularniejszym stylem śpiewu w dawnej Japonii, mającym wpływ m.in. na teatr nō i kabuki."
    },
    { title: "Evening snow at Kanbara",
      src: "images/hiroshige/Hiroshige_Evening_snow_at_Kanbara.jpg",
      color: "#BEBEBE",
      darkerColor: "#898989",
      typoColor: "#2d322c",
      text: "Kabuki to jeden z rodzajów tradycyjnego teatru japońskiego, wywodzący się z XVII wieku. Teatr kabuki jest znany z bogatej oprawy przedstawień, silnej ekspresji i wyszukanej charakteryzacji aktorów. Wśród ważnych elementów teatru kabuki znajduje się mie– aktor utrzymuje wystylizowaną pozę, aby mocno określić charakter lub emocje swojego bohatera. Keshō, lub charakteryzacja, jest cechą stylu łatwo rozpoznawalną nawet przez osoby niezorientowane w tej formie sztuki."
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
  controller = new ScrollMagic.Controller({globalSceneOptions: {duration: 500}}),
  currentNumber = 0;

  $(document).scroll(function(){
    if ($("#origami li").hasClass("active")) {
      $("#openAside").addClass("hide");
      $("#goTopButton").removeClass("hide");
    }
    else {
      $("#openAside").removeClass("hide");
      $("#goTopButton").addClass("hide");
    }
  });
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

  $.each( svg, function(index, value){
    var path = this.path,
      displayNumber = "<span class='number'>" + (index + 1) + ". " + "</span>",
      craneName = path.slice(11, path.length - 4),
      liId = "#" + craneName,
      image = "<img src=" + path + " alt=" + craneName + " />",
      instruction = "<p>" + displayNumber + this.instruction + "</p>";

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
