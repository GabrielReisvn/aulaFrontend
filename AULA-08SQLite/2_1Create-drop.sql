-- database: C:\Users\Aluno\Desktop\Aluno\AULA-08SQLite\2-0Banco.db

-- =============================
-- 1.CREaTE TABLE
-- =============================

-- exemplo1 tabela siples sem tipos definidos
CREATE TABLE table1 (id, nome, idade);

-- =============================
-- exemplo2 tabela com tipos definidos
CREATE TABLE table2 (
    id INTEGER PRIMARY KEY, -- chave primária, auto-incremento
    nome TEXT NOT NULL,  -- campo obrigatório
    email TEXT UNIQUE,   -- campo único, não pode haver dois registros com o mesmo email
    salario REAL,        -- pode ser nulo, apenas um numeroreal
    ativo INTEGER DEFAULT 1
);

-- =============================
-- DROP TABLE
-- =============================
-- comando drop table é usado para excluir uma tabela do banco de dados
DROP TABLE IF EXISTS table1; -- exclui a tabela table1 se ela existir
DROP TABLE IF EXISTS table2; -- exclui a tabela table2 se ela existir
DROP TABLE IF EXISTS alunos; -- exclui a tabela alunos se ela existir

CREATE TABLE alunos (
    matricula INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    CPF TEXT UNIQUE,
    data_nasc TEXT,
    ativo INTEGER DEFAULT 1
);

-- =======================
-- PRAGMA
-- exibir estrutura da tabela
PRAGMA table_info(alunos);


