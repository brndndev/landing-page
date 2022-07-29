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

//make sure the DOM is properly loaded
window.addEventListener('DOMContentLoaded', (event) => {

    /**
 * Define Global Variables
 * 
*/

//gather all the sections
let sections = document.querySelectorAll("section")
//get the navbar list
let navbarList = document.querySelector("#navbar__list")

/**
 * End Global Variables


 * Begin Main Functions
 * 
*/

    // build the nav
    function buildNav(){
        //loop through the number of sections, for each section  
        for (let i = 1; i <= sections.length; i++){
            //create an a tag and a li tag, append the li tag to a tag
            const a = document.createElement("a")
            //give each anchor tag an id 
            a.setAttribute("id", "section" + i)
            //add event listener to every anchor tag
            a.addEventListener("click", function (event){
                //call the scrollToAnchor function
                scrollToAnchor(event)
            })
            //create li element 
            const li = document.createElement("li")
            //add text content to the list element denoting the section
            li.textContent = "Section " + i
            //append the li element to the anchor tag
            a.appendChild(li)
            //then append the a tag to the navbar list
            navbarList.appendChild(a)
        }
    }

        // Add class 'active' to section when near top of viewport
    function addActiveClass(){
        window.addEventListener('scroll', (event) => {

            //gather each section
            const sections = document.querySelectorAll('section');
            
            // loop through each section
            for (section of sections){
                //get top distance
                const top = section.getBoundingClientRect().top
                //check if top is in viewport, if so add class, if not remove the class
                if (top > 0 && top < 100){
                    //add active class
                    section.classList.add("active")
                }else{
                    //remove active class
                    section.classList.remove("active")
                }
            }
        });
    }

    // Scroll to anchor ID using scrollTO event
    function scrollToAnchor(event){
        //get the id of the slected anchor tag 
        const elemID = event.target.parentElement.id

        //find the section needed to scroll to and add scroll into view functionality to it with a behavior of smooth
        document.querySelectorAll("section#" + elemID)[0].scrollIntoView({
            //add smooth scrolling
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

//add active class
addActiveClass()

});


