function Connexion(){

    if(!$("#mail").val()||!$("#mdp").val()){
        alert("Veuillez remplir les champs");
    }else{

        var mail=$("#mail").val().trim();
        var mdp=$("#mdp").val().trim();

        if((mail=="" && mdp=="")){
            alert("Veuillez remplir les champs");
        }else{
            if(mailIsValid(mail)&&mdpIsValid(mdp)){
                alert("ok");
            }else{
                alert("Un des champs un incorrect");
            }
        }

    }

}

function mailIsValid(mail){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mail);
}

function mdpIsValid(mdp){
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(mdp);
}