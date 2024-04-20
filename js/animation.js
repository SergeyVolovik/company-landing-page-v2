$(function () {
    let file = $('#file'),
        upload__clip = $('#clip'),
        file__home = $('#file__home'),
        upload__clip__home = $('#clip__home'),
        file__val = '';


    /*video player custom button*/
    $('.playpause').parent().on('click', function () {
        this.paused ? this.play() : this.paused;
    });

    $('.video').parent().on('click', function () {
        if ($(this).children('.video').get(0).paused) {
            $(this).children('.video').get(0).pause();
            $(this).children('.playpause').fadeOut();
        } else {
            $(this).children('.video').get(0).play();
            $(this).children('.playpause').fadeIn();
        }
    });

    /*show and hide custom player button by click on built-in play button*/
    $('.video').on('playing', function () {
        $('.playpause').fadeOut(400);
    });
    $('.video').on('pause', function () {
        $('.playpause').fadeIn(400);;
    });


    /*check uploading file (modal)*/
    $(upload__clip).on('click', function () {
        file.click();
    });

    /*add color for clip*/
    const defaultColorModal = (() => {
        $('#clip_modal').css({
            'fill': '#A9A9A9'
        });
    });

    const successColorModal = (() => {
        $('#clip_modal').css({
            'fill': '#666666'
        });
    });

    /*check format and size of uploading file*/
    $(file).on('change', function () {
        file__val = '';

        let format__file = file.val().split('.').pop();
        const validExtensions = ['gif', 'png', 'jpg', 'jpeg', 'xlsx', 'xls', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'pdf', 'zip', 'rar'];

        if ($.inArray(format__file, validExtensions) !== -1) {
            if (this.files[0].size < 25388608) {
                if (file.val()) {
                    successColorModal();
                    alert(`Success! ${file.val().replace(/C:\\fakepath\\/i, '')}`);
                    file__val = this.files[0];
                } else {
                    defaultColorModal();
                }
            } else {
                alert("Oops, the file you're trying to upload is too big. Max size is 25MB");
                defaultColorModal();
            }
        } else {
            if (file.val() == undefined || file.val() == null || format__file == '') {
                defaultColorModal();
            } else {
                alert(`Sorry, but you can't upload file .${format__file}`);
                defaultColorModal();
            }
        }

    });


    /*check uploading file (home)*/
    $(upload__clip__home).on('click', function () {
        file__home.click();
    });

    /*add color for clip*/
    const defaultColor = (() => {
        $('#clip_2_home').css({
            'fill': '#A9A9A9'
        });
    });

    const successColor = (() => {
        $('#clip_2_home').css({
            'fill': '#666666'
        });
    });

    $(file__home).on('change', function () {
        file__val = '';

        let format__file = file__home.val().split('.').pop();
        const validExtensions = ['gif', 'png', 'jpg', 'jpeg', 'xlsx', 'xls', 'doc', 'docx', 'ppt', 'pptx', 'txt', 'pdf', 'zip', 'rar'];

        if ($.inArray(format__file, validExtensions) !== -1) {
            if (this.files[0].size < 25388608) {
                if (file__home.val()) {
                    successColor();
                    alert(`Success! ${file__home.val().replace(/C:\\fakepath\\/i, '')}`);
                    file__val = this.files[0];
                } else {
                    defaultColor();
                }
            } else {
                alert("Oops, the file you're trying to upload is too big. Max size is 25MB");
                defaultColor();
            }
        } else {
            if (file__home.val() == undefined || file__home.val() == null || format__file == '') {
                defaultColor();
            } else {
                alert(`Sorry, but you can't upload file .${format__file}`);
                defaultColor();
            }
        }
    });

});