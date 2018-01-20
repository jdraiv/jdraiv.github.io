
function appendProjects(category, projectsContainer){
    let url = "https://raw.githubusercontent.com/jdraiv/jdraiv.github.io/master/data.json";

    fetch(url)
        .then((data) => {
            return data.json();
        })
        .then((j) => {
            let jsonData = j[0];

            for (let item of Object.entries(jsonData)) {
                if (item[0] === category){
                    $(`#${projectsContainer}`).empty();
                    for (let value of item[1]) {

                        $(`#${projectsContainer}`).append(`<li class="project-li"><a class="project-a" href="${value['link']}" target="_blank">${value['name']}</a></li>`)
                    }
                }
            }
        })
        .catch(() => {
            console.log("Error")
        })
}
