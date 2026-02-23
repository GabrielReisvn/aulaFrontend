# Instruções para Agentes de IA - aulaFrontend

## Visão Geral do Projeto

**Propósito**: Repositório educacional de aulas de desenvolvimento Frontend e JavaScript, organizado em módulos progressivos.

**Estrutura**: 
- `aula1/` e `aula2/` - Projetos HTML/CSS com foco em layout, flexbox e responsividade
- `AULAjs1/`, `AULAjs2/`, `AULAjs3/` - Progressão de conceitos JavaScript (variáveis → tipos de dados → estruturas de controle)

---

## Padrões de Código Descobertos

### JavaScript
- **Nomenclatura**: camelCase para variáveis/funções (`let nomeCompleto`, `comidafavorita`); PascalCase para objetos (`let User`, `let computador`)
- **Declarações de variáveis**: Preferência moderna (evitar `var`; usar `let` para mutáveis, `const` para imutáveis)
- **Template literals**: Padrão para string interpolation (ex: `` `Bem-vindo a ${cidade}!` ``)
- **Exemplos educacionais**: Código contém comentários numerados (`//1`, `//2`) para exercícios estruturados
- **Estruturas**: 
  - **Objetos simples** (`AULAjs2/objetos.js`): Propriedades acessadas via notação de ponto (`User.login`, `aluno.nome`)
  - **Arrays** (`AULAjs3/`): Métodos nativos (`.push()`, `.pop()`, `.splice()`, `.includes()`, `.length`)
  - **Condicionais**: Estrutura if/else simples com comparadores (`>`, `===`, `>=`)

### HTML/CSS
- **Layout**: Flexbox como padrão (`display: flex`; `gap` para espaçamento; `flex: 1` para divisão de espaço)
- **Responsividade**: Mobile-first com breakpoints em 768px e 500px (`@media`)
- **Nomeação CSS**: kebab-case com prefixo descritivo (`.topo-site`, `.card-content-main`, `.content-main`)
- **Transições/Animações**: `transition` para hover effects (`transform: scale()`, `transform: rotate()`)
- **Classes semânticas**: Estrutura clara com header/main/section

---

## Fluxo de Trabalho

### Executando Código JavaScript
- **Node.js**: Usar Node para executar scripts educacionais (ex: `node AULAjs1/aula1.js`)
- **Server**: `AULAjs1/server.js` expõe servidor HTTP simples na porta 3000 (usando `node:http`)
- **Ambiente**: Workspace Windows PowerShell 5.1

### Atualizações de Código
- **Exemplos educacionais**: Adicionar novos exemplos numerados mantendo a estrutura de comentários
- **Exercícios**: Incluir `console.log()` para validar compreensão dos conceitos
- **Teste de sintaxe**: Executar via Node para verificar erros

---

## Contexto Educacional

Este é um **repositório de aulas**, não produção. Portanto:
- Código pode ser simplificado para fins pedagógicos
- Foco em clareza e exemplos práticos (não abstrações complexas)
- Exercícios numerados servem para aprendizado sequencial
- Exemplos de erros intencionais (ex: "const anoAtual = 2025; // Erro...") são documentação

---

## Referências Rápidas

- **Conceitos JS abordados**: Tipos de dados, variáveis (var/let/const), objetos, arrays, condicionais, operadores
- **Conceitos CSS abordados**: Flexbox, media queries, transições, animações keyframes
- **Arquivo chave**: `AULAjs2/tipos_de_dados.js` - guia completo de tipos (String, Number, Boolean, Object, Array, Null, Undefined)
- **Estruturas típicas**: Objetos com propriedades simples; arrays de primitivos; condicionais if/else básicas
