function getCategoryData(categoryName, projectContainer){
    let url = "https://raw.githubusercontent.com/jdraiv/jdraiv.github.io/master/data.json";

    fetch(url)
        .then(function(data) {
            // Return json data
            return data.json();
        })
        .then(function(j) {
            let jsonData = j[0][categoryName];
            // Remove li elements
            $(projectContainer).empty();
            for (let dic of jsonData) {
                // Append new data
                $(projectContainer).append(`<li class="project-li"><a href="${dic['link']}" target="_blank">${dic['name']}</a></li>`);
            }
        })
        .catch(function(){
            // Error
            console.log("Error");
        });

}
