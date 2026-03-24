-- database: AULA-08SQLite/2-0Banco.db

CREATE TABLE alunos (
    id INTEGER PRIMARY KEY,
    nome TEXT,
    idade INTEGER
);


CREATE TABLE livros (
    id INTEGER PRIMARY KEY,
    titulo TEXT NOT NULL,
    paginas INTEGER
);

DROP TABLE IF EXISTS alunos;

CREATE TABLE professor (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    idade INTEGER
);

PRAGMA table_info(livros)

CREATE TABLE cursos (
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL
);

DROP TABLE IF EXISTS livros;

CREATE TABLE materias(
    id INTEGER NOT NULL PRIMARY KEY,
    nome TEXT NOT NULL,
    carga_hor INTEGER
);

PRAGMA table_info(materias);

CREATE TABLE filmes(
    id INTEGER NOT NULL PRIMARY KEY,
    titlo TEXT NOT NULL,
    duracao INTEGER
);

DROP TABLE IF EXISTS filmes;

CREATE TABLE produtos(
    id INTEGER NOT NULL PRIMARY KEY,
    nome TEXT NOT NULL,
    preco REAL
);

PRAGMA table_info(produtos);

CREATE TABLE clientes(
    id INTEGER NOT NULL PRIMARY KEY,
    nome TEXT NOT NULL,
    telefone TEXT
);

CREATE TABLE vendas(
    id INTEGER NOT NULL PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    valor REAL NOT NULL
);

DROP TABLE IF EXISTS clientes;

PRAGMA table_info(vendas);


CREATE TABLE veiculo(
    placa TEXT NOT NULL UNIQUE,
    nome TEXT NOT NULL
);

CREATE TABLE usuario (
    id INTEGER PRIMARY KEY, 
    nome TEXT NOT NULL,  
    email TEXT UNIQUE,           
    ativo INTEGER DEFAULT 1
);

DROP TABLE IF EXISTS vendas;
