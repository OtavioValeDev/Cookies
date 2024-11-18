//revisa
// var cookie_message=document.getElementById('cookie-message');
// var cookie_btn=document.getElementById('cookie-btn');

//declaração do cookie
document.cookie="lista=true;expires=0.5;path=/";


//que poha estamos fazendo?
// funcoes de aceitar e nao aceitar
function aceitaCookie(){
    const aceita='';//dps muda
    if(aceita==="true"){
        //carrega os favoritos
    }else{
        //retira o aviso e não salva os favoritos
        document.getElementsByClassName("cookie-message").classList.remove("hidden");
    }
}