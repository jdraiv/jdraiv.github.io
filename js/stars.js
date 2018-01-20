function randomPositions(range){

    function roundNumber(num) {
        return Math.round(num)
    }

    // Positions container
    let positions = [];
    let count = 0;

    while (count <= range){

        // Random positions variables
        let ranWidth = roundNumber(Math.random() * (0, 99));
        let ranHeight = roundNumber(Math.random() * (0, 99));
        let starSize = roundNumber(Math.random() * (3, 6));

        // Push values to the container
        positions.push([ranWidth, ranHeight, starSize]);

        // Update count variable
        count += 1
    }
    return positions;
}

function appendDivs(containerName, positionsArray){
    let divsContainer = document.getElementById(containerName);

    for (let array of positionsArray){

        /*
        You taught me the courage of stars before you left.
        How light carries on endlessly, even after death.
        */

        let newStar = $('<div class="star"></div>').css({
            'left': `${array[0]}%`,
            'top': `${array[1]}%`,
            'width': `${array[2]}px`,
            'height': `${array[2]}px`
        });

        newStar.appendTo(divsContainer);
    }
}


appendDivs("intro-section-container", randomPositions(35));

