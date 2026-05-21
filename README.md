# Automation QA - Playwright

Projeto de automação de testes E2E utilizando Playwright.

---

# Tecnologias

- Playwright
- JavaScript
- Node.js

---

# Objetivo do Projeto

Automatizar cenários de testes web utilizando:
- Execução paralela
- Hooks
- Tags
- Screenshots
- Debug
- Relatórios de execução

---

# Instalação

## Clonar o projeto

```bash
git clone https://github.com/brunolima/automation-playwright.git
```

## Instalar dependências

```bash
npm install
```

---

# Executando os testes

## Rodar todos os testes

```bash
npx playwright test
```

## Executar em modo UI

```bash
npx playwright test --ui
```

## Executar em modo debug

```bash
npx playwright test --debug
```

## Abrir relatório

```bash
npx playwright show-report
```

---

# Estrutura do Projeto

```txt
tests/               -> Cenários de teste
playwright-report/   -> Relatórios
test-results/        -> Evidências de execução
screenshot/          -> Screenshots
playwright.config.js -> Configurações do Playwright
```

---

# Funcionalidades Utilizadas

- Hooks (`beforeEach`, `afterEach`)
- Tags (`@smoke`, `@login`)
- Scroll em elementos
- Captura de screenshots
- Execução paralela
- Execução por browser

---

# Executando testes por tag

```bash
npx playwright test --grep "@login"
```

---

# Pipeline CI/CD

O projeto pode ser integrado com:
- GitHub Actions
- Jenkins
- GitLab CI
- Azure DevOps

---

# Autor

Bruno Lima
