function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

function redirectToPage(url) {
  window.location.href = url;
}

document.addEventListener('DOMContentLoaded', function() {
  const hoverBox = document.getElementById('hoverBox');
  const dropdownMenu = document.getElementById('dropdownMenu');

  hoverBox.addEventListener('mouseover', function() {
    // Get the position of the hoverBox
    const rect = hoverBox.getBoundingClientRect();

    // Set the position of the dropdownMenu
    dropdownMenu.style.top = rect.bottom + 'px';
    dropdownMenu.style.left = rect.left + 'px';
  });

  

  hoverBox.addEventListener('mouseleave', function() {
    if (window.innerWidth > 900) {
    // Hide the dropdown menu when not hovering
    dropdownMenu.style.display = 'none';
    }
    else {
    }
  });

  hoverBox.addEventListener('mouseover', function() {
    if (window.innerWidth > 900) {
    // Show the dropdown menu when hovering
    dropdownMenu.style.display = 'block';
    }
    else {
    dropdownMenu.style.display = 'none'
    }
  });
});
