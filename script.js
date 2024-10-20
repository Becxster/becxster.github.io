function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('show');
}

function redirectToPage(url) {
  window.open(url, '_blank');
}


document.addEventListener('DOMContentLoaded', function() {
  const hoverBox = document.getElementById('hoverBox');

  hoverBox.addEventListener('click', function(event) {
    const target = event.target;

    // Check if the clicked element is a dropdown item
    if (target.classList.contains('dropdown-item')) {
      event.stopPropagation(); // Stop the event from bubbling up
      const url = target.getAttribute('data-url');
      window.location.href = url;
    } else if (target.closest('#hoverBox') && !target.classList.contains('dropdown-item')) {
      // If the target is inside the hoverBox but not a dropdown item
      window.location.href = new URL('projects.html', window.location.origin);
    }
  });
});

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
