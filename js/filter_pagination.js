$(function () {
    loadContent();

    function loadContent(){
        $.ajax({
            url: "https://hook.integromat.com/9ca02mx6nuoa3aoka1fdil1xsh9omytv",
            type: "GET",
            header: ("Accept: application/json"),
            success: function (data) {
                console.log(data)
    
                /*create project cards*/
                let results = data.results;
                $.each(results, function (i) {
                    let card_template = `<div class="project">
                                            <img src="${results[i].img}" alt="Design">
                                            <div class="text__item project__text">
                                                <h2>${results[i].title}</h2>
                                                <p>${results[i].description}</p>
                                            </div>
                                            <div class="block__link">
                                                <a href="project.html" target="_blanck">Learn More <span class="arrow arrow-mod">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="30.707" height="8.359" viewBox="0 0 30.707 8.359">
                                                <g data-name="Group 1009" transform="translate(14630.5 -1306.05)">
                                                    <line id="Line_79" data-name="Line 79" x2="28.882" transform="translate(-14630.5 1310.267)" stroke-width="1"/>
                                                    <path id="Path_802" data-name="Path 802" d="M-14595.613,1298.32l7.66,3.73-7.66,3.73" transform="translate(-12.982 8.18)" stroke-width="1"/>
                                                </g>
                                            </svg></span></a>
                                            </div>
                                        </div>`
    
                    $('.container__projects').append(card_template);
                });
    
                /*pages pagination*/
                // if (data.next != null) {
                //     let next_arrow = $('#next'),
                //         page_template = `<li><span class="current"><a href="${data.next}">${parseInt(data.next)}</a></span></li>`;
    
                //     $('.pages').append(page_template);
                //     next_arrow.attr('href', data.next);
                // }
    
                // if (data.prev != null) {
                //     let prev_arrow = $('#prev');
                //     prev_arrow.attr('href', data.prev);
                // }
    
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log(jqXHR);
                console.log(textStatus);
                console.log(errorThrown);
            }
        });
    }

    $("#pagination-container").pagination({
        items: $('.container__projects projects'),
        itemsOnPage: 6,
        pages: 3,
        hrefTextPrefix: '?page-',
        prevText: `<img src="../img/projects/prev-arrow.png" alt="prev arrow">`,
        nextText: `<img src="../img/projects/next-arrow.png" alt="next arrow">`,


        // This is the actual page changing functionality.
        onPageClick: function (pageNumber) {
            // We need to show and hide `tr`s appropriately.
            var showFrom = 4 * (pageNumber - 1);
            var showTo = showFrom + 4;

            // We'll first hide everything...
            items.hide().slice(showFrom, showTo).show();
            loadContent();
        }
    });

    /*filter for projects (PORTFOLIO)*/
    const filter = $('.filter');

    $(filter).on('click', function () {
        $(filter).removeClass("active");
        $(this).addClass("active");
    });

});