gsap.registerEffect({
  name: "fade",
  defaults: { duration: 2 },
  effect: (targets, config) => {
    return gsap.to(targets, { duration: config.duration, opacity: 0 });
  },
});

document.querySelectorAll(".box").forEach(function (box) {
  box.addEventListener("mouseenter", function () {
    gsap.effects.fade(this);
  });
});

let tl = gsap.timeline();

tl.from(".box1", {
  opacity: 0,
})
  .to(".box1", {
    x: 115,
    y: -100,
    duration: 2,
    opacity: 0.4,
    ease: "elastic",
  })
  .to(
    ".box2",
    {
      x: -105,
      duration: 3,
    },
    "-=2"
  );

let letterElement = document.getElementsByClassName("letter");

gsap.from(letterElement, {
  opacity: 0,
  ease: "back.out(1)",
  stagger: 0.2,
  delay: 0.6,
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".letter", {
  scale: 10, // Expande as letras
  opacity: 0, // Faz as letras sumirem
  stagger: 0.5, // Aplica um pequeno atraso entre as animações das letras
  scrollTrigger: {
    trigger: ".titulo-box",
    start: "top center",
    end: "top 100px",
    scrub: true,
  },
});

const tln = gsap.timeline({});
gsap.utils.toArray(".letter").forEach((img) => {
  gsap.fromTo(
    img,
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1, // Tempo da animação
      delay: Math.random() * 2, // Atraso aleatório entre 0 e 2 segundos
      ease: "power2.out",
      rotate: Math.floor(Math.random() * 360),
    }
  );
});


gsap.to(".quote", {
    fontSize: "100px", // Tamanho final
    duration: 1,
    scrollTrigger: {
        trigger: ".quote",
        start: "top 100%", // Quando o topo do elemento chegar a 80% da viewport
        end: "top 10%",   // Quando o topo do elemento chegar a 20% da viewport
        scrub: true       // Efeito suave ao rolar
    }
});