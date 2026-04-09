# Portfólio Pessoal - Renan Ladislau

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)

Aplicação web desenvolvida para apresentar minha trajetória como desenvolvedor, incluindo formação, experiência, habilidades, projetos e canais de contato.

O projeto foi construído com React + Vite, com foco em navegação fluida, identidade visual moderna e experiência responsiva.

---

## Sobre o projeto

Este portfólio foi pensado para funcionar como vitrine profissional e central de contato.

Principais objetivos:

- Apresentar minha história na tecnologia de forma clara.
- Exibir projetos com contexto, stack e links externos.
- Facilitar conexão por e-mail, GitHub e LinkedIn.
- Oferecer uma experiência agradável em desktop e mobile.

---

## Funcionalidades

- Navegação por seções com rolagem suave.
- Destaque automático da seção ativa no menu.
- Seção inicial com efeito de digitação.
- Área de projetos com cards detalhados e botão Ver Mais.
- Formulário de contato com validação e integração via mailto.
- Ícones sociais e informações de localização.
- Estrutura modular com componentes reutilizáveis e CSS Modules.

---

## Tecnologias utilizadas

### Front-end

![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat-square&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=flat-square&logo=javascript&logoColor=F7DF1E)

- React 19
- Vite 7
- React Icons

### Estilização

![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![CSS Modules](https://img.shields.io/badge/CSS%20Modules-000000?style=flat-square&logo=cssmodules&logoColor=white)

- CSS
- CSS Modules

### Qualidade e tooling

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=flat-square&logo=eslint&logoColor=white)

- ESLint

---

## Estrutura do projeto

```text
.
|- public/
|- src/
|  |- assets/
|  |- components/
|  |  |- AboutMe/
|  |  |- Contact/
|  |  |- Experience/
|  |  |- footer/
|  |  |- Formation/
|  |  |- Habilities/
|  |  |- home_section/
|  |  |- navbar/
|  |  |- Projects/
|  |  |- title_section/
|  |- CSS/
|  |- App.jsx
|  |- main.jsx
|- index.html
|- package.json
|- vite.config.js
|- eslint.config.js
```

---

## Seções da aplicação

- Início
- Sobre
- Formação
- Experiência
- Habilidades
- Projetos
- Contato

---

## Como executar localmente

### 1. Clonar o repositório

```bash
git clone <URL_DO_REPOSITORIO>
cd RenanLadislau
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Rodar em modo desenvolvimento

```bash
npm run dev
```

### 4. Gerar build de produção

```bash
npm run build
```

### 5. Visualizar build local

```bash
npm run preview
```

---

## Scripts disponíveis

- `npm run dev` - inicia servidor local com hot reload.
- `npm run build` - gera versão otimizada para produção.
- `npm run preview` - serve localmente a build de produção.
- `npm run lint` - executa verificação de código com ESLint.

---

## Personalização rápida

Para adaptar o portfólio com novos dados:

- Atualize os projetos no componente `src/components/Projects/Projects.jsx`.
- Atualize links de contato em `src/components/Contact/Contact.jsx`.
- Ajuste títulos e textos da home em `src/components/home_section/WelcomeText.jsx`.
- Modifique navegação em `src/components/navbar/Navbar.jsx`.

---

## Roadmap

- Adicionar alternância de idioma (PT-BR/EN).
- Incluir filtros por tecnologia na seção de projetos.
- Integrar formulário de contato com API (sem depender de cliente de e-mail).
- Adicionar testes de componentes.

---

## Autor

Renan Ladislau

- GitHub: https://github.com/Reladislau
- LinkedIn: https://www.linkedin.com/in/renanladislau
- E-mail: renanladislau9@gmail.com

---

Se este projeto te ajudou ou inspirou, fique à vontade para deixar uma estrela no repositório.
