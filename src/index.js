import "./css_reset.css";
import "./styles.css";document.createElement('img');
import githubIcon from './assets/github.svg';
import twitterIcon from './assets/twitter.svg';
import linkedinIcon from './assets/linkedin.svg';



(function addText() {
  const name = "Jade Isip";
  const aboutMe = "About Me";
  const aboutInfo =
    "I am an aspiring software engineer from the Land of the Pearl of the Orients. My end goal is to become a cloud engineer but I also took interest in web development, hence why I am in the TOD curriculum. If you want to find a coding buddy or you need someone for backend development, primarily something to do with the cloud, then do not hesitate to reach out to me!";

  const skills = "My target languages";

  const contactMe = "Contact Me";
  const contactMsg =
    "Don't hesitate to reach out if you think we share interest or it benefits yours. Happy Coding!";
  const contactNo = "+63 987 6543 321";
  const email = "jademattieuisip@gmail.com";

  const nameHeader = document.querySelector(".about-picture > h1");
  const aboutHeader = document.querySelector(".about-me > h1");
  const aboutP = document.querySelector(".about-me > p");

  const mainHeader = document.querySelector("main > h1");

  const footerHeader = document.querySelector("footer > div > h1");
  const footerMessage = document.querySelector("footer > div > p");
  const callP = document.querySelector(".phone > p");
  const mailP = document.querySelector(".mail > p");

  nameHeader.textContent = name;
  aboutHeader.textContent = aboutMe;
  aboutP.textContent = aboutInfo;
  mainHeader.textContent = skills;
  footerHeader.textContent = contactMe;
  footerMessage.textContent = contactMsg;
  callP.textContent = contactNo;
  mailP.textContent = email;
})();

(function addIcons() {
  const linkContainers = document.querySelectorAll(".links");
  linkContainers.forEach((container) => {
    const github = document.createElement("img");
    const linkedIn = document.createElement("img");
    const twitter = document.createElement("img");

    github.src = githubIcon;
    linkedIn.src = linkedinIcon;
    twitter.src = twitterIcon;

    github.alt = "";
    linkedIn.alt = "";
    twitter.alt = "";

    container.append(github, linkedIn, twitter);
  });
})();


