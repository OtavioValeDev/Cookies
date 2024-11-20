// //tudo isso só para fazer funcionar os botão de cookie
var cookie_message = document.getElementById('cookie-message');
var btn_accept = document.getElementById('accepted');
var btn_decline = document.getElementById('unaccepted');
var products = document.querySelectorAll('input[type="checkbox"]');

// Verifica se os produtos foi dado
if (!localStorage.getItem('cookie')) {
    cookie_message.classList.add('mostrar');
} else {
    // Se os produtos foi dado, carrega os favoritos
    carregaProdutos();
}

// Ação para quando os usuário aceita
btn_accept.addEventListener('click', () => {
    salvaProdutos(); // Salva os produtos
    salvaProdutos_Marcados(); // Salva os favoritos
});

// Ação para quando os usuário recusa
btn_decline.addEventListener('click', () => {
    localStorage.removeItem('cookie'); // Remove os produtos
    cookie_message.classList.remove('mostrar'); // Remove a mensagem
});
//acaba aqui somente o funcionamento da mensagem, abaixo é para funcionar a lista

function salvaProdutos() {
    localStorage.setItem('cookie', 'true');
    cookie_message.classList.remove('mostrar');
}

function carregaProdutos() {
    var favorites = localStorage.getItem('favorites');
    if (favorites) {
        var favoriteProducts = favorites.split(',');
        products.forEach((checkbox) => {
            if (favoriteProducts.includes(checkbox.id)) {
                checkbox.checked = true;
            }
        });
    }
}

function salvaProdutos_Marcados() {
    var productSelected = [];
    products.forEach((checkbox) => {
        if (checkbox.checked) {
            productSelected.push(checkbox.id);
        }
    });
    localStorage.setItem('favorites', productSelected.join(','));
}



// Salva os favoritos quando os usuário alterar os checkboxes
products.forEach((checkbox) => {
    checkbox.addEventListener('change', salvaProdutos_Marcados);
});
