import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
    const partnerSection = document.querySelector(".partner");

    gsap.fromTo(
        partnerSection,
        { opacity: 0 },
        {
            opacity: 1,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
                trigger: partnerSection,         // Element, který sledujeme
                start: "top 50%",                // Spustí animaci, když je vršek sekce ve středu viewportu
                end: "bottom 50%",               // Ukončí animaci, když je spodní část sekce ve středu
                toggleActions: "play none none none", // Při opakovaném scrollování se animace nespouští znovu
            },
        }
    );
});
