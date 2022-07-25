/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/



window.addEventListener('DOMContentLoaded', (event) => {

    /**
 * Define Global Variables
 * 
*/
let sections = document.querySelectorAll("section")
let navbarList = document.querySelector("#navbar__list")

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

    // build the nav

    function buildNav(){
        //loop through the number of sections, for each section  
        for (let i = 1; i <= sections.length; i++){
            //create an a tag and a li tag, append the li tag to a tag
            const a = document.createElement("a")
            a.setAttribute("id", "section" + i)

            a.addEventListener("click", function (event){
                scrollToAnchor(event)
            })

            const li = document.createElement("li")
            li.textContent = "Section " + i
            a.appendChild(li)
            //then append the a tag to the navbar list
            navbarList.appendChild(a)
        }
    }

    // Add class 'active' to section when near top of viewport

    window.addEventListener('scroll', (event) => {

        //gather each section
        const sections = document.querySelectorAll('section');
      
        // loop through each section
        for (section of sections){
            //get top distance
            const top = section.getBoundingClientRect().top
            //check if top is in viewport, if so add class, if not remove the class
            if (top > 0 && top < 100){
                section.style.backgroundColor = "#999999"
                section.classList.add("active")
            }else{
                section.style.backgroundColor = ""
                section.classList.remove("active")
            }
        }
      });

    // Scroll to anchor ID using scrollTO event

    function scrollToAnchor(event){
        //get the id of the slected anchor tag 
        const elemID = event.target.parentElement.id

        //find the section needed to scroll to and add scroll into view functionality to it with a behavior of smooth
        document.querySelectorAll("section#" + elemID)[0].scrollIntoView({
            behavior: 'smooth'
          })

    }

/**
 * End Main Functions
 * Begin Events
 * 
*/

//build menu
buildNav()

// Scroll to section on link click
// scrollToAnchor()

// Set sections as active
makeActive()


});



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/


// Scroll to section on link click

// Set sections as active
