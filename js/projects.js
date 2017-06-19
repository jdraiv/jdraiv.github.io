function getProjects(){
    $.ajax({
        dataType: 'json',
        type: 'GET',
        url: 'https://raw.githubusercontent.com/jdraiv/jdraiv.github.io/master/projects.json',
        success: function(data){
            Object.keys(data).forEach(function(key){
                name = data[key].name;
                link = data[key].link;
                $('.projects-url').append('<li class="projects-url-item"><a href="' + link + '">' + name + '</a></li>')
                console.log(name, link)
            });
        }
    });
}

getProjects();