function ajaxCall(stringCall, callback){
    var httpRequest = new XMLHttpRequest;
        
        httpRequest.onreadystatechange = function(){
            if (httpRequest.readyState === 4) {
                if (httpRequest.status === 200) {
                  callback(httpRequest.responseText);
                }
            }
        };
        httpRequest.open('GET', stringCall);
        httpRequest.send();
    }

    function inicializa(){
        ajaxCall("games.php?action=recuperaLivros", inicializaSelecaoLivros);
        ajaxCall("games.php?action=recuperaClientes", inicializaSelecaoClientes);
        ajaxCall("games.php?action=mostraLivros", listaLivros);
        ajaxCall("games.php?action=mostraClientes", listaClientes);
        ajaxCall("games.php?action=mostraLocacoes", listaLocacoes);
    }


    // INICIALIZA SELECAO
    function inicializaSelecao(lis, elemento){
        var x = document.getElementById(elemento);	
        var jsonData = JSON.parse(lis);
    
        for(i=0;i<jsonData.length;i++){
            var option = document.createElement("option");
            option.text = jsonData[i];
            option.value = i + 1;
            if (i==0) option.selected = true;
            x.add(option);
        }
    }

    // INICIALIZA SELECAO DE LIVROS
    function inicializaSelecaoLivros(listLivros){  
        inicializaSelecao(listLivros, "listaLivros");
    }

    // INICIALIZA SELECAO DE CLIENTES
    function inicializaSelecaoClientes(listClientes){  
        inicializaSelecao(listClientes, "listaClientes");
    }



    // LIVROS
    function insereLivro(){	
        var id_titulo = document.getElementById('id_titulo').value;
        var id_autor = document.getElementById('id_autor').value;
        var id_editora = document.getElementById('id_editora').value;
        var id_publicacao = document.getElementById('id_publicacao').value;
        
        //limpeza dos campos do form	
        document.getElementById('id_titulo').value = '';
        document.getElementById('id_autor').value = '';
        document.getElementById('id_editora').value = '';
        document.getElementById('id_publicacao').value = '';
        
        
        parms= "&titulo="+id_titulo+"&autor="+id_autor+"&editora="+id_editora+"&publicacao="+id_publicacao;	
        ajaxCall("controller.php?action=insLivro" + parms, listaLivros);
    }
    function deletaLivro(codLivro){
		ajaxCall("controller.php?action=delliv&id=" + codLivro, listaLivros);
    }
    function listaLivros(lisLivros){
	    document.getElementById('tab_livros').innerHTML = lisLivros;
    }

    // CLIENTES
    function insereCliente(){	
        var id_nome = document.getElementById('id_nome').value;
        var id_endereco = document.getElementById('id_endereco').value;
        var id_email = document.getElementById('id_email').value;
        var id_telefone = document.getElementById('id_telefone').value;
        
        //limpeza dos campos do form	
        document.getElementById('id_nome').value = '';
        document.getElementById('id_endereco').value = '';
        document.getElementById('id_email').value = '';
        document.getElementById('id_telefone').value = '';
        
        
        parms= "&nome="+id_nome+"&endereco="+id_endereco+"&email="+id_email+"&telefone="+id_telefone;	
        ajaxCall("controller.php?action=insCliente" + parms, listaClientes);
    }
    function deletaCliente(codCliente){
		ajaxCall("controller.php?action=delclic&id=" + codCliente, listaClientes);
    }
    function listaClientes(lisCliente){
	    document.getElementById('tab_clientes').innerHTML = lisCliente;
    }

    // LOCAÇÕES
    function insereCliente(){	
        var id_obra = document.getElementById('listaLivros').value;
        var id_dtRetirada = document.getElementById('id_dtRetirada').value;
        var id_locatario = document.getElementById('listaClientes').value;
        var id_dtDevolucao = document.getElementById('id_dtDevolucao').value;
        
        //limpeza dos campos do form	
        document.getElementById('listaLivros').value = 0;
        document.getElementById('id_dtRetirada').value = '';
        document.getElementById('listaClientes').value = 0;
        document.getElementById('id_dtDevolucao').value = '';
        
        
        parms= "&obra="+id_obra+"&dataRetirada="+id_dtRetirada+"&locatario="+id_locatario+"&id_dtDevolucao="+id_dtDevolucao;	
        ajaxCall("controller.php?action=insLocacao" + parms, listaLocacoes);
    }
    function deletaLocacao(codLocacao){
		ajaxCall("controller.php?action=delloc&id=" + codLocacao, listaLocacoes);
    }
    function listaLocacoes(lisLocacoes){
	    document.getElementById('tab_locacoes').innerHTML = lisLocacoes;
    }






























    function insereJogo(){	
        var i_jog = document.getElementById('i_jog').value;
        var i_fab = document.getElementById('listaFabricantes').value;
        var i_pre = document.getElementById('i_pre').value;
        var i_cla = document.getElementById('i_cla').value;
        //limpeza dos campos do form
        document.getElementById('i_jog').value = '';
        document.getElementById('listaFabricantes').value = 0;
        document.getElementById('i_pre').value = '';
        document.getElementById('i_cla').value = '';
        
        parms= "&jogo="+i_jog+"&fab="+i_fab+"&preco="+i_pre+"&class="+i_cla;
        ajaxCall("games.php?action=insJogo" + parms, listaJogos);
    }