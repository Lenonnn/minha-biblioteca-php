<?php

// Aplicação Minha Biblioteca
// @Autor: Lenon Soares
// 03.09.2020

// Conexão com o banco de dados
function conectDB(){
    $con = mysqli_connect("localhost","root","","minha_biblioteca");
    if(!$con){
		echo "<h2>Erro na conexao com a base dados </h2>"; 
		echo "<h2> Erro " . mysqli_connect_errno() . ".</h2>";
		die();
	}
	$con->set_charset("utf8");
	return $con;
}

// Monta estrutura pra exibir tabela
function mostraTabela($qtdeColunas, $consulta, $func){
	$i = 0;
	$tab = "";
	while( $row = mysqli_fetch_array($consulta, MYSQLI_NUM) ) 
	{
		$tab .=  "<tr valign = center>";
		$tab .=  "<td class = tabv ><img src=assets/sp.gif width=10 height=8></td>";
		for($j = 0; $j < $qtdeColunas; $j++){
			$tab .=  "<td class = tabv width = 270 height = 6>".htmlspecialchars($row[$j])."&nbsp;</td>"; 
		}		
		$tab .=  "<td class = tabv><button type = \"button\" onclick = \"deleta".$func."(".htmlspecialchars($row[$j]).")\">X</button></td>";
		$tab .=  "<td class = tabv></td>";
		$tab .=  "</tr>";
		$i++;
	}
	$tab .=  "<p></p>";
	echo $tab;
}


// Busca dados de tabela no banco de dados
function recuperaTabela($tabela){
    $con = conectDB();				
    $result  =  mysqli_query($con, "SELECT nome FROM ".$tabela);
    $retData  =  array();
    while( $row = mysqli_fetch_array($result, MYSQLI_NUM) ){
      $retData[] = $row[0];
    }
    echo json_encode($retData);
    $con->close();
}


// Busca livros no db
function mostraLivros(){
    $con = conectDB();
    $result = mysqli_query($con,"SELECT livros.nome,autor,editora,dataPublicacao,livros.cod 
	FROM livros ORDER BY livros.nome"); 		
    mostraTabela(4,$result,'Livro');    
    $con->close();                       
}
// busca clientes no db
function mostraClientes(){
    $con = conectDB();
    $result = mysqli_query($con,"SELECT clientes.nome,endereco,email,telefone,clientes.cod 
	FROM clientes ORDER BY clientes.nome"); 		
    mostraTabela(4,$result,'Cliente');    
    $con->close();                       
}
// busca locações no db
function mostraLocacoes(){
    $con = conectDB();
    $result = mysqli_query($con,"SELECT livros.nome, clientes.nome, locacao.dataRetirada, locacao.dataDevolucao, locacao.cod
								 FROM locacao
								 INNER JOIN clientes ON clientes.cod = locacao.locatario
								 INNER JOIN livros ON livros.cod = locacao.obra"); 		
    mostraTabela(4,$result,'Locacoes');    
    $con->close();                       
}

   
    // Insere livro
    if(@$_REQUEST['action'] == "insLivro")
	{
		$con = conectDB();
		$tituloLivro = $con->real_escape_string($_REQUEST['titulo']);
		$autorLivro = $con->real_escape_string($_REQUEST['autor']);
		$editoraLivro = $con->real_escape_string($_REQUEST['editora']);
		$dataPublicao = $con->real_escape_string($_REQUEST['dataPublicacao']);

		mysqli_query($con,"INSERT INTO livros (nome,autor,editora,dataPublicacao) VALUES('$tituloLivro','$autorLivro','$editoraLivro','$dataPublicao');");
		$con->close();			
		mostraLivros();
	}
	// Insere cliente
    if(@$_REQUEST['action'] == "insCliente")
	{
		$con = conectDB();
		$nomeCli = $con->real_escape_string($_REQUEST['nome']);
		$endCli = $con->real_escape_string($_REQUEST['endereco']);
		$emailCli = $con->real_escape_string($_REQUEST['email']);
		$phoneCli = $con->real_escape_string($_REQUEST['telefone']);

		mysqli_query($con,"INSERT INTO clientes (nome,endereco,email,telefone) VALUES('$nomeCli','$endCli','$emailCli','$phoneCli');");
		$con->close();			
		mostraClientes();
	}
	// Cadastra locação
    if(@$_REQUEST['action'] == "insLocacao")
	{
		$con = conectDB();
		$tituloObra = $con->real_escape_string($_REQUEST['obra']);
		$nomeCliente = $con->real_escape_string($_REQUEST['locatario']);
		$dataLocacao = $con->real_escape_string($_REQUEST['dataRetirada']);
		$dataDevolucao = $con->real_escape_string($_REQUEST['id_dtDevolucao']);

		mysqli_query($con,"INSERT INTO locacao (obra,locatario,dataRetirada,dataDevolucao) VALUES('$tituloObra','$nomeCliente','$dataLocacao','$dataDevolucao');");
		$con->close();			
		mostraLocacoes();
	}
	

	// Deleta livro
    if(@$_REQUEST['action'] == "delliv")     
	{
		$con = conectDB();
		$res = mysqli_query($con,"DELETE FROM livros WHERE livros.cod  =  ".$_REQUEST['id']);
		$con->close();
		mostraLivros();
	}
	// Deleta Cliente
	if(@$_REQUEST['action'] == "delcli")     
	{
		$con = conectDB();
		$res = mysqli_query($con,"DELETE FROM clientes WHERE clientes.cod  =  ".$_REQUEST['id']);
		$con->close();
		mostraClientes();
	}
	// Deleta locacao
	if(@$_REQUEST['action'] == "delloc")     
	{
		$con = conectDB();
		$res = mysqli_query($con,"DELETE FROM locacao WHERE locacao.cod  =  ".$_REQUEST['id']);
		$con->close();
		mostraLocacoes();
	}
	

	//Recupera Livros
	if(@$_REQUEST['action'] == "recuperaLivros")   
	{
		recuperaTabela('livros');
	}
	//Recupera Clientes
	if(@$_REQUEST['action'] == "recuperaClientes")   
	{
		recuperaTabela('clientes');
	}



	//Exibe livros
    if(@$_REQUEST['action'] == "mostraLivros")
	{
		mostraLivros();
	}
	//Exibe clientes
	if(@$_REQUEST['action'] == "mostraClientes")   
	{
		mostraClientes();
	}
	//Exibe clientes
	if(@$_REQUEST['action'] == "mostraLocacoes")   
	{
		mostraLocacoes();
	}


?>