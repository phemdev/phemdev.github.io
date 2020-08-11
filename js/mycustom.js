var vHeight = $(window).height(),
    vWidth = $(window).width(),
    mylayercover = $('.mylayercover');

mylayercover.css({ "position": 'absolute', "top":0,"padding-top":vHeight*.5,"left":0,"height":vHeight,"width":vWidth});

var vHeight = $(window).height(),
    vWidth = $(window).width(),
    mylayercover2 = $('.mylayercover2');

mylayercover2.css({ "position": 'absolute', "top": 0, "padding-top": vHeight * .5, "left": 0, "height": vHeight, "width": vWidth });

// PBH 8/3/2020 BACKGROUND COLOR CHANGE ON SCROLLING
$(window).scroll(function () {

    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('.panel');

    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);

    $panel.each(function () {
        var $this = $(this);

        // if position is within range of this panel.
        // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
        // Remember we set the scroll to 33% earlier in scroll var.
        if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

            // Remove all classes on body with color-
            $body.removeClass(function (index, css) {
                return (css.match(/(^|\s)color-\S+/g) || []).join(' ');
            });

            // Add class of currently active div
            $body.addClass('color-' + $(this).data('color'));
        }
    });

}).scroll();
