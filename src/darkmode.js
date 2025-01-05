function darkmode()
 {

    //display functions
    const moons = document.querySelectorAll(".moon");  // Get all moons
    const suns = document.querySelectorAll(".sun");    // Get all suns
    const body = document.body;



    const isDarkMode = body.classList.toggle("darkMode");  // Toggle dark mode

    // Save theme state within browser ( ? is just an if then statment)
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");

    // Toggle visibility for all `.moon` and `.sun` elements
    moons.forEach(moon => moon.style.display = isDarkMode ? "none" : "flex");
    suns.forEach(sun => sun.style.display = isDarkMode ? "flex" : "none");
}



// Apply dark mode state when the page loads
document.addEventListener("DOMContentLoaded", function () {
    const isDarkMode = localStorage.getItem("theme") === "dark";
    const moons = document.querySelectorAll(".moon");
    const suns = document.querySelectorAll(".sun");

    if (isDarkMode) {
        document.body.classList.add("darkMode");
        moons.forEach(moon => moon.style.display = "none");
        suns.forEach(sun => sun.style.display = "flex");
    } else {
        document.body.classList.remove("darkMode");
        moons.forEach(moon => moon.style.display = "flex");
        suns.forEach(sun => sun.style.display = "none");
    }
});
