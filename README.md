📄 README.md — Estudo de Caso (Web + Mobile)
# 📘 Estudo de Caso – Aplicação Web e Mobile com Consumo de API

Este projeto foi desenvolvido como parte da atividade prática do módulo, seguindo o roteiro “Estudo de Caso com Rotas, Consumo de API e Testes Automatizados”.  
Ele é dividido em duas partes:

- **Web** → React + Vite + Vitest  
- **Mobile** → React Native + Expo  

O objetivo é simular um CRUD de **alunos**, com navegação, consumo de API REST e testes automatizados na versão web.

---

# 🗂 Estrutura do Repositório



/meu-estudo-caso
├── web/ → Aplicação React com Vite
└── mobile/ → Aplicação React Native com Expo


---

# 🌐 **Parte 1 — Aplicação Web (React + Vite)**

## 🚀 Tecnologias Utilizadas
- React → https://react.dev/  
- Vite → https://vitejs.dev/  
- React Router DOM → https://reactrouter.com  
- Axios → https://axios-http.com/  
- Material UI (MUI) → https://mui.com/  
- Vitest → https://vitest.dev/  
- React Testing Library → https://testing-library.com/docs/react-testing-library  

---

## 🔧 Funcionalidades
- Página inicial estilizada  
- Listagem de alunos  
- Cadastro de aluno  
- Edição de aluno  
- Exclusão de aluno  
- Navegação entre rotas  
- Consumo da API REST  
- Testes automatizados com Vitest + RTL  

---

## 🌐 API de Alunos
A aplicação consome a seguinte API pública:

- Documentação Swagger:  
https://proweb.leoproti.com.br/swagger-ui/index.html  

---

## ▶️ Como Rodar a Aplicação Web

```bash
cd web
npm install
npm run dev


Acesse: http://localhost:5173/

🧪 Como Executar os Testes (Vitest)
cd web
npm test


Os testes usam:

Vitest

React Testing Library

📱 Parte 2 — Aplicação Mobile (Expo + React Native)
🚀 Tecnologias Utilizadas

React Native → https://reactnative.dev/

Expo → https://expo.dev/

React Navigation → https://reactnavigation.org/

Axios → https://axios-http.com/

React Native Paper (opcional) → https://callstack.github.io/react-native-paper/

📲 Funcionalidades

Tela inicial com opções

Listagem de alunos

Detalhes do aluno selecionado

Navegação entre telas

Consumo da mesma API REST utilizada no Web

▶️ Como Rodar o Mobile
cd mobile
npm install
npx expo start


Escaneie o QR Code no Expo Go do celular.

☁️ Deploy da Aplicação Web (Vercel)
Passos:

Criar conta no Vercel → https://vercel.com

Conectar ao GitHub

Selecionar pasta web/

Confirmar build (framework: Vite)

Publicar

Tutorial em vídeo:
https://www.youtube.com/watch?v=e_92Fz99q18

🔀 Rotas Implementadas (Web)
Rota	Descrição
/	Página inicial
/alunos	Lista de alunos
/novo	Formulário de novo aluno
/editar/:id	Edição de aluno
🧭 Navegação (Mobile)
Tela	Descrição
Home	Tela inicial
Lista de Alunos	Mostra os alunos da API
Detalhes	Exibe dados de um aluno específico
📌 Como Executar Tudo do Zero
git clone https://github.com/SEU_USUARIO/meu-estudo-caso.git
cd meu-estudo-caso

Web:
cd web
npm install
npm run dev

Mobile:
cd mobile
npm install
npx expo start

📝 Créditos e Referências

React Router DOM – https://reactrouter.com

React Navigation – https://reactnavigation.org/

Axios – https://axios-http.com/

Vitest – https://vitest.dev/

Vercel – https://vercel.com/

API de Alunos – https://proweb.leoproti.com.br/swagger-ui/index.html

Video aulas recomendadas no roteiro

✅ Conclusão

Este estudo de caso permite praticar:

Criação de interfaces web e mobile

Consumo de API REST

Navegação entre telas

Testes automatizados

Deploy com Vercel

Organização de projeto full stack
