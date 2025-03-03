

let letterElement = document.getElementsByClassName("letter");

gsap.from(letterElement, {
  opacity: 0,
  ease: "back.out(1)",
  stagger: 0.2,
  delay: 0.6,
});

gsap.registerPlugin(ScrollTrigger);

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

const tl = gsap.timeline({
  defautls: {ease: "none"},
  scrollTrigger:{
    trigger: ".animText-section",
    start: "top center",
    end: "bottom center",
    markers: true,
    scrub: 0.5,
    pin: true,
  }
})

tl.from('h2', {
  yPercent: -100,
  stagger: 1
})

var tls = new TimelineMax({
  paused:true
});
// letter animation
tls.fromTo(".anim-typewriter", 8, {
  width: "0",
}, {
  width: "30.18em", /* same as CSS .line-1 width */
  ease:  SteppedEase.config(37)
}, 0);
// text cursor animation
tls.fromTo(".anim-typewriter", 0.5, {
  "border-right-color": "rgba(255,255,255,0.75)"
}, {
  "border-right-color": "rgba(255,255,255,0)",
  repeat: -1,
  ease:  SteppedEase.config(37)
}, 0);

tl.play();