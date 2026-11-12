const motionAllowed = window.matchMedia("(prefers-reduced-motion: no-preference)");

if (window.gsap && motionAllowed.matches) {
  gsap.fromTo(".hero-copy > *, .portrait", { y: 10 }, {
    y: 0,
    duration: 0.46,
    stagger: 0.04,
    ease: "power2.out",
    clearProps: "transform"
  });

  const cards = document.querySelectorAll(".case");
  const observer = new IntersectionObserver((entries) => {
    for (const { isIntersecting, target } of entries) {
      if (!isIntersecting) continue;
      observer.unobserve(target);
      if (!motionAllowed.matches) continue;

      gsap.fromTo(target, { y: 8 }, {
        y: 0,
        duration: 0.38,
        ease: "power2.out",
        clearProps: "transform"
      });
    }
  }, { threshold: 0.18 });

  cards.forEach((card) => observer.observe(card));
}
