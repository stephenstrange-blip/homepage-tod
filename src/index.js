import "./css_reset.css";
import "./styles.css";
import githubIcon from "./assets/github.svg";
import twitterIcon from "./assets/twitter.svg";
import linkedinIcon from "./assets/linkedin.svg";
import aboutPic from "./assets/about.jpg";
import contactPic from "./assets/contact.jpg";
import openIcon from "./assets/open.svg";
import awsIcon from "./assets/aws.svg";
import k8Icon from "./assets/k8.svg";
import reactIcon from "./assets/react.svg";
import typescriptIcon from "./assets/typescript.svg";
import golangIcon from "./assets/go.svg";
import terraformIcon from "./assets/terraform.svg";

(function addText() {
  const aboutMe = "About Me";
  const aboutInfo =
    "I am an aspiring software engineer from the Land of the Pearl of the Orients. My end goal is to become a cloud engineer but I also took interest in web development, hence why I am in the TOD curriculum. If you want to find a coding buddy or you need someone for backend development, primarily something to do with the cloud, then do not hesitate to reach out to me!";

  const skills = "My target languages";

  const contactMe = "Contact Me";
  const contactMsg =
    "Don't hesitate to reach out if you think we share interest or it benefits yours. Happy Coding!";
  const contactNo = "+63 987 6543 321";
  const email = "jademattieuisip@gmail.com";

  const aboutP = document.querySelector(".about-me > p");

  const mainHeader = document.querySelector("main > h1");

  const footerHeader = document.querySelector("footer > div > h1");
  const footerMessage = document.querySelector("footer > div > p");
  const callP = document.querySelector(".phone > p");
  const mailP = document.querySelector(".mail > p");

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

(function addImages() {
  const headerContainer = document.querySelector(".about-picture");
  const footer = document.querySelector("footer");
  const figure1 = document.createElement("figure");
  const figure2 = document.createElement("figure");
  const caption1 = document.createElement("figcaption");
  const caption2 = document.createElement("figcaption");
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const i1 = document.createElement("i");
  const i2 = document.createElement("i");
  // const h1 = document.createElement("h1");

  img1.src = aboutPic;
  img2.src = contactPic;
  i1.textContent = "Photo by Christina Morillo";
  i2.textContent = "Photo by Fernando Hernandez";
  // h1.textContent = "Jade Isip";

  caption1.append(i1);
  caption2.append(i2);
  figure1.append(img1, caption1);
  figure2.append(img2, caption2);
  headerContainer.append(figure1);
  footer.append(figure2);
})();

function addCard() {
  const k8 = new Card();
  const aws = new Card();
  const react = new Card();
  const golang = new Card();
  const terraform = new Card();
  const typescript = new Card();

  k8.addLink(githubIcon, openIcon);
  aws.addLink(githubIcon, openIcon);
  react.addLink(githubIcon, openIcon);
  golang.addLink(githubIcon, openIcon);
  terraform.addLink(githubIcon, openIcon);
  typescript.addLink(githubIcon, openIcon);

  k8.addFigure(k8Icon, "Icon from devicon.dev");
  aws.addFigure(awsIcon, "Icon from devicon.dev");
  react.addFigure(reactIcon, "Icon from devicon.dev");
  golang.addFigure(golangIcon, "Icon from devicon.dev");
  terraform.addFigure(terraformIcon, "Icon from devicon.dev");
  typescript.addFigure(typescriptIcon, "Icon from devicon.dev");

  k8.addInfo(
    "Kubernetes",
    "Kubernetes for Managing Docker Containers. Essential for Cloud Engineers",
  );
  aws.addInfo(
    "AWS",
    "AWS for storing serverless applications and architecture. Essential for Cloud Engineers",
  );
  react.addInfo(
    "React",
    "React for building websites and PWAs. Essential for Web Developers",
  );
  golang.addInfo(
    "Golang",
    "Golang for server-side scripting and cloud development. Ideal for DevOps Engineers",
  );
  terraform.addInfo(
    "Terraform",
    "Terraform for cloud automation. Ideal for Cloud Engineers",
  );
  typescript.addInfo(
    "Typescript",
    "Typescript for building websites and PWAs. Ideal for Web Developers",
  );

  k8.insertToDOM("card", "k8");
  aws.insertToDOM("card", "aws");
  react.insertToDOM("card", "react");
  golang.insertToDOM("card", "golang");
  terraform.insertToDOM("card", "terraform");
  typescript.insertToDOM("card", "typescript");
}

class Card {
  constructor() {
    this.container = document.createElement("div");
    this.upper = document.createElement("figure");
    this.lower = document.createElement("div");
    this.links = document.createElement("div");
    this.h2 = document.createElement("h2");
    this.span = document.createElement("span");
  }

  addLink(...src) {
    src.forEach((link) => {
      const img = document.createElement("img");
      img.src = link;
      this.links.append(img);
    });
    this.lower.append(this.links);
  }

  addInfo(header, description) {
    this.span.textContent = description;
    this.h2.textContent = header;
    this.lower.append(this.header, this.span);
  }

  addFigure(src, caption) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = src;
    figcaption.textContent = caption;
    figure.append(img, figcaption);
    this.upper.append(figure);
  }

  insertToDOM(...className) {
    const fragment = new DocumentFragment();
    const container = document.querySelector(".card-container");
    this.container.append(this.upper, this.lower);
    this.container.classList.add(...className);

    fragment.append(this.container);
    container.append(fragment);
  }
}

addCard();