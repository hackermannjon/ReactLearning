# League of Legends Projects

Este repositório contém três projetos relacionados ao League of Legends:

## 🌐 Links dos Projetos

### 🔗 **API (NestJS + Cloudflare Workers)**

-   **Link**: [API do League of Legends](https://lol-api-worker.seu-usuario.workers.dev)
-   **Descrição**: API backend desenvolvida em NestJS, hospedada no Cloudflare Workers
-   **Status**: ✅ Em funcionamento

### ⚔️ **Matchup Analyzer (React)**

-   **Link**: [https://matchup-fdh.pages.dev](https://matchup-fdh.pages.dev)
-   **Descrição**: Aplicação React para análise de confrontos entre campeões
-   **Status**: ✅ Em funcionamento

### 🏆 **Champion Hub (Angular)**

-   **Link**: [https://hub-8t9.pages.dev](https://hub-8t9.pages.dev)
-   **Descrição**: Hub de informações dos campeões do League of Legends
-   **Status**: ⚠️ **Problema no deploy - requer análise**

## ⚠️ Observações

O projeto **Champion Hub (Angular)** apresentou problemas durante o deploy no Cloudflare Pages. O build é executado com sucesso, mas a aplicação retorna erro 404 ao acessar as rotas.

**Possíveis causas:**

-   Configuração de roteamento para SPA (Single Page Application)
-   Arquivo `_redirects` não sendo incluído corretamente no build
-   Configuração do `angular.json` para assets

## 📁 Estrutura do Projeto

```
Project/
├── lol-api/                 # API NestJS + Cloudflare Workers
├── lol-champion-hub/        # Angular SPA
└── lol-matchup-analyzer/    # React SPA
```

## 🚀 Como executar localmente

### API (NestJS)

```bash
cd Project/lol-api
npm install
npm run dev
```

### Champion Hub (Angular)

```bash
cd Project/lol-champion-hub
npm install
ng serve
```

### Matchup Analyzer (React)

```bash
cd Project/lol-matchup-analyzer
npm install
npm start
```

---

**Desenvolvido como parte do aprendizado em React, Angular e APIs modernas** 🎮
