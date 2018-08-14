$(document).ready(function() {
  $(window).scroll(function() {
    landingElements();

    const wHeight = $(window).height();
    const wScroll = $(window).scrollTop();

    // scroll down hide/show

    if (wScroll >= wHeight / 2) {
      $("#hero").addClass("scroll");
    }
    if (wScroll <= wHeight / 2) {
      $("#hero").removeClass("scroll");
    }

    // active link

    $(".scr").each(function() {
      if ($(this.hash).offset().top - headerH * 4 <= wScroll) {
        $(this).addClass("scr-active");
        $(this)
          .parent()
          .siblings()
          .children()
          .removeClass("scr-active");
      }
    });

    function landingElements() {
      if (
        $("#portfolio").offset().top - $(window).innerHeight() / 1.5 <
        $(window).scrollTop()
      ) {
        $("#portfolio-header").animate(
          {
            opacity: 1
          },
          700
        );
      }

      if (
        $("#portfolio-items").offset().top - $(window).innerHeight() / 1.3 <
        $(window).scrollTop()
      ) {
        $(".portfolio-item").each(function(i) {
          setTimeout(function() {
            $(".portfolio-item")
              .eq(i)
              .addClass("showing");
          }, 500 * (i + 1));
        });
      }

      if (
        $("#github").offset().top - $(window).innerHeight() / 1.2 <
        $(window).scrollTop()
      ) {
        $("#github").animate(
          {
            opacity: 1
          },
          700
        );
      }

      if (
        $("#skills").offset().top - $(window).innerHeight() / 1.5 <
        $(window).scrollTop()
      ) {
        $("#skills-header").animate(
          {
            opacity: 1
          },
          700
        );
      }

      if (
        $("#skills-list").offset().top - $(window).innerHeight() / 1.3 <
        $(window).scrollTop()
      ) {
        $(".img").each(function(i) {
          setTimeout(function() {
            $(".img")
              .eq(i)
              .addClass("showing");
          }, 100 * (i + 1));
        });
      }

      if (
        $("#about").offset().top - $(window).innerHeight() / 1.5 <
        $(window).scrollTop()
      ) {
        $("#about-header").animate(
          {
            opacity: 1
          },
          700
        );
        $("#charts, #aboutList").addClass("slideup");
      }
    }
  });

  // smooth scrolling

  $(".scr").click(function(e) {
    e.preventDefault();
    $("html, body").animate(
      {
        scrollTop: $(this.hash).offset().top - headerH
      },
      1000
    );
  });

  // section height & hero padding

  const headerH = $("header").outerHeight();

  $(window)
    .resize(function() {
      const piW = $(".portfolio-item").innerWidth();
      $(".portfolio-item").height(piW);

      const imgW = $("#img").innerWidth();
      $("#img").height(imgW);

      $("#hero").css("height", "calc(100vh - " + headerH + "px)");
      $("#hero").css("padding-top", headerH + "px");
    })
    .resize();
});

// remove loader

$(window).on("load", function() {
  $("#loading").remove();
});
