/* LOADING SCREEN VARIABLES */
var i = 0;
var txt = "...";
var speed = 1500;
var loadingTxt = document.getElementById("loading-text");
var loading = document.getElementById("loading-screen");
/* MAIN LOGO */
var logoClick = document.getElementById("logo-click");
/* SECTION VARIABLES */
var home = document.getElementById("home");
var nav = document.getElementById("open-nav");
var aboutSection = document.getElementById("about");
var workSection = document.getElementById("work");
var contactSection = document.getElementById("contact");
var sectionClass = document.getElementsByClassName("section");
var sectionsArray = [aboutSection, workSection];
// global section variable to hold previously active section
var prevSection = null;
/* CLOSE SECTION */
var closeSection = document.getElementById("close-section");
/* NAV BUTTONS */
var toWork = document.getElementById("to-work");
var navOverlay = document.getElementById("overlay");
var navMenu = document.getElementById("nav-menu");
// nav menu query
var navLinks = document.querySelectorAll(".nav-link");
/* ABOUT SECTION */
var aboutHeader = document.querySelector("#about > .section-header");
var aboutContent = document.querySelector("#about > .about-content");
var aboutTitle = document.querySelector(
  " #about > .section-header > .section-title, .to-work"
);
var aboutWrapper = document.querySelector(".about-wrapper");
/* WORK SECTION */
var projectBox = document.getElementsByClassName("project-box");
var projectsContainer = document.querySelector(".projects");
// project boxes
var projectOne = document.querySelector(".project-1");
var projectTwo = document.querySelector(".project-2");
var projectThree = document.querySelector(".project-3");
var projectFour = document.querySelector(".project-4");
var projectFive = document.querySelector(".project-5");
// project previews
var projectOne = document.getElementById("project-1");
var projectTwo = document.getElementById("project-2");
var projectThree = document.getElementById("project-3");
var projectFour = document.getElementById("project-4");
var projectFive = document.getElementById("project-5");
// project box content
var projectImg = document.querySelectorAll("div.proj-img");
var projectDesc = document.querySelectorAll("div.proj-desc");
// project full content
var closeProject = document.getElementById("close-project");
var projectDetails = document.getElementById("project-details");
var projectFull = document.querySelectorAll("div.project-full");
var projectOneFull = document.getElementById("project-1-full");
var projectTwoFull = document.getElementById("project-2-full");
var projectThreeFull = document.getElementById("project-3-full");
var projectFourFull = document.getElementById("project-4-full");
var projectFiveFull = document.getElementById("project-5-full");
// active full project variable holder
var activeProject = 0;
/* TRANSITION OVERLAYS */
var overlayTransitionOne = document.getElementById("overlay-transition-one");

// onload function loadingScreen() - runs the function when the website initially loads
window.onload = loadingScreen;

function loadingScreen() {
  if (i < txt.length) {
    loadingTxt.innerHTML += txt.charAt(i);
    i++;
    setTimeout(loadingScreen, speed);
    i === txt.length
      ? setTimeout(() => {
          loadingTxt.style.opacity = 0;
        }, 1000)
      : (loadingTxt.style.opacity = 1);
  } else {
    loadingTxt.innerHTML = "WELCOME";
    loadingTxt.classList.add("loading-animation");
    setTimeout(() => {
      // loading
      toggleSections(loading);
      // home
      toggleSections(home);
      // nav
      toggleSections(nav);
    }, 4000);
  }
}

/* SECTION NAVIGATION */

// to about section
logoClick.addEventListener("click", () => {
  toggleSections(aboutSection);
});

// work section
toWork.addEventListener("click", () => {
  toggleSections(workSection);
});

// navigation menu
navLinks.forEach(item => {
  item.addEventListener("click", e => {
    let clickedLink = e.target.innerHTML;
    let hideMenu = false;

    //home section navigation
    clickedLink === "home"
      ? !home.classList.contains("display-none")
        ? (sectionClose(),
          navOverlay.classList.add("hide"),
          navOverlay.classList.remove("visible"),
          navMenu.classList.add("display-none"),
          navMenu.classList.remove("flex"))
        : (toggleSections(home), (hideMenu = true))
      : //about section navigation
      clickedLink === "about"
      ? aboutSection.classList.contains("active")
        ? (navOverlay.classList.add("hide"),
          navOverlay.classList.remove("visible"),
          navMenu.classList.add("display-none"),
          navMenu.classList.remove("flex"))
        : (toggleSections(aboutSection), (hideMenu = true))
      : //work section navigation
      clickedLink === "work"
      ? workSection.classList.contains("active")
        ? (navOverlay.classList.add("hide"),
          navOverlay.classList.remove("visible"),
          navMenu.classList.add("display-none"),
          navMenu.classList.remove("flex"))
        : (toggleSections(workSection), (hideMenu = true))
      : // else, open contact section (did it this way to break the ternary statement)
      aboutSection.classList.contains("active")
      ? (navOverlay.classList.add("hide"),
        navOverlay.classList.remove("visible"),
        navMenu.classList.add("display-none"),
        navMenu.classList.remove("flex"))
      : (toggleSections(aboutSection), (hideMenu = true));

    // after link is clicked, hide the menu
    hideMenu === true &&
      (navOverlay.classList.add("hide"),
      navOverlay.classList.remove("visible"),
      navMenu.classList.add("display-none"),
      navMenu.classList.remove("flex"));
  });
});

/* 
PROJECT BOX EVENT LISTENERS
*/
projectOne.addEventListener("click", () => {
  projectDetailsShow(0);
});
projectTwo.addEventListener("click", () => {
  projectDetailsShow(1);
});
projectThree.addEventListener("click", () => {
  projectDetailsShow(2);
});
projectFour.addEventListener("click", () => {
  projectDetailsShow(3);
});
projectFive.addEventListener("click", () => {
  projectDetailsShow(4);
});

/* CLOSE PROJECT */
closeProject.addEventListener("click", () => {
  projectDetailsHide();
});

/* NAV OVERLAY */
nav.addEventListener("click", () => {
  navAction(navOverlay);
  navAction(navMenu);
});

// close section
closeSection.addEventListener("click", () => {
  sectionClose();
});

/*

FUNCTIONS

*/

// toggleSections - toggles the section to be opened and at the same time hiding
// the previous section if applicable
const toggleSections = section => {
  // remove the previous section active class
  sectionsArray.forEach(item => {
    item.classList.contains("active") &&
      item.id.toString() !== section.id.toString() &&
      (item.classList.remove("active"), (prevSection = item));
  });

  closeSection.classList.add("disabled");

  // close active section if user navigates back to home section
  section.id.toString() === home.id.toString &&
    prevSection !== null &&
    sectionClose();

  // about section unique styling
  section.id.toString() === aboutSection.id.toString() &&
    (aboutSection.classList.add("flex"),
    toWork.classList.remove("display-none"));

  // display the selected section
  section.classList.contains("hide")
    ? (section.classList.remove("display-none"),
      section.classList.remove("hide"),
      section.classList.contains("section") && section.classList.add("active"))
    : (section.classList.add("hide"), section.classList.add("display-none"));

  // reveals the close section button for sections only (not to be displayed for the home section or nav menu)
  section.id.toString() !== home.id.toString() &&
  section.classList.contains("section")
    ? (closeSection.classList.add("visible"),
      closeSection.classList.remove("hide"))
    : !section.classList.contains("section")
    ? (closeSection.classList.add("hide"),
      closeSection.classList.remove("visible"))
    : (closeSection.classList.add("hide"),
      closeSection.classList.remove("visible"));

  section.classList.contains("section") &&
    setTimeout(() => {
      prevSection !== null &&
        (prevSection != prevSection.classList.add("display-none"),
        prevSection.classList.add("hide"),
        prevSection.classList.contains("flex") &&
          prevSection.id.toString() === aboutSection.id.toString() &&
          prevSection.classList.remove("flex"));
      closeSection.classList.remove("disabled");
    }, 3000);
};

//  navAction - navigation menu function
const navAction = item => {
  item.id.toString() === navMenu.id.toString() &&
  item.classList.contains("display-none")
    ? (item.classList.add("flex"), item.classList.remove("display-none"))
    : item.id.toString() === navMenu.id.toString() &&
      item.classList.contains("flex")
    ? (item.classList.add("display-none"), item.classList.remove("flex"))
    : item.classList.contains("hide")
    ? (item.classList.add("visibile"), item.classList.remove("hide"))
    : (item.classList.add("hide"), item.classList.remove("visibile"));
};

// projectSlideOut - add slide out classes to project box children
const projectSlideOut = () => {
  // create counter for the animation delay
  let counter = 0;
  for (var i = 0; i < projectBox.length; i++) {
    // set the inital styling of the projectBox content
    // add disabled class to the projectBoxes so they cannot be clicked while the animation is being played
    projectBox[i].classList.add("disabled");
    nav.classList.add("disabled");
    projectImg[i].style.transform = "scaleY(1)";
    projectDesc[i].style.transform = "scaleY(1)";
    projectImg[i].style.opacity = 1;
    projectDesc[i].style.opacity = 1;
    // add the animations with the counter being implmented for the animation delay
    projectImg[
      i
    ].style.animation = `project-box-slide-out 1s forwards ${counter}s `;
    projectDesc[
      i
    ].style.animation = `project-box-slide-out 1s forwards ${counter}s `;
    // add 0.2 to the counter through each cycle to increase animation delay for the next project
    counter += 0.2;
  }

  // remove the styling after the animation is completed
  setTimeout(() => {
    for (var i = 0; i < projectBox.length; i++) {
      projectBox[i].classList.remove("disabled");
      projectImg[i].style.animation = "";
      projectDesc[i].style.animation = "";
      projectImg[i].style.transform = "scaleY(0)";
      projectDesc[i].style.transform = "scaleY(0)";
      projectImg[i].style.opacity = 0;
      projectDesc[i].style.opacity = 0;
    }
  }, 2250);
  setTimeout(() => {
    projectsContainer.classList.remove("diasbled");
    nav.classList.remove("disabled");
  }, 2500);
};

// projectDetailsShow - function to display the clicked project box
const projectDetailsShow = projectNum => {
  activeProject = projectNum;
  projectDetails.classList.remove("display-none");
  projectFull[projectNum].classList.remove("display-none");
  projectFull[projectNum].classList.add("project-active");
  projectFull[projectNum].classList.add("flex");
  closeProject.classList.remove("display-none");
};
// projectDetailsHide - function to hide the currently active project box
const projectDetailsHide = () => {
  projectFull[activeProject].classList.add("fade-out");
  closeProject.classList.add("fade-out");
  setTimeout(() => {
    closeProject.classList.remove("fade-out");
    closeProject.classList.add("display-none");
    projectDetails.classList.add("display-none");
    projectFull[activeProject].classList.add("display-none");
    projectFull[activeProject].classList.remove("project-active");
    projectFull[activeProject].classList.remove("flex");
    projectFull[activeProject].classList.remove("fade-out");
  }, 1000);
};

// sectionClose - function to close the current section
const sectionClose = () => {
  /* ABOUT SECTION CLOSE */
  aboutSection.classList.contains("active")
    ? (aboutSection.classList.remove("active"),
      aboutWrapper.classList.add("fade-out"),
      aboutTitle.classList.add("fade-out"),
      setTimeout(() => {
        aboutHeader.classList.add("section-header-slide-out"),
          aboutContent.classList.add("about-content-slide-out");
      }, 1250),
      setTimeout(() => {
        // hide the about section after the slide out animations play
        aboutSection.classList.add("display-none");
        aboutSection.classList.add("hide");
        aboutSection.classList.remove("flex");
        // remove the slide/fade out animations
        aboutHeader.classList.remove("section-header-slide-out");
        aboutContent.classList.remove("about-content-slide-out");
        aboutWrapper.classList.remove("fade-out");
        aboutTitle.classList.remove("fade-out");
      }, 2250))
    : /* WORK SECTION CLOSE */
      workSection.classList.contains("active") &&
      (projectSlideOut(),
      workSection.classList.remove("active"),
      setTimeout(() => {
        // hide the section and remove active status
        workSection.classList.add("display-none");
        workSection.classList.add("hide");
      }, 2250));

  // hide the 'close section' button
  closeSection.classList.remove("visible");
  closeSection.classList.add("hide");
  prevSection = null;
};
