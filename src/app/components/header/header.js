function setActiveTab(event) {
    // Find the closest <a> element with the 'nav-link' class
    const clickedLink = event.target.closest('.nav-link');

    // If no such <a> element is found, exit the function
    if (!clickedLink) return;

    // Remove 'active-tab' from all nav links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-tab'));

    // Add 'active-tab' to the clicked link
    clickedLink.classList.add('active-tab');

    // Store the active tab in sessionStorage
    sessionStorage.setItem('activeTab', clickedLink.getAttribute('href'));
}

// Set the correct active tab on page load based on the URL
document.addEventListener('DOMContentLoaded', () => {
    const currentPath = window.location.pathname; // Get the current URL path
    let activeLink = document.querySelector(`.nav-link[href="${currentPath}"]`);

    if (activeLink) {
        activeLink.classList.add('active-tab');
    } else {
        // If no specific path matches, default to "Home"
        document.querySelector('.home.nav-link').classList.add('active-tab');
    }
});

// Attach event listeners to navigation links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', setActiveTab);
});
