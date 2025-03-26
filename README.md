# 🏥 Veterinary University Clinic - Appointment System

## 📌 Sobre o Projeto
Este é um sistema fullstack para gerenciamento de agendamentos em uma clínica veterinária universitária. Ele permite que alunos, professores e clientes marquem consultas para seus animais de estimação, garantindo um atendimento eficiente e organizado.

## 🛠️ Tecnologias Utilizadas

### 🔹 Frontend
- [Next.js](https://nextjs.org/) - Framework React para SSR e SSG
- [Tailwind CSS](https://tailwindcss.com/) - Estilização eficiente e modular

### 🔹 Backend
- [NestJS](https://nestjs.com/) - Framework Node.js para API estruturada
- [Prisma ORM](https://www.prisma.io/) - Manipulação eficiente do banco de dados
- [PostgreSQL](https://www.postgresql.org/) - Banco de dados relacional

## 📂 Estrutura do Projeto

```
/veterinary-clinic
│── backend/          # API usando NestJS e Prisma
│   ├── src/
│   ├── prisma/
│   └── main.ts
│
│── frontend/         # Interface do usuário em Next.js
│   ├── pages/
│   ├── components/
│   ├── styles/
│   └── next.config.js
│
└── docker-compose.yml # Configuração para execução via Docker
```

## 🚀 Como Rodar o Projeto

### 🔹 Pré-requisitos
Antes de começar, você precisará ter instalado:
- [Node.js](https://nodejs.org/)
- [Docker](https://www.docker.com/) (opcional)
- [PostgreSQL](https://www.postgresql.org/)

### 🔹 Passos para executar localmente

#### 🔸 Clonando o repositório
```sh
git clone https://github.com/seu-usuario/veterinary-clinic.git
cd veterinary-clinic
```

#### 🔸 Configuração do BackendInstale as dependências e execute as migrações:
```sh
cd backend
npm install
npx prisma migrate dev
npm run start:dev
```

#### 🔸 Configuração do Frontend
1. Instale as dependências e execute o servidor de desenvolvimento:
```sh
cd frontend
npm install
npm run dev
```
2. Acesse o frontend em: `http://localhost:3000`

## 📌 Funcionalidades
✅ Agendamento de consultas
✅ Listagem e histórico de consultas
✅ Painel administrativo para gestão de horários e disponibilidade


## 📄 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para contribuir!

---
📩 **Contato:** Para dúvidas ou sugestões, entre em contato pelo [seu email] ou crie uma issue no repositório.

