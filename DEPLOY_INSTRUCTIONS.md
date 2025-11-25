# GNOSIS AI - Instruções de Deploy na Netlify

## ✅ Código já está no GitHub!

**Repositório:** https://github.com/TON1972/gnosis-ai

## 📋 Próximos Passos

### 1. Conectar Repositório na Netlify

1. No painel da Netlify, clique em **"Import from Git"** ou **"Add new site"**
2. Escolha **"Import an existing project"**
3. Clique em **"GitHub"**
4. Autorize a Netlify a acessar seus repositórios (se necessário)
5. Selecione o repositório: **TON1972/gnosis-ai**

### 2. Configurar Build Settings

A Netlify deve detectar automaticamente as configurações do `netlify.toml`, mas confirme:

- **Build command:** `pnpm install && pnpm run build`
- **Publish directory:** `dist`
- **Node version:** 22

### 3. Adicionar Variáveis de Ambiente

Clique em **"Site settings"** → **"Environment variables"** e adicione:

#### Variáveis Obrigatórias (sem elas o site não funciona):

```
DATABASE_URL=sua_connection_string_do_banco
JWT_SECRET=seu_secret_jwt_aleatorio
```

#### Variáveis Opcionais (para funcionalidades específicas):

```
OPENAI_API_KEY=sua_chave_openai (para as ferramentas de IA funcionarem)
MERCADOPAGO_ACCESS_TOKEN=seu_token_mercadopago (para pagamentos)
```

### 4. Deploy!

Clique em **"Deploy site"** e aguarde!

⏱️ Primeiro deploy leva 3-5 minutos.

## 🔧 Configurações Necessárias Após Deploy

### Banco de Dados

Você precisará configurar um banco de dados MySQL/PostgreSQL. Opções recomendadas:

- **PlanetScale** (gratuito, recomendado)
- **Supabase** (gratuito)
- **Railway** (gratuito com limites)

### Autenticação

O sistema atual usa OAuth da Manus. Para funcionar na Netlify, você precisará:

1. Configurar Clerk, Auth0, ou NextAuth
2. Ou adaptar o sistema de autenticação

## 📞 Precisa de Ajuda?

Entre em contato com o agente que está te ajudando!

---

**GNOSIS AI v1.0** - 19 Ferramentas de Estudos Bíblicos Profundos

