$(function () {

    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    const nav__toggle = $('#nav__toggle'),
        burger__item = $('.burger'),
        nav = $('#js__nav'),
        link__contact = $('#link__contact'),
        cookie__block = $('#cookie__consent'),
        cookie__consent = $('#cookie__confirm'),
        btn = $('#btn'),
        bg__modal = $('#bg__modal'),
        modal__content = $('.modal__content'),
        close__x = $('#close__x'),
        check__status = $('.checkmark'),
        form = $('#form1'),
        answer__section = $('#answer__section'),
        send__data = $('#send__data');

    /* cookie show block */
    setTimeout(function () {
        $(cookie__block).fadeIn(200);
    }, 1000);
    $(cookie__consent).on('click', function () {
        $(cookie__block).fadeOut(200);
    });

    /*show navigation bar on mobile and tablet devices */
    $(nav__toggle).add(link__contact).on('click', function (event) {

        event.preventDefault();
        nav.toggleClass('show', 200);
        burger__item.toggleClass('active');

        $(nav).on('scroll touchmove mousewheel', function (e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });

    });

    /*show/hide modal contact us window */
    const showModalWindow = (() => {
        setTimeout(function () {
            bg__modal.find(modal__content).css({
                transform: 'scale(1)'
            });
        }, 100);
        $('body').addClass('body-modal-open'); //when modal is open
    });

    const hideModalWindow = (() => {
        setTimeout(function () {
            $(bg__modal).removeClass('show-modal');
        }, 300);
        setTimeout(function () {
            bg__modal.find(modal__content).css({
                transform: 'scale(0)'
            });
        }, 100);
        $('body').removeClass('body-modal-open'); //when modal is closed
    });

    /*show model contact form */
    $(btn).add(link__contact).on('click', function (event) {
        event.preventDefault();
        bg__modal.addClass('show-modal');
        showModalWindow();
    });

    /*close model form by click on button close__x*/
    $(close__x).on('click', function (event) {
        event.preventDefault();
        hideModalWindow();
    });

    /*close model form by click outside*/
    $(modal__content).on('click', function (event) {
        event.stopPropagation();
    });

    $(bg__modal).on('click', function (event) {
        event.preventDefault();
        hideModalWindow();
    });

    /*close model form by click on key ESC*/
    $(document).on('keydown', function (event) {
        if (event.keyCode === 27) { // ESC
            hideModalWindow();
        }
    });

    /*function for custom checkbox*/
    $(check__status).on('click', function () {
        if ($(check__status).attr('checked') != 'checked') {
            $(check__status).attr('checked', true);
        } else {
            $(check__status).removeAttr('checked');
        }
    });

    /*prevent buttons from submitting forms*/
    $(form).on('submit', function () {
        return false;
    });

    function sendFormData(data) {

        if (data.name.length > 0 && data.company.length > 0 && data.email.length > 0) {

            let formData = new FormData();

            formData.append('name', data.name);
            formData.append('company', data.company);
            formData.append('email', data.email);

            if (data.message.length > 0) {
                formData.append('message', data.message);
            }

            if (data.file_data != undefined) {
                formData.append('file', data.file_data);
            }

            let settings = {
                "async": true,
                "crossDomain": true,
                "url": "https://api.gargoyle.ltd/overview/contact-us/",
                "method": "POST",
                "cache": false,
                "dataType": "json",
                "processData": false,
                "contentType": false,
                "mimeType": "multipart/form-data",
                "data": formData
            }

            $.ajax(settings).done(function () {
                block__form.css({
                    display: 'none'
                });

                answer__section.fadeIn();

                setTimeout(function () {
                    answer__section.css({
                        display: 'none'
                    });

                    block__form.fadeIn();
                }, 3500);
            });
        }
    }

    /*prevent buttons from submitting forms*/
    $(send__data).on('click', function () {
        let name = $('#name').val(),
            company = $('#company').val(),
            email = $('#email').val(),
            message = $('#message').val(),
            file_data = $('input[type=file]')[0].files[0],
            dt = {
                name,
                company,
                email,
                message,
                file_data
            };

        if (!$(form)[0].checkValidity()) {
            form.focus();
        } else {
            sendFormData(dt);
        }

    });

});