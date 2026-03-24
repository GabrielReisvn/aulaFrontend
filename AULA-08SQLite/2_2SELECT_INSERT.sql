-- database: 2-0Banco.db
-- ========================
-- 1. criação de tabela para exemplo 
-- ========================
DROP TABLE IF EXISTS alunos;
-- Antes de inserir ou consultar, precisamos de uma tabela. 
-- Vamos criar uma tabela chamada "cursos" com algumas restrições

CREATE TABLE cursos(
    id INTEGER PRIMARY KEY,
    nome TEXT NOT NULL,
    aulas INTEGER DEFAULT 0, -- numero de aulas padrão 0
    ativo INTEGER DEFAULT 1  -- 1- ativo, 0 - inativo
);

--------------------------------------------
--------------------------------------------
-- INSERT INTO - inserindo dados

INSERT INTO cursos (id,nome,aulas, ativo)
VALUES (1,'HTML', 10,1); 

-- é possivel omitir coluna que aceitam null ou tem default
INSERT INTO cursos (id,nome)
VALUES (2,'css');

--inserindo mais de um registro
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (3,'javascript', 12,1),
        (4,'python', 15,1),
        (5,'java',25,1);


--------------------------------------------
--------------------------------------------
-- SELECT - Consultando dados
SELECT * FROM cursos;
-- selecionando coluna especifica
SELECT nome FROM cursos;





SELECT * FROM cursos WHERE nome = 'css' -- consulta por nome do curso