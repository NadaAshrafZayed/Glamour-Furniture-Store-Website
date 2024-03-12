// for Navbar (Color change after a specific height)
window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    var links = navbar.querySelectorAll('.nav-link');
    
    links.forEach(function(link) {
        if (window.scrollY > 565) {
            link.style.color = 'rgb(4, 78, 4)';
            link.style.backgroundColor = 'rgba(47, 110, 88, 0.3)';
        } else {
            link.style.backgroundColor = 'transparent';
            link.style.color = '#B0C5A4'; // Reset color
        }
    });
});


// for About page (The paragraph appeareance at a specific height)
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;
    var describeAbout = document.querySelector('.describeAbout');
    if (scrollPosition >= 500) {
        describeAbout.classList.add('show');
    } else {
        describeAbout.classList.remove('show');
    }
});


// for Contact page (Icons click)
$(document).ready(function() {
    $('.icon-toggle').click(function() {
      var target = $(this).data('target');
      $('.toggle-container > div').not(target).fadeOut('slow');
      $(target).fadeIn('slow');
    });
  });




