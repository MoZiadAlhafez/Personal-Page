/*global $, window*/
$(function () {
   
    'use strict';
    
    
    // Body Padding And Height Carousal
    
    var heightNavbar = $('.navbar').height(),
    
        windowHeight = $(window).height(),
    
        bodyP = $('body');

    $(bodyP).css({paddingTop: heightNavbar});

    $('.slider .carousel').height(windowHeight - heightNavbar);
    

    // Smooth Scroll
    
    $('.navbar .navbar-nav li a').click(function (e) {
       
        e.preventDefault();
        
        $('html, body').animate({
           
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
            
        }, 1000);
    });
        
    
    // Sync Link With Sections
    
    $(window).scroll(function () {
   
        $('.block').each(function () {
       
            if ($(window).scrollTop() >= $(this).offset().top - 20) {
                        
                var blockId = $(this).attr('id');
            
                $('.navbar .navbar-nav li a').removeClass('them-active');
            
                $('.navbar .navbar-nav li a[data-scroll="' + blockId + '"]').addClass('them-active');
            }
        });
    });
    
    
    // Add & Remove Class Active To Anchor In Navbar
        
    $('.navbar .navbar-nav li a').click(function () {
   
        $(this).addClass('them-active').parent().siblings().find('a').removeClass('them-active');
    
    });
    
    
    // Animate Skills Progress Bar When Scroll 
    
    $(window).scroll(function () {
   
        $('.skills').each(function () {
       
            if ($(window).scrollTop() >= $(this).offset().top) {
        
                $('.prog-skill span').each(function () {
            
                    $(this).animate({
        
                        width: $(this).attr('data-prog')
        
                    }, 1500, function () {
        
                        $('.prog-skill span i').fadeIn(1000);
        
                    });
    
                });
                
            }
        
        });
    
    });
    
        
    // Reset Defulte Mode To Portfolio 
    
    $('.work').mouseleave(function () {
   
        $(this).css({transform: 'translateZ(0)'});
    
    });
        
    
    // Label To Top OnFocuse Input
    
    $('.form form div input').on('focusout', function () {
        
        if ($(this).val() !== '') {
            
            $(this).parent().addClass('ph-on');
            
        } else {
            
            $(this).parent().removeClass('ph-on');
        }
    });
    
    
    // Label To Top OnFocuse Textarea
    
    $('.form form div textarea').on('focusout', function () {
        
        if ($(this).val() !== '') {
            
            $(this).parent().addClass('msg-on');
            
        } else {
            
            $(this).parent().removeClass('msg-on');
        }
    });
    
    
    // Fixed Menu 
    
    var widthMenu = $('.fixed-menu').outerWidth();
    
    $('.fixed-menu').css({left: -widthMenu});

    $('.fixed-menu a').click(function () {
        
        
    
        $(this).parent('.fixed-menu').toggleClass('is-visible');
        
        if ($(this).parent('.fixed-menu').hasClass('is-visible')) {
            
            $('.fixed-menu a .fa-cog').fadeOut(800, function () {
                
                $('.fixed-menu a .fa-angle-left').css({display: 'block'}, function () {
                
                    $('.fixed-menu a .fa-angle-left').fadeIn(800)
            
                });
                
            });
            
            $(this).parent('.fixed-menu').animate({
                
                left: 0
                
            }, 1000, function () {
                
                $('.dark-background').fadeIn(500);
                
            });
            
        } else {
            
            $('.fixed-menu a .fa-angle-left').fadeOut(800, function () {
                
                $('.fixed-menu a .fa-cog').fadeIn(800)
            
            });
            
            $(this).parent('.fixed-menu').animate({
                
                left: '-' + $('.fixed-menu').innerWidth()
                
            }, 1000, function () {
                
                $('.dark-background').fadeOut(200);
                
            });
        
        }
        
    });
    
    $('.dark-background').click(function () {
        
        $('.fixed-menu a .fa-angle-left').fadeOut(800, function () {
                
                $('.fixed-menu a .fa-cog').fadeIn(800)
            
            });
           
        $('.fixed-menu').animate({
                
        left: '-' + $('.fixed-menu').innerWidth()
                
        }, 1000, function () {
           
            $('.dark-background').fadeOut(200);
            
        });
            
            
    });
                             
    // Change Colors 
    
    $('.change-color li').click(function () {
       
        $('body').attr('change-colors', $(this).data('color'));
        
        
    });
    
    
    // Smooth Scroll Plugin
    
    var scroll = new SmoothScroll('a[href*="#-"]', {
               
            speed: 1000,
            easing: 'easeInOutQuad'
        });
    
    

    
});


























    
    
    












    

























