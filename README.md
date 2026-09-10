# Dashboard do Gestor — Logística Gamificada

## 📌 Contexto do Projeto
Este projeto é um protótipo de dashboard de gestão logística gamificada, focado no acompanhamento de desempenho de motoristas. Ele apresenta um ranking baseado em pontos, indicadores de eficiência e conquistas desbloqueadas.

O painel foi desenvolvido como inspirado no processo seletivo para a vaga de Desenvolvedor(a) Frontend do edital IMD/MAGISDEV.

## 🚀 Demonstração
- **Live Demo (Frontend):** [Substitua pelo link da Vercel/Netlify]
- **API Mockada:** [Substitua pelo link do Render/MockAPI]

*(Adicione aqui um GIF ou print do dashboard finalizado)*
![Screenshot do Dashboard](./caminho-para-imagem.png)

## 🛠️ Tecnologias Utilizadas
- **React (JavaScript)**: Biblioteca principal para construção da interface estruturada em componentes.
- **Vite**: Ferramenta de build e servidor de desenvolvimento otimizado.
- **Recharts**: Biblioteca declarativa para visualização de dados e gráficos.
- **json-server**: Simulação de API REST (banco de dados em `db.json`) para consumir dados no frontend com fetch real.
- **CSS Puro**: Estilização nativa e responsiva.

## ⚙️ Como rodar localmente

### 1. Pré-requisitos
Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na máquina.

### 2. Instalação
Clone o repositório e instale as dependências:
```bash
git clone https://github.com/seu-usuario/dashboard-gestor.git
cd dashboard-gestor
npm install
```

### 3. Execução
O projeto exige que o frontend e a API rodem simultaneamente em dois terminais distintos.

**Terminal 1 (Inicia a API Mockada):**
```bash
npm run mock-api
```
*(A API ficará disponível em http://localhost:3001)*

**Terminal 2 (Inicia o Frontend):**
```bash
npm run dev
```
*(O frontend ficará disponível em http://localhost:5173)*
