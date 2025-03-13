// Array armazenar a lista de amigos
let amigos = [];

// Função para inserir nome
function adicionarAmigo() {
    let amigoInput = document.getElementById("amigo").value.trim();

    // Verificando se o campo não está vazio
    if (amigoInput === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }        
    
    // Adicionando nome ao array
    amigos.push(amigoInput);

    // Atualizando a lista de amigos na tela
    atualizarLista();
    
    // Redefinindo o campo de entrada
    document.getElementById("amigo").value = "";
}

// Função para atualizar lista
function atualizarLista() {
    let lista = document.getElementById("listaAmigos");

    // Limpa lista existente
    lista.innerHTML = "";

    // Loop para percorrer a array e criar elementos de lista para cada nome
    for (let i = 0; i < amigos.length; i++) {
        let novoItem = document.createElement("li");
        novoItem.textContent = amigos[i];
        lista.appendChild(novoItem);
    }
}

// Função para sortear um amigo
function sortearAmigo() {
    
    // Verificando se há amigos
    if (amigos.length === 0) {
        alert("Não há amigos para sortear.");
        return;
    }

    // Gerando um índice para selecionar um array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtendo o nome sorteado
    let amigoSorteado = amigos[indiceAleatorio];

    // Exibindo resultado do nome sorteado
    document.getElementById("resultado").innerHTML = "O amigo secreto sorteado é: " + amigoSorteado;

    // Zerando a lista de amigos após sorteio
    amigos = [];
    atualizarLista();   
}