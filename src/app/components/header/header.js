function setActiveTab(event) {
    // Find the closest <a> element with the 'nav-link' class
    const clickedLink = event.target.closest('.nav-link');

    // If no such <a> element is found, exit the function
    if (!clickedLink) return;

    // Remove 'active-tab' from all nav links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-tab'));

    // Add 'active-tab' to the clicked link
    clickedLink.classList.add('active-tab');
}

// Set "Home" as the default active tab on page load
document.addEventListener('DOMContentLoaded', () => 
    {
    
    const homeLink = document.querySelector('.home.nav-link');


    if (!document.querySelector('.active-tab') && homeLink) {
        homeLink.classList.add('active-tab');
    }
});



