function setActiveTab(event) {
    const clickedLink = event.target.closest('.nav-link');
    if (!clickedLink) return;

    // Remove 'active-tab' from all nav links
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-tab'));

    // Add 'active-tab' to the clicked link
    clickedLink.classList.add('active-tab');

    // Store the active tab in sessionStorage
    sessionStorage.setItem('activeTab', clickedLink.getAttribute('href'));
}

// Function to update active tab based on current route
function updateActiveTab() {
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active-tab'));

    const activeLink = document.querySelector(`.nav-link[href="${currentPath}"]`);
    if (activeLink) {
        activeLink.classList.add('active-tab');
    } else {
        // Default to "Home" if no match is found
        document.querySelector('.home.nav-link').classList.add('active-tab');
    }
}

// Run on initial load
document.addEventListener('DOMContentLoaded', updateActiveTab);

// Run when clicking a navigation link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', setActiveTab);
});

// Run when using browser back/forward buttons
window.addEventListener('popstate', updateActiveTab);
