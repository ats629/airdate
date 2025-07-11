function scrollToNextSection() {
    const hero = document.querySelector("section.hero-word-loop");
    const next = hero?.nextElementSibling;
    if (next) {
      next.scrollIntoView({ behavior: "smooth" });
    }
  }

  // Hide scroll mouse when scrolled past hero
  function handleMouseScrollVisibility() {
    const mouseScroll = document.getElementById("mouseScroll");
    const heroSection = document.querySelector("section.hero-word-loop");

    if (!mouseScroll || !heroSection) return;

    const rect = heroSection.getBoundingClientRect();

    if (rect.bottom <= 100) {
      mouseScroll.style.opacity = "0";
      mouseScroll.style.pointerEvents = "none";
    } else {
      mouseScroll.style.opacity = "1";
      mouseScroll.style.pointerEvents = "auto";
    }
  }

  // Listen to scroll and page load
  document.addEventListener('scroll', handleMouseScrollVisibility);
  window.addEventListener('load', handleMouseScrollVisibility);