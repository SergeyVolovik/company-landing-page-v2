$(function () {
    /*Privacy Policy 
    ==================================================*/

    $('[data-scroll]').on('click', function (event) {
        event.preventDefault();

        let elem_Id = $(this).data('scroll'),
            elem_off_set = $(elem_Id).offset().top;

        $('html, body').animate({
            scrollTop: elem_off_set - 50
        }, 300);

        setTimeout(function () {
            event.preventDefault();
        }, 200);
    });

});