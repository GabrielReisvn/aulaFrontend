-- database: 2-0Banco.db

-- Exercício 1: Insira um curso com id=1, nome='HTML', aulas=10.
------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES (1,'HTML', 10,1);


-- Exercício 2: Insira um curso com id=2, nome='CSS', sem especificar aulas (deve usar o padrão 0).
-------------------------------------------------------------------
INSERT INTO cursos (id,nome)
VALUES (2,'css');


-- Exercício 3: Selecione todos os dados da tabela cursos.
--------------------------------------------------------------------
SELECT * FROM cursos;


-- Exercício 4: Tente inserir um curso com id=1 novamente (id duplicado). O que acontece? (apenas observe)
-------------------------------------------------------------------
INSERT INTO cursos (id,nome) VALUES (1,'css'); 


-- Exercício 5: Insira um curso com id=3, nome='JavaScript', aulas=15, ativo=1.
-------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (3,'javascript', 15,1);


-- Exercício 6: Insira um curso com id=4, nome='Python', usando aspas duplas nos identificadores.
-------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (4,"python", 15,1);
-- sem erro, pois o SQLite aceita aspas duplas para identificadores.

-- Exercício 7: Selecione todos os cursos novamente.
------------------------------------------------------------------
SELECT * FROM cursos;

-- Exercício 8: Insira múltiplos cursos de uma vez: (5, 'React', 20), (6, 'Vue', 18), (7, 'Angular', 22).
-------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (5,'React', 20,1),
        (6,'Vue', 18,1),
        (7,'Angular', 22,1);

-- Exercício 9: Tente inserir um curso sem informar o nome (campo NOT NULL). Qual o erro?
-------------------------------------------------------------------
INSERT INTO cursos (id,aulas, ativo)
VALUES  (9, 10,1);

-- erro de not null, pois o campo nome é obrigatório e não pode ser nulo.

-- Exercício 10: Insira um curso com id=8, nome='SQL', aulas=12, e use indentação adequada.
-------------------------------------------------------------------
INSERT INTO cursos (id, nome, aulas, ativo)
VALUES (8, 'SQL', 12, 1);

-- Exercício 11: Selecione apenas a coluna 'nome' de todos os cursos.
-------------------------------------------------------------------
SELECT nome FROM cursos;

-- Exercício 12: Insira um curso com id=9, nome='NoSQL', e deixe aulas com valor padrão.
-------------------------------------------------------------------
INSERT INTO cursos (id,nome)
VALUES (9,'NoSQL');

-- Exercício 13: Insira um curso com id=10, nome='TypeScript', aulas=16, ativo=0.
-------------------------------------------------------------------

INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (10,'TypeScript', 16,0);

-- Exercício 14: Selecione todos os cursos que estão ativos (ativo = 1). (Desafio: use WHERE, mesmo não explicado)
-------------------------------------------------------------------
SELECT * FROM cursos WHERE ativo = 1;

-- Exercício 15: Insira um curso com id=11, nome='PHP', utilizando aspas simples para o nome.
-------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (11,'PHP', 20,1);

-- Exercício 16: Insira dois cursos de uma vez: (12, 'C#', 20) e (13, 'Ruby', 15).
-------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (12,'C#', 20,1),
        (13,'Ruby', 15,1);
-- Exercício 17: Selecione todos os cursos com mais de 15 aulas.
-------------------------------------------------------------------
SELECT * FROM cursos WHERE aulas > 15;

-- Exercício 18: Tente inserir um curso com id nulo. O que acontece?
-------------------------------------------------------------------
INSERT INTO cursos (id,nome,aulas, ativo)
VALUES  (NULL,'Curso Nulo', 10,1);

-- erro no campo id, pois é a chave primária e não pode ser nula.


-- Exercício 19: Insira um curso com id=14, nome='Kotlin', aulas=18, ativo=1, usando aspas duplas em tudo.
-------------------------------------------------------------------
INSERT INTO cursos (id, nome, aulas, ativo)
VALUES (14, "Kotlin", 18, 1);

-- erro pois o exercicio acima foi adicionado o id 14 onde a id não pode ser nula.
-- porem as aspas duplas não fazem nenhum erro no codigo


DELETE FROM cursos; 
