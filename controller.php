<?php

// Aplicação Minha Biblioteca
// @Autor: Lenon Soares
// 03.09.2020

// Conexão com o banmco de dados
function conectDB(){
    $conexao = mysqli_connect("localhost","root","","minha_biblioteca");
    if(!$conexao){
		echo "<h2>Erro na conexao com a base dados </h2>"; 
		echo "<h2> Erro " . mysqli_connect_errno() . ".</h2>";
		die();
	}
	$conexao->set_charset("utf8");
	return $conexao;
}
// Monta estrutura pra exibir tabela
function mostraTabela($qtdeColunas, $consulta, $func){
	
	$i = 0;
	$tab = "";
	while( $row = mysqli_fetch_array($consulta, MYSQLI_NUM) ) 
	{
		$tab .=  "<tr valign = center>";
		$tab .=  "<td class=tabv><img src=assets/sp.gif width=10 height=8></td>";
		for($j = 0; $j < $qtdeColunas; $j++){
			$tab .=  "<td class = tabv width = 180 height = 6>".htmlspecialchars($row[$j])."&nbsp;</td>"; 
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
    $conexao = conectDB();				
    $result  =  mysqli_query($conexao, "SELECT nome FROM ".$tabela);
    $retData  =  array();
    while( $row = mysqli_fetch_array($result, MYSQLI_NUM) ){
      $retData[] = $row[0];
    }
    echo json_encode($retData);
    $conexao->close();
}


// Tratamentos dos livros
function mostraLivros(){
    $conexao = conectDB();
    $result = mysqli_query($conexao,"SELECT livros.titulo,autor,editora,dataPublicacao FROM livros ORDER BY livros.titulo"); 		
    mostraTabela(4,$result,'Livro');    
    $conexao->close();                       
}

    if(@$_REQUEST['action'] == "recuperaLivros")     //recupera lista de nomes das cidades
	    {
		    recuperaTabela('livros');
        }
    
    if(@$_REQUEST['action'] == "insLivro")  //insere novo Usuario
	{
		$conexao = conectDB();
		$tituloLivro = $conexao->real_escape_string($_REQUEST['titulo']);
		$autorLivro = $conexao->real_escape_string($_REQUEST['autor']);
		$editoraLivro = $conexao->real_escape_string($_REQUEST['editora']);
		$dataPublicao = $conexao->real_escape_string($_REQUEST['publicacao']);
		
		
		
		mysqli_query($conexao,"INSERT INTO livros (titulo,autor,aditora,publicacao) VALUES('$tituloLivro','$autorLivro','$editoraLivro','$dataPublicao');");
		$conexao->close();			
		mostraLivros();
    }
    
    if(@$_REQUEST['action'] == "delliv")     //remove Usuario
	{
		$conexao = conectDB();
		$res = mysqli_query($conexao,"DELETE FROM livros WHERE livros.cod  =  ".$_REQUEST['id']);
		$conexao->close();
		mostraLivros();
    }
    if(@$_REQUEST['action'] == "mostraLivros")
	{
		mostraLivros();
	}



?>