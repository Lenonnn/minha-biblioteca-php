-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 01-Set-2020 às 03:12
-- Versão do servidor: 10.4.13-MariaDB
-- versão do PHP: 7.4.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `minha_biblioteca`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `clientes`
--

CREATE TABLE `clientes` (
  `cod` int(10) NOT NULL,
  `nome` varchar(55) NOT NULL,
  `endereco` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `telefone` varchar(16) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `clientes`
--

INSERT INTO `clientes` (`cod`, `nome`, `endereco`, `email`, `telefone`) VALUES
(1, 'Florentina Almeida', 'Rua das passas, bairro quatro, nº 10, Pelotas', 'floretina@gmail.com', '+55 51 30303030'),
(2, 'Marcio Almeida', 'Rua das passas, bairro quatro, nº 20, Pelotas', 'almeidamarcio@gmail.com', '+55 51 988776655'),
(3, 'André Quexada', 'Rua de los libres, bairro libertad, nº 318, Porto ', 'andrequexada@gmail.com', '+55 51 978564568'),
(4, 'Marta Silva', 'Rua praia de beçlas, nº 2400 ap. 222, Porto Alegre', 'msilva80@gmail.com', '+55 51 988332200'),
(7, 'Jose da Dunas', 'Rua do rio do Sinos, nº 100, São Leopoldo', 'zezindadunas@gmail.com', '+55 51 987654321'),
(8, 'Ronaldin do RS', 'Rua dos migué, bairro de Lami, nº 171, Porto Alegr', 'elbruxo10@gmail.com', '+55 51 917171717');

-- --------------------------------------------------------

--
-- Estrutura da tabela `livros`
--

CREATE TABLE `livros` (
  `cod` int(12) NOT NULL,
  `titulo` varchar(60) NOT NULL,
  `autor` varchar(60) NOT NULL,
  `editora` varchar(30) NOT NULL,
  `dataPublicacao` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `livros`
--

INSERT INTO `livros` (`cod`, `titulo`, `autor`, `editora`, `dataPublicacao`) VALUES
(1, 'Dom Casmurro', 'Machado de Assis', 'Livraria Garnier (primeira edi', '1899'),
(2, 'Dom Casmurro', 'Machado de Assis', 'Livraria Garnier (primeira edi', '1899'),
(3, 'Dom Casmurro', 'Machado de Assis', 'Livraria Garnier (primeira edi', '1899'),
(4, 'Quincas Borba', 'Machado de Assis', 'Livraria Garnier (segunda ediç', '1891'),
(5, 'Claro enigma', 'Carlos Drummond de Andrade', 'José Olympio', '1951'),
(6, 'Claro enigma', 'Carlos Drummond de Andrade', 'José Olympio', '1951'),
(7, 'Claro enigma', 'Carlos Drummond de Andrade', 'José Olympio', '1951'),
(8, 'Iracema', 'José de Alencar', 'Typ. de Viana & Filhos', '1865'),
(9, 'O sítio do pica-pau amarelo - Reinações de Narizinho', 'Monteiro Lobato', 'Várias', '1921'),
(10, 'O sítio do pica-pau amarelo - Caçadas de Pedrinho', 'Monteiro Lobato', 'Várias', '1922'),
(11, 'O sítio do pica-pau amarelo - O Saci', 'Monteiro Lobato', 'Várias', '1927'),
(12, 'O sítio do pica-pau amarelo - Memórias da Emília', 'Monteiro Lobato', 'Várias', '1930'),
(13, 'O sítio do pica-pau amarelo - Emília no País da Gramática ', 'Monteiro Lobato', 'Várias', '1931'),
(14, 'O sítio do pica-pau amarelo - Aritmética da Emília', 'Monteiro Lobato', 'Várias', '1932'),
(15, 'O sítio do pica-pau amarelo - Fábulas', 'Monteiro Lobato', 'Várias', '1933'),
(16, 'O sítio do pica-pau amarelo - Histórias Diversas', 'Monteiro Lobato', 'Várias', '1933'),
(17, 'O sítio do pica-pau amarelo - Histórias de Tia Nastácia', 'Monteiro Lobato', 'Várias', '1934'),
(18, 'O sítio do pica-pau amarelo - Peter Pan', 'Monteiro Lobato', 'Várias', '1935'),
(19, 'O sítio do pica-pau amarelo - Viagem ao Céu', 'Monteiro Lobato', 'Várias', '1935'),
(20, 'O sítio do pica-pau amarelo - Viagem ao Céu', 'Monteiro Lobato', 'Várias', '1935'),
(21, 'O sítio do pica-pau amarelo - O Poço do Visconde', 'Monteiro Lobato', 'Várias', '1935'),
(22, 'O sítio do pica-pau amarelo - O Picapau Amarelo', 'Monteiro Lobato', 'Várias', '1936'),
(23, 'O sítio do pica-pau amarelo - As Aventuras de Hans Staden', 'Monteiro Lobato', 'Várias', '1936'),
(24, 'O sítio do pica-pau amarelo - Dom Quixote das Crianças', 'Monteiro Lobato', 'Várias', '1937'),
(25, 'O sítio do pica-pau amarelo - Geografia de Dona Benta', 'Monteiro Lobato', 'Várias', '1937'),
(26, 'O sítio do pica-pau amarelo - A Chave do Tamanho', 'Monteiro Lobato', 'Várias', '1937'),
(27, 'O sítio do pica-pau amarelo - A Reforma da Natureza', 'Monteiro Lobato', 'Várias', '1939'),
(30, 'O sítio do pica-pau amarelo - O Minotauro', 'Monteiro Lobato', 'Várias', '1939'),
(31, 'O sítio do pica-pau amarelo - Os Doze Trabalhos de Hércules', 'Monteiro Lobato', 'Várias', '1941'),
(32, 'O sítio do pica-pau amarelo - História do Mundo para as Cria', 'Monteiro Lobato', 'Várias', '1942'),
(35, 'O sítio do pica-pau amarelo - Serões de Dona Benta', 'Monteiro Lobato', 'Várias', '1944'),
(39, 'O sítio do pica-pau amarelo - História das Invenções', 'Monteiro Lobato', 'Várias', '1947');

-- --------------------------------------------------------

--
-- Estrutura da tabela `locacao`
--

CREATE TABLE `locacao` (
  `cod` int(11) NOT NULL,
  `obra` int(11) NOT NULL,
  `locatario` int(11) NOT NULL,
  `dataRetirada` varchar(10) NOT NULL,
  `dataDevolucao` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `locacao`
--

INSERT INTO `locacao` (`cod`, `obra`, `locatario`, `dataRetirada`, `dataDevolucao`) VALUES
(1, 39, 1, '20.01.2020', '27.01.2020'),
(2, 6, 4, '07.07.2019', '14.07.2019'),
(3, 11, 7, '03.12.2018', '10.12.2018'),
(4, 14, 8, '03.05.2019', '10.05.2019');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `clientes`
--
ALTER TABLE `clientes`
  ADD PRIMARY KEY (`cod`);

--
-- Índices para tabela `livros`
--
ALTER TABLE `livros`
  ADD PRIMARY KEY (`cod`);

--
-- Índices para tabela `locacao`
--
ALTER TABLE `locacao`
  ADD PRIMARY KEY (`cod`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `clientes`
--
ALTER TABLE `clientes`
  MODIFY `cod` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de tabela `livros`
--
ALTER TABLE `livros`
  MODIFY `cod` int(12) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT de tabela `locacao`
--
ALTER TABLE `locacao`
  MODIFY `cod` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
