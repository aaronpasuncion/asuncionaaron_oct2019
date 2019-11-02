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
var skillsSection = document.getElementById("skills");
var workSection = document.getElementById("work");
var contactSection = document.getElementById("contact");
var sectionClass = document.getElementsByClassName("section");
var sectionsArray = [aboutSection, skillsSection, workSection];
// global section variable to hold previously active section
var prevSection = null;
/* CLOSE SECTION */
var closeSection = document.getElementById("close-section");
/* NAV BUTTONS */
var toSkills = document.getElementById("to-skills");
var toWork = document.getElementById("to-work");
var navOverlay = document.getElementById("overlay");
var navMenu = document.getElementById("nav-menu");
// nav menu query
var navLinks = document.querySelectorAll(".nav-link");
/* ABOUT SECTION */
var aboutHeader = document.querySelector("#about > .section-header");
var aboutContent = document.querySelector("#about > .about-content");
var aboutTitle = document.querySelector(
  " #about > .section-header > .section-title, .to-skills"
);
var aboutWrapper = document.querySelector(".about-wrapper");
/* SKILL SECTION */
var skillsTitle = document.getElementById("skills-section-title");
var frontEndSkills = document.getElementById("front-end-skills");
var backEndSkills = document.getElementById("back-end-skills");
var skillsContent = document.querySelector(".skills-content");
var bgOne = document.getElementById("bg-one");
var bgTwo = document.getElementById("bg-two");
var bgOneAlt = document.getElementById("bg-one-alternate");
var bgTwoAlt = document.getElementById("bg-two-alternate");
var barGraph = document.getElementById("bar-graph");
var bar = document.getElementsByClassName("bar");
var backEndContent = document.getElementById("back-end-content");
/* WORK SECTION */
var projectBox = document.getElementsByClassName("project-box");
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
    loadingTxt.style.opacity = 1;
    loadingTxt.innerHTML = "WELCOME";
    setTimeout(() => {
      loadingTxt.style.opacity = 0;
    }, 2000);
    setTimeout(() => {
      // loading
      toggleSections(loading);
      // home
      toggleSections(home);
      // nav
      toggleSections(nav);
    }, 00);
  }
}

/* SECTION NAVIGATION */

// to about section
logoClick.addEventListener("click", () => {
  toggleSections(aboutSection);
});

// skills section

toSkills.addEventListener("click", () => {
  toggleSections(skillsSection);
});

frontEndSkills.addEventListener("click", () => {
  toggleSkills(frontEndSkills);
});

backEndSkills.addEventListener("click", () => {
  toggleSkills(backEndSkills);
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
      : //skills section navigation
      clickedLink === "skills"
      ? skillsSection.classList.contains("active")
        ? (navOverlay.classList.add("hide"),
          navOverlay.classList.remove("visible"),
          navMenu.classList.add("display-none"),
          navMenu.classList.remove("flex"))
        : (toggleSections(skillsSection), (hideMenu = true))
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
  // set the previous and current sections
  console.log(prevSection);
  // remove the previous section active class
  sectionsArray.forEach(item => {
    item.classList.contains("active") &&
      item.id.toString() !== section.id.toString() &&
      (item.classList.remove("active"), (prevSection = item));
  });

  // close active section if user navigates back to home section
  section.id.toString() === home.id.toString &&
    prevSection !== null &&
    sectionClose();

  section.id.toString() === aboutSection.id.toString() &&
    aboutSection.classList.add("flex");

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

// toggleSkills - function that  determines which skills content is to be displayed
const toggleSkills = skill => {
  let otherSkill =
    skill.id === frontEndSkills.id ? backEndSkills : frontEndSkills;
  let animation = "fade-out";

  /*
  OPTION 1:
  if skill selection is currently active, hide the content and display the skills section title (default setting)
  */
  skill.classList.contains("skill-selection-active")
    ? //  remove the class and hide everything else
      (console.log("option 1"),
      // remove the active selection class
      skill.classList.remove("skill-selection-active"),
      // animate the backgrounds
      bgOneAlt.classList.add("slide-out-y"),
      bgTwoAlt.classList.add("slide-out-y"),
      // close the content for the specific skill section
      skill.id === frontEndSkills.id && barGraph.classList.add("slide-out-y"),
      skill.id === backEndSkills.id && backEndContent.classList.add(animation),
      // setTimeout() function to add display none and add the section title animation
      // so the animation can be played first before displaying to none
      setTimeout(() => {
        bgOneAlt.classList.add("display-none");
        bgTwoAlt.classList.add("display-none");
        skill.id === frontEndSkills.id &&
          barGraph.classList.add("display-none");
        skill.id === backEndSkills.id &&
          backEndContent.classList.add("display-none");
        skillsTitle.classList.remove(animation);
      }, 750))
    : /* 
    OPTION 2:
    else if skill selection active on other skill section then hide the current content and then activate
     the current skills styling and animations 
     */
    otherSkill.classList.contains("skill-selection-active")
    ? (console.log("option 2"),
      // remove the other skill section title active class
      otherSkill.classList.remove("skill-selection-active"),
      // add the active skill class to the currently selected section
      skill.classList.add("skill-selection-active"),
      // animate the backgrounds to swap colours
      bgOneAlt.classList.add("slide-out-y"),
      bgTwoAlt.classList.add("slide-out-y"),
      // hide the otherSkills content
      otherSkill.id === frontEndSkills.id &&
        (barGraph.classList.add("slide-out-y"),
        backEndContent.classList.remove(animation),
        backEndContent.classList.remove("display-none")),
      otherSkill.id === backEndSkills.id &&
        (backEndContent.classList.add(animation),
        barGraph.classList.remove("display-none"),
        barGraph.classList.remove("slide-out-y")),
      // remove the slide out animation of the current active skill content
      skill.classList.remove("slide-out-y"),
      setTimeout(() => {
        bgOneAlt.classList.add("display-none");
        bgTwoAlt.classList.add("display-none");
        skill.id === backEndSkills.id && barGraph.classList.add("display-none");
        skill.id === frontEndSkills.id &&
          backEndContent.classList.add("display-none");
      }, 750))
    : /* 
     OPTION 3:
     ELSE if neither is valid just add the animations to the clicked skill section
      */
      (console.log("option 3"),
      // add the active skill selection class to the selected skill
      skill.classList.add("skill-selection-active"),
      //animate the backgrounds to alternate the colours
      bgOneAlt.classList.remove("display-none"),
      bgTwoAlt.classList.remove("display-none"),
      bgOneAlt.classList.remove("slide-out-y"),
      bgTwoAlt.classList.remove("slide-out-y"),
      //display the content for the specific skill section
      skill.id === frontEndSkills.id &&
        (barGraph.classList.remove("slide-out-y"),
        barGraph.classList.remove("display-none")),
      skill.id === backEndSkills.id &&
        (backEndContent.classList.remove("display-none"),
        backEndContent.classList.remove(animation),
        backEndContent.classList.remove("slide-out-y")),
      // add the fade out animation to the section title
      skillsTitle.classList.add(animation));
};

// projectSlideOut - add slide out classes to project box children
const projectSlideOut = () => {
  for (var i = 0; i < projectBox.length; i++) {
    projectImg[i].classList.add("project-box-slide-out");
    projectDesc[i].classList.add("project-box-slide-out");
  }

  // remove the classes after the animation is completed
  setTimeout(() => {
    for (var i = 0; i < projectBox.length; i++) {
      projectImg[i].classList.remove("project-box-slide-out");
      projectDesc[i].classList.remove("project-box-slide-out");
    }
  }, 2000);
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
  console.log(activeProject);
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
        // remove the slide out animations
        aboutHeader.classList.remove("section-header-slide-out");
        aboutContent.classList.remove("about-content-slide-out");
        aboutWrapper.classList.remove("fade-out");
        aboutTitle.classList.remove("fade-out");
      }, 2250))
    : skillsSection.classList.contains("active")
    ? (skillsContent.classList.add("skill-box-anim-exit"),
      skillsSection.classList.remove("active"),
      setTimeout(() => {
        bgOne.classList.add("slide-out-y"),
          bgOneAlt.classList.add("slide-out-y"),
          bgTwo.classList.add("slide-out-y"),
          bgTwoAlt.classList.add("slide-out-y");
      }, 1250),
      setTimeout(() => {
        // after animation is complete, remove the hide animations
        bgOne.classList.remove("slide-out-y");
        bgOneAlt.classList.remove("slide-out-y");
        bgTwo.classList.remove("slide-out-y");
        bgTwoAlt.classList.remove("slide-out-y");
        skillsContent.classList.remove("skill-box-anim-exit");
        // hide the section and remove active status
        skillsSection.classList.add("display-none");
        skillsSection.classList.add("hide");
      }, 2250))
    : workSection.classList.contains("active")
    ? (projectSlideOut(),
      setTimeout(() => {
        // hide the section and remove active status
        workSection.classList.add("display-none");
        workSection.classList.add("hide");
      }, 1250))
    : console.log(null);

  closeSection.classList.remove("visible");
  closeSection.classList.add("hide");
  prevSection = null;
};
