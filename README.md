# 🚀 Service Clean 360 - Website Oficial

## ⚠️ ESTRUTURA CORRETA NEXT.JS

Este projeto usa **src/app/** (não app/ na raiz).
Esta é a estrutura CORRETA que está funcionando no ambiente original.

## 🔧 Instalação

### 1. Verificar Node.js
```bash
node --version
# Precisa: v18.17.0 ou superior
```

### 2. Instalar Dependências  
```bash
npm install
```

### 3. Executar Desenvolvimento
```bash
npm run dev
```

### 4. Abrir Navegador
```
http://localhost:3000
```

## 🏗️ Build para Produção

### Opção 1: Build Normal
```bash
npm run build
npm start
```

### Opção 2: Build Sem Lint (se houver erros)
```bash
npm run build -- --no-lint
npm start
```

## 📁 Estrutura do Projeto
```
service-clean-360-website/
├── src/                  ← Diretório fonte
│   ├── app/             ← App Router (CORRETO)
│   │   ├── layout.tsx   ← Layout principal
│   │   ├── page.tsx     ← Página inicial
│   │   ├── globals.css  ← Estilos globais
│   │   ├── about/       ← Página sobre
│   │   ├── contact/     ← Página contacto
│   │   └── services/    ← Página serviços
│   ├── components/      ← Componentes React
│   ├── lib/            ← Utilitários  
│   └── hooks/          ← Hooks customizados
├── public/             ← Arquivos estáticos
├── package.json        ← Dependências
├── next.config.ts      ← Configuração Next.js
└── tsconfig.json       ← Configuração TypeScript
```

## 📞 Contactos Configurados
- **Telefone:** +351 918 571 805
- **WhatsApp:** +351 256 935 288 (botão fixo no ecrã)
- **Email:** geralserviceclean@gmail.com
- **Instagram:** @serviceclean360

## 🎯 Funcionalidades
- ✅ 4 páginas completas
- ✅ Botão WhatsApp fixo sempre visível
- ✅ Formulários integrados
- ✅ Design responsivo
- ✅ Português de Portugal
- ✅ SEO otimizado

## ☁️ Deploy

### Vercel (Recomendado)
1. Criar conta: https://vercel.com
2. Conectar GitHub
3. Importar projeto
4. Deploy automático

### Netlify (Alternativo)  
1. Criar conta: https://netlify.com
2. Arrastar pasta do projeto
3. Deploy instantâneo

## 🔧 Se Houver Problemas

### Limpar Cache
```bash
rm -rf node_modules .next
npm install
npm run dev
```

### Usar Yarn (alternativa)
```bash
yarn install
yarn dev
```

### Build Alternativo
```bash
npm run build -- --no-lint
```

**✅ Este pacote contém EXATAMENTE o código que está funcionando no ambiente original!**
