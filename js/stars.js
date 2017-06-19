var windowWidth = $(window).width();
var windowHeight = $(window).height();


function randomPositions(wWidth,wHeight){
    ranWidth = Math.random() * (0, 99);
    ranWidth = Math.round(ranWidth);

    ranHeight = Math.random() * (0,95);
    ranHeight = Math.round(ranHeight);

    starSize = Math.random() * (3,5);
    starSize = Math.round(starSize);


    $newStar = $('<div class="star"></div>').css({
        'left': +  (ranWidth)  + '%',
        'top': + (ranHeight)  + '%',
        'width': + (starSize) + 'px',
        'height': + (starSize) + 'px'
    });

    $newStar.appendTo('.front-page-container')
}


function killTheDarkness(){
    randomPositions(windowWidth,windowHeight);
}


var stars = 0;
while(stars < 35){
    killTheDarkness();
    stars = stars + 1;
}