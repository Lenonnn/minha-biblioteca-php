function ajaxCall(stringCall, callback) {
    var httpRequest = new XMLHttpRequest;

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === 4) {
            if (httpRequest.status === 200) {
                callback(httpRequest.responseText);
            }
        }
    };
    httpRequest.open('GET', stringCall);
    httpRequest.send();
}

function inicializa() {
    ajaxCall("controller.php?action=recuperaLivros", inicializaSelecaoLivros);
    ajaxCall("controller.php?action=recuperaClientes", inicializaSelecaoClientes);
    ajaxCall("controller.php?action=mostraLivros", listaLivros);
    ajaxCall("controller.php?action=mostraClientes", listaClientes);
    ajaxCall("controller.php?action=mostraLocacoes", listaLocacoes);
}


// Insere
// LIVROS
function insereLivro() {
    var id_titulo = document.getElementById('id_titulo').value;
    var id_autor = document.getElementById('id_autor').value;
    var id_editora = document.getElementById('id_editora').value;
    var id_publicacao = document.getElementById('id_publicacao').value;

    //limpeza dos campos do form	
    document.getElementById('id_titulo').value = '';
    document.getElementById('id_autor').value = '';
    document.getElementById('id_editora').value = '';
    document.getElementById('id_publicacao').value = '';


    parms="&titulo="+id_titulo+"&autor="+id_autor+"&editora="+id_editora+"&dataPublicacao="+id_publicacao;
    ajaxCall("controller.php?action=insLivro" + parms, listaLivros);
}
// CLIENTES
function insereCliente() {
    var id_nome = document.getElementById('id_nome').value;
    var id_endereco = document.getElementById('id_endereco').value;
    var id_email = document.getElementById('id_email').value;
    var id_telefone = document.getElementById('id_telefone').value;
    //limpeza dos campos do form	
    document.getElementById('id_nome').value = '';
    document.getElementById('id_endereco').value = '';
    document.getElementById('id_email').value = '';
    document.getElementById('id_telefone').value = '';

    parms="&nome="+id_nome+"&endereco="+id_endereco+"&email="+ id_email+"&telefone="+id_telefone;
    ajaxCall("controller.php?action=insCliente" + parms, listaClientes);
}
// LOCAÇÕES
function cadastraLocacao() {
    var id_obra = document.getElementById('allLivros').value;
    var id_dtRetirada = document.getElementById('id_dtRetirada').value;
    var id_locatario = document.getElementById('allClientes').value;
    var id_dtDevolucao = document.getElementById('id_dtDevolucao').value;

    //limpeza dos campos do form	
    document.getElementById('allLivros').value = 0;
    document.getElementById('id_dtRetirada').value = '';
    document.getElementById('allClientes').value = 0;
    document.getElementById('id_dtDevolucao').value = '';

    parms = "&obra="+id_obra+"&locatario="+id_locatario+"&dataRetirada="+id_dtRetirada+"&id_dtDevolucao="+id_dtDevolucao;
    ajaxCall("controller.php?action=insLocacao" + parms, listaLocacoes);
}


//DELETA
//Livros
function deletaLivro(codLivro) {
    ajaxCall("controller.php?action=delliv&id=" + codLivro, listaLivros);
}
//Clientes
function deletaCliente(codCliente) {
    ajaxCall("controller.php?action=delcli&id=" + codCliente, listaClientes);
}
// Locação
function deletaLocacao(codLocacao) {
    ajaxCall("controller.php?action=delloc&id=" + codLocacao, listaLocacoes);
}


// INICIALIZA SELECAO
function inicializaSelecao(lis, elemento) {
    var x = document.getElementById(elemento);
    var jsonData = JSON.parse(lis);

    for (i = 0; i < jsonData.length; i++) {
        var option = document.createElement("option");
        option.text = jsonData[i];
        option.value = i + 1;
        if (i == 0) option.selected = true;
        x.add(option);
    }
}

// INICIALIZA SELECAO DE LIVROS
function inicializaSelecaoLivros(listAllLivros){  
    inicializaSelecao(listAllLivros, "allLivros");
}
// INICIALIZA SELECAO DE CLIENTES
function inicializaSelecaoClientes(listAllClientes) {
    inicializaSelecao(listAllClientes, "allClientes");
}

//LISTA LIVROS
function listaLivros(lisLivros) {
    document.getElementById('tab_livros').innerHTML = lisLivros;
}
//LISTA CLIENTES
function listaClientes(lisCliente) {
    document.getElementById('tab_clientes').innerHTML = lisCliente;
}
//CLIENTES
function listaLocacoes(lisLocacoes) {
    document.getElementById('tab_locacoes').innerHTML = lisLocacoes;
}

