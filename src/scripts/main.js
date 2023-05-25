$(document).ready(function(){
    const endpoint = "https://api.github.com/users/VictorSilva654"

    fetch(endpoint).then(function(answer){
        return answer.json();
        
    }).then(function(json){
        $("#profile-name").html(json.name);
        //É similar ao InnerHTML do JS puro

        $("#profile-username").html(json.login);

        $("#profile-avatar").attr("src", json.avatar_url);
        //Mudando o src da imagem

        $("#repos").html(json.public_repos);

        $("#followers").html(json.followers);

        $("#following").html(json.following);

        $("#link").attr("href", json.html_url);
        //Mudando o href do link

    }).catch(function(error){
        alert(`Ocorreu um erro: ${error}`);
    })
})