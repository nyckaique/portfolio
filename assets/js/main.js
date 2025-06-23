$(document).ready(function () {
  //carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplaySpeed: 4000,
    autoplayHoverPause: true,
    slideTransition: "linear",
    items: 3,
    responsive: {
      0: { items: 4 },
      600: { items: 8 },
      1000: { items: 12 },
    },
  });

  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));

  //fancybox
  Fancybox.bind('[data-fancybox="plani"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="rvm"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="afbrasilia"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="terraz"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="dra-karline-campos"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="draraujo"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="gabriel"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="colmeias"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="produtive"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="daax"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="nutrify"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="echogestor"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="kpopgeneration"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="cadastroclientes"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="bulario"]', {
    infinite: true,
    arrows: true,
  });
  Fancybox.bind('[data-fancybox="moviewebapp"]', {
    infinite: true,
    arrows: true,
  });

  //LENIS

  // Initialize a new Lenis instance for smooth scrolling
  const lenis = new Lenis();

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  gsap.ticker.add((time) => {
    lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  });

  // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  gsap.ticker.lagSmoothing(0);

  //GSAP
  document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);
  });

  // animando todos os pretitles
  $(".pretitle").each(function () {
    var $this = $(this);
    var text = $this.text();
    var letters = text.split("");
    var html = letters
      .map(function (letter) {
        return "<span>" + letter + "</span>";
      })
      .join("");
    $this.html(html);

    var $pretitleParts = $this.find("span");

    gsap.fromTo(
      $pretitleParts,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        stagger: 0.08,
        duration: 0.3,
        ease: "power1.out",
        scrollTrigger: {
          trigger: $this,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
          markers: false,
        },
      }
    );
  });

  // animando todos os title-large
  const titlesLarge = document.querySelectorAll(".title-large");
  titlesLarge.forEach((title) => {
    gsap.fromTo(
      title,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: title,
          start: "top 90%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // animando a seção sobre
  const imgSobre = document.querySelectorAll("#sobre .img-div");
  imgSobre.forEach((img) => {
    gsap.fromTo(
      img,
      {
        opacity: 0,
        x: "-100%",
      },
      {
        opacity: 1,
        x: 0,
        duration: 1.5,
        scrollTrigger: {
          trigger: img,
          start: "top 85%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      }
    );
  });
  const paragrafosSobre = document.querySelectorAll("#sobre p.desc");
  paragrafosSobre.forEach((paragrafo) => {
    gsap.fromTo(
      paragrafo,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: paragrafo,
          start: "top 90%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // animando titulos hero
  const tituloHero = document.querySelector("#hero .title-extraLarge");
  gsap.fromTo(
    tituloHero,
    {
      opacity: 0,
      x: "-100%",
    },
    {
      opacity: 1,
      x: 0,
      duration: 1.5,
      scrollTrigger: {
        trigger: tituloHero,
        start: "top 85%",
        markers: false,
        toggleActions: "play none none reverse",
      },
    }
  );

  // animando hero-item
  const heroItems = document.querySelectorAll("#hero .hero-item");
  gsap.fromTo(
    heroItems,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      stagger: 0.2,
      duration: 1,
      scrollTrigger: {
        trigger: "#hero .container-hero-items",
        start: "top 90%",
        markers: false,
        toggleActions: "play none none reverse",
      },
    }
  );

  // animando cases item
  const casesItems = document.querySelectorAll(".cases-item");
  casesItems.forEach((item) => {
    gsap.fromTo(
      item,
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          markers: false,
          toggleActions: "play none none reverse",
        },
      }
    );
  });

  // animando contato
  const contactsTitle = document.querySelector("#contato p.contacts-title");
  gsap.fromTo(
    contactsTitle,
    {
      opacity: 0,
      y: 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      scrollTrigger: {
        trigger: contactsTitle,
        start: "top 100%",
        markers: false,
        toggleActions: "play none none reverse",
      },
    }
  );
});
