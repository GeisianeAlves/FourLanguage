

class ReusableCode {
    constructor() {
        this.initializeScrollEffects();
        this.initializeTyped([
            {
                element: ".typing1",
                strings: [
                    "I'm Paul Reed and this is Julia Bell. We're from zap Productions.", 
                    "Diana Edison is from CCC, and David Clark is from Safeguard.", 
                    "Alan Parker and George Carter are from NorthNet."
                ],
                options: {
                    typeSpeed: 50,
                    loop: false
                }
            },
            {
                element: ".typing2",
                strings: [
                    "Sarah Taylor comes from Chicago.",
                    "Sharon works in the Melbourne office.",
                    "James Smith and Ross Milburn live in the USA."
                ],
                options: {
                    typeSpeed: 50,
                    loop: false
                }
            },
            {
                element: ".typing3",
                strings: [
                    "Gabriel loves swimming. He goes every morning.",
                    "Page hates running. She finds it boring.",
                    "Jacob likes watching football, but he can't play very well."
                ],
                options: {
                    typeSpeed: 50,
                    loop: false
                }
            },
            {
                element: ".typing4",
                strings: [
                    "Scott flew back last Friday.",
                    "Leonard and Carolina drove from London to Barcelona.",
                    "Daniel, Lucas and Jack ate at a good restaurant last night."
                ],
                options: {
                    typeSpeed: 50,
                    loop: false
                }
            },
            {
                element: ".typing5",
                strings: [
                    "(Conteúdo será inserido para este nível",
                    "..."
                ],
                options: {
                    typeSpeed: 50,
                    loop: false
                }
            },
            {
                element: ".typing6",
                strings: [
                    "Multi millionaire Goran Tatié is just 36 years old. He comes from Split in Croatia, but today he lives in Victoria, Australia, and has Australian nationality.", 
                    "Mr. Tatié owns half of the Orion Group. His colleague, James Bernard, owns the other 50%.", 
                    "Orion companies have total sales of about $3billion a year, and about 50,000 people work for the group."
                ],
                options: {
                    typeSpeed: 50,
                    loop: false
                }
            },
        ]);
        this.initializeMenuButton();
        this.initializeCarousel();
    }

    initializeScrollEffects() {
        $(window).scroll(() => {
            if (this.scrollY > 20) {
                $('.navbar').addClass("sticky");
            } else {
                $('.navbar').removeClass("sticky");
            }
            if (this.scrollY > 500) {
                $('.scroll-up-btn').addClass("show");
            } else {
                $('.scroll-up-btn').removeClass("show");
            }
        });

        $('.scroll-up-btn').click(() => {
            $('html').animate({scrollTop: 0});
        });
    }

    initializeTyped(typingConfigs) {
        typingConfigs.forEach(config => {
            var typed = new Typed(config.element, {
                strings: config.strings,
                typeSpeed: config.options.typeSpeed || 50,
                backSpeed: config.options.backSpeed || 30,
                loop: config.options.loop || false,
            });
        });
    }

    initializeMenuButton() {
        $('.menu-btn').click(() => {
            $('.navbar .menu').toggleClass("active");
            $('.menu-btn i').toggleClass("active");
        });
    }

    initializeCarousel() {
        $('.carousel').owlCarousel({
            margin: 20,
            loop: true,
            autoplayTimeOut: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                600: {
                    items: 2,
                    nav: false
                },
                1000: {
                    items: 3,
                    nav: false
                }
            }
        });
    }
}

$(document).ready(() => {
    new ReusableCode();
});
