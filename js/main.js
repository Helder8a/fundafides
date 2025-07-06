(function ($) {
    "use strict";

    // Loader
    const loader = () => {
        setTimeout(() => {
            const loaderElement = $('#loader');
            if (loaderElement.length > 0) {
                loaderElement.removeClass('show');
            }
        }, 1);
    };
    loader();

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });

    // Sticky Navbar
    $(window).scroll(function () {
        const navbar = $('.navbar');
        if ($(this).scrollTop() > 0) {
            navbar.addClass('nav-sticky');
        } else {
            navbar.removeClass('nav-sticky');
        }
    });

    // Dropdown on mouse hover
    $(document).ready(() => {
        const toggleNavbarMethod = () => {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        };
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });

    // Main carousel
    $(".carousel .owl-carousel").owlCarousel({
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        items: 1,
        smartSpeed: 300,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ]
    });

    // Modal Video
    $(document).ready(() => {
        let videoSrc; // Use let as it will be reassigned

        $('.btn-play').click(function () {
            videoSrc = $(this).data("src");
            console.log(videoSrc); // For debugging
        });

        $('#videoModal').on('shown.bs.modal', function (e) {
            // Using template literals for cleaner string concatenation
            $("#video").attr('src', `${videoSrc}?autoplay=1&modestbranding=1&showinfo=0`);
        });

        $('#videoModal').on('hide.bs.modal', function (e) {
            // Resetting src when modal hides
            $("#video").attr('src', videoSrc);
        });
    });

    // Causes carousel
    $(".causes-carousel").owlCarousel({
        autoplay: true,
        animateIn: 'slideInDown',
        animateOut: 'slideOutDown',
        items: 1,
        smartSpeed: 450,
        dots: false,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Causes progress
    $('.causes-progress').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", `${$(this).attr("aria-valuenow")}%`); // Using template literals
        });
    }, { offset: '80%' });

    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });

    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        center: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    // Related post carousel
    $(".related-slider").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        nav: true,
        navText: [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            }
        }
    });

    // --- New Modern JavaScript Functionality ---
    // Smooth Scroll to Section (Example: clicking a link to scroll to an element)
    // This assumes you might have links like <a href="#about-section">Nosotros</a>
    // and an element with id="about-section"
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default jump

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Modern scroll behavior, much cleaner than older animate() methods
                window.scrollTo({
                    top: targetElement.offsetTop - (document.querySelector('.navbar')?.offsetHeight || 0), // Adjust for sticky header
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for lazy loading images or triggering animations on scroll
    // This is an example; you would apply it to specific elements.
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const dataSrc = img.getAttribute('data-src');
                if (dataSrc) {
                    img.src = dataSrc; // Load the image
                    img.removeAttribute('data-src'); // Remove data-src
                }
                observer.unobserve(img); // Stop observing once loaded
            }
        });
    });

    // Example usage: Add data-src attribute to images you want to lazy load
    // <img data-src="img/your-image.jpg" src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" alt="...">
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });


})(jQuery);