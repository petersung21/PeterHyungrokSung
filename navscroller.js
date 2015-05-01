$(function() {
    
    // Features Navigation

    var featuresNav = $("#features-nav");
    var featuresNavArrow = featuresNav.find('.arrow');
    var featuresNavHeight = $("#features-nav").outerHeight();

    if (window.innerHeight < 750) {
        featuresNav.addClass('compact');
        featuresNav.trigger("sticky_kit:detach").stick_in_parent({
            parent: $('#features-sections'),
            offset_top: -40
        });
        featuresNavHeight -= 40;
    } else {
        featuresNav.removeClass('compact');
        featuresNav.trigger("sticky_kit:detach").stick_in_parent({
            parent: $('#features-sections'),
            offset_top: 0
        });
    }

    var updateArrowPosition = function() {
        var activeItem = featuresNav.find('ul .active');
        var arrowWidth = 20;
        var arrowPosition = activeItem.offset().left + (activeItem.width() / 2) - (arrowWidth / 2);
        featuresNavArrow.css({"left": arrowPosition});
    };

    featuresNav.on('click', 'a', function(e) {
        e.preventDefault();
        var self = this;

        featuresNav.attr('data-scrolling', 'true');


        featuresNav.find('a.active').removeClass('active');
        $(self).addClass('active');
        updateArrowPosition();

        if ($($(self).attr('href')).hasClass('alternate')) {
            featuresNavArrow.addClass('alternate');
        } else {
            featuresNavArrow.removeClass('alternate');
        }

        $('html,body').animate({
          scrollTop: $($(self).attr('href')).offset().top - featuresNavHeight + 4
        }, 300, function() {
            featuresNav.attr('data-scrolling', 'false');
        });
    });

    var sectionOffsets = {};
    var sections = $('#features-sections [data-featured-section]');
        
    function calculateSectionOffsets() {
        sectionOffsets = {};
        sections.each(function(i) {
            sectionOffsets[$(this).attr('id')] = {top: parseInt($(this).offset().top), height: parseInt($(this).outerHeight())};
        });
    }
    
    function highlightOnScroll() {
        
        var top = $(window).scrollTop();

        if (featuresNav.attr('data-scrolling') == 'true') {
            return false;
        }
        
        if (featuresNav.find('a.active').length == 0) {
            featuresNav.find('li:first-child a').addClass('active');
        }
            
        $.each(sectionOffsets, function(key, value) {
            if (value.top >= top - value.height + featuresNavHeight) {
                featuresNav.find('a').removeClass('active');
                featuresNav.find('a[href="#' + key + '"]').addClass('active');

                if ($('#' + key).hasClass('alternate')) {
                    featuresNavArrow.addClass('alternate');
                } else {
                    featuresNavArrow.removeClass('alternate');
                }

                updateArrowPosition();
                return false;
            }
        });
    }
    $(window).bind('load', function() {
        $(document.body).trigger("sticky_kit:recalc");
    });
    $(window).bind('load resize', calculateSectionOffsets);
    $(window).bind('load scroll resize', highlightOnScroll);

    
});