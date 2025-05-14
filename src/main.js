import gsap from "gsap";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText);

document.addEventListener("DOMContentLoaded", () => {
  const profileImagesContainer = document.querySelector("profile-image");
  const profileImages = document.querySelectorAll(".profile-images .img");

  const nameElements = document.querySelectorAll(".profile-names .name");
  const nameHeadings = document.querySelectorAll(".profile-names .name h2");

  nameHeadings.forEach((heading) => {
    const split = new SplitText(heading, { type: "chars" });
    split.chars.forEach((char) => {
      char.classList.add("letter");
    });
  });

  const defaultLetters = nameElements[0].querySelectorAll(".letter");
  gsap.set(defaultLetters, { y: "100%" });
});
