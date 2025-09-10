# 🤝 Guia de Contribuição

Obrigado por contribuir com o projeto do site da ONG! Este documento contém todas as diretrizes e processos que nossa equipe deve seguir para manter a qualidade e consistência do código.

## 📋 Índice

- [Antes de Começar](#-antes-de-começar)
- [Configuração do Ambiente](#-configuração-do-ambiente)
- [Fluxo de Trabalho (Git Flow)](#-fluxo-de-trabalho-git-flow)
- [Padrões de Código](#-padrões-de-código)
- [Conventional Commits](#-conventional-commits)
- [Processo Pre-Commit](#-processo-pre-commit)
- [Pull Request e Code Review](#-pull-request-e-code-review)
- [Resolução de Problemas](#-resolução-de-problemas)

---

## 🚀 Antes de Começar

### **Ferramentas Obrigatórias**

Certifique-se de ter instalado:

- **Node.js 18.18+** ([Download](https://nodejs.org/))
- **Git** ([Download](https://git-scm.com/))
- **VSCode** (recomendado) ([Download](https://code.visualstudio.com/))

### **Extensões VSCode Recomendadas**

Instale estas extensões para uma melhor experiência:

```
ES7+ React/Redux/React-Native snippets
Tailwind CSS IntelliSense
TypeScript Importer
Prettier - Code formatter
ESLint
GitLens
Auto Rename Tag
```

---

## ⚙️ Configuração do Ambiente

### **1. Clone e Setup Inicial**

```bash
# 1. Clone o repositório
git clone https://github.com/gabrielsarteof/bem-me-quer-feliz-frontend.git
cd bem-me-quer-feliz-frontend

# 2. Instale as dependências
npm install

# 3. Configure as variáveis de ambiente
cp .env.example .env.local
# Edite .env.local com as configurações necessárias

# 4. Execute o projeto
npm run dev
```

### **2. Verificação da Instalação**

```bash
# Teste se tudo está funcionando
npm run lint        # Deve passar sem erros
npm run type-check  # Deve passar sem erros
npm run build       # Deve buildar com sucesso
```

---

## 🌊 Fluxo de Trabalho (Git Flow)

### **Estrutura de Branches**

```
main          # Produção - PROTEGIDA (apenas Tech Lead pode fazer merge)
├── develop   # Development - Branch principal para desenvolvimento
├── feature/* # Features - Novas funcionalidades
├── fix/*     # Fixes - Correções de bugs
└── hotfix/*  # Hotfixes - Correções urgentes
```

### **Processo de Desenvolvimento**

#### **1. Iniciando uma Nova Feature**

```bash
# 1. Certifique-se de estar na develop atualizada
git checkout develop
git pull origin develop

# 2. Crie uma nova branch para sua feature
git checkout -b feature/nome-da-funcionalidade

# Exemplos de nomes válidos:
# feature/formulario-contato
# feature/galeria-projetos
# feature/sistema-doacoes
# fix/correcao-responsividade
# fix/erro-formulario-envio
```

#### **2. Durante o Desenvolvimento**

```bash
# Faça commits frequentes com mensagens claras
git add .
git commit -m "feat: adiciona componente de card de projeto"

# Push da branch regularmente
git push origin feature/nome-da-funcionalidade
```

#### **3. Finalizando a Feature**

```bash
# 1. Antes de criar PR, atualize com develop
git checkout develop
git pull origin develop
git checkout feature/nome-da-funcionalidade
git rebase develop

# 2. Resolva conflitos se houver

# 3. Execute os testes finais
npm run lint
npm run type-check
npm run build

# 4. Push final
git push origin feature/nome-da-funcionalidade

# 5. Crie Pull Request no GitHub
```

---

## 💻 Padrões de Código

### **Estrutura de Componentes**

#### **Componente Funcional Padrão**

```typescript
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';

interface ComponentProps {
  title: string;
  description?: string;
  className?: string;
}

export function Component({
  title,
  description,
  className
}: ComponentProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    // Lógica aqui
    setIsLoading(false);
  };

  return (
    <div className={cn('base-classes', className)}>
      <h2 className="text-2xl font-bold">{title}</h2>
      {description && (
        <p className="text-gray-600">{description}</p>
      )}
      <Button onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Carregando...' : 'Clique aqui'}
      </Button>
    </div>
  );
}
```

### **Regras de Nomenclatura**

#### **Arquivos e Pastas**

```
✅ CORRETO:
- ComponentName.tsx      (PascalCase para componentes)
- useCustomHook.ts       (camelCase para hooks)
- utils.ts               (camelCase para utilitários)
- constants.ts           (camelCase para arquivos)

❌ INCORRETO:
- component-name.tsx
- Component_Name.tsx
- COMPONENT.tsx
```

#### **Variáveis e Funções**

```typescript
✅ CORRETO:
const userName = 'João';
const isUserLoggedIn = true;
const getUserData = () => {};
const SITE_CONFIG = {}; // Constantes em UPPER_CASE

❌ INCORRETO:
const user_name = 'João';
const IsUserLoggedIn = true;
const get_user_data = () => {};
```

### **Tailwind CSS Guidelines**

#### **Ordem das Classes**

```typescript
// Ordem recomendada:
// 1. Layout (display, position)
// 2. Sizing (width, height, padding, margin)
// 3. Typography
// 4. Visual (background, border, shadow)
// 5. Interactive (hover, focus)

<div className="
  flex items-center justify-between
  w-full h-16 px-4 py-2
  text-lg font-semibold
  bg-white border border-gray-200 rounded-lg shadow-sm
  hover:bg-gray-50 focus:outline-none focus:ring-2
">
  Conteúdo
</div>
```

#### **Responsividade**

```typescript
// Mobile-first approach
<div className="
  w-full p-4
  md:w-1/2 md:p-6
  lg:w-1/3 lg:p-8
">
  Responsivo
</div>
```

---

## 📝 Conventional Commits

### **Formato Obrigatório**

```
<type>(<scope>): <description>

[optional body]

[optional footer(s)]
```

### **Types Permitidos**

| Type       | Descrição                                 | Exemplo                                       |
| ---------- | ----------------------------------------- | --------------------------------------------- |
| `feat`     | Nova funcionalidade                       | `feat: adiciona formulário de contato`        |
| `fix`      | Correção de bug                           | `fix: corrige erro de validação no form`      |
| `docs`     | Documentação                              | `docs: atualiza README com instruções`        |
| `style`    | Formatação, espaçamento                   | `style: formata componente Button`            |
| `refactor` | Refatoração sem mudança de funcionalidade | `refactor: simplifica lógica do hook useForm` |
| `test`     | Adição ou correção de testes              | `test: adiciona testes para componente Card`  |
| `chore`    | Tarefas de build, dependências            | `chore: atualiza dependências do projeto`     |
| `perf`     | Melhorias de performance                  | `perf: otimiza carregamento de imagens`       |

### **Scopes Recomendados**

- `components` - Componentes React
- `hooks` - Custom hooks
- `pages` - Páginas do site
- `api` - Integrações com APIs
- `ui` - Componentes de interface
- `forms` - Formulários
- `config` - Configurações

### **Exemplos de Commits Válidos**

```bash
✅ CORRETO:
feat(components): adiciona componente Card de projeto
fix(forms): corrige validação do campo email
docs: adiciona documentação de instalação
style(ui): ajusta espaçamento do header
refactor(hooks): simplifica lógica do useApi
test(components): adiciona testes para Button
chore(deps): atualiza Next.js para versão 15.5
perf(images): implementa lazy loading

❌ INCORRETO:
add new component
fix bug
update docs
changes
WIP
asdfgh
```

---

## 🔧 Processo Pre-Commit

### **O que Acontece Automaticamente**

Quando você faz `git commit`, o sistema roda **automaticamente**:

1. **Husky** - Intercepta o commit e executa hooks
2. **lint-staged** - Roda apenas nos arquivos modificados:
   - **ESLint** com flat config - Verifica e corrige erros
   - **Prettier** - Formata o código automaticamente
   - **TypeScript** - Verifica tipos (se configurado)
3. **Conventional Commits** - Valida formato da mensagem

### **Fluxo Detalhado**

```bash
# Quando você executa:
git commit -m "feat: adiciona novo componente"

# O sistema executa automaticamente:
1. ✅ Husky intercepta o commit
2. ✅ lint-staged roda nos arquivos modificados:
   - ESLint --fix (corrige problemas automáticos)
   - Prettier (formata código)
   - TypeScript check (opcional)
3. ✅ Valida formato da mensagem de commit
4. ✅ Se tudo OK → commit é feito
   ❌ Se há erros → commit é BLOQUEADO
```

### **Possíveis Erros e Soluções**

#### **Erro de ESLint**

```bash
❌ Erro:
✖ eslint found 3 errors

✅ Solução:
npm run lint:fix          # Corrige automaticamente
# OU
npx eslint src/ --fix     # Corrige pasta específica
```

#### **Erro de TypeScript**

```bash
❌ Erro:
✖ Type 'string' is not assignable to type 'number'

✅ Solução:
npm run type-check        # Vê todos os erros
# Corrija os tipos manualmente
```

#### **Erro de Conventional Commits**

```bash
❌ Erro:
✖ commit message does not match conventional format

✅ Solução:
# Use o formato correto:
git commit -m "feat: descrição da funcionalidade"
# Não:
git commit -m "add feature"
```

### **Comandos Úteis para Debugging**

```bash
# Verifica código antes de commitar
npm run lint              # Vê problemas de lint
npm run lint:fix          # Corrige problemas automáticos
npm run type-check        # Verifica tipos TypeScript
npm run build             # Testa se o build funciona

# Para projetos com ESLint 9+ flat config
npx eslint .              # Roda ESLint manualmente
npx eslint . --fix        # Corrige automaticamente

# Força commit (USE COM MUITO CUIDADO!)
git commit --no-verify -m "WIP: trabalho em progresso"
```

---

## 👀 Pull Request e Code Review

### **Como Criar um Pull Request**

#### **1. Finalize sua feature**

```bash
# Certifique-se de que está tudo funcionando
npm run lint
npm run type-check
npm run build

# Commit final
git add .
git commit -m "feat: descrição da funcionalidade"
git push origin feature/nome-da-funcionalidade
```

#### **2. Abra o GitHub**

- Acesse: `https://github.com/gabrielsarteof/bem-me-quer-feliz-frontend`
- Clique no banner: **"Compare & pull request"**
- Ou vá em **"Pull requests"** → **"New pull request"**

#### **3. Configure o Pull Request**

- **Base branch**: `develop` (ou `main`)
- **Compare branch**: `feature/sua-branch`
- **Title**: Use conventional commits (ex: `feat: adiciona formulário de contato`)

#### **4. Preencha a Descrição**

O GitHub automaticamente carregará nosso **template de PR**. Preencha todas as seções relevantes:

- ✏️ **Descrição**: O que foi implementado/corrigido
- 🎯 **Motivação e Contexto**: Por que foi necessário, qual problema resolve
- 🔄 **Tipo de Mudança**: Marque o tipo apropriado (feature, bug fix, etc.)
- 📸 **Screenshots**: Se houver mudanças visuais, adicione prints ou GIFs
- ✅ **Checklist do Desenvolvedor**: Marque tudo que foi verificado
- 🧪 **Checklist de Testes**: Confirme que passou em todos os testes
- 📱 **Responsividade**: Verifique em diferentes tamanhos de tela

**Dica**: Não deixe nenhuma seção importante em branco. Se não se aplica, escreva "N/A" ou remova a seção.

#### **5. Solicite Review**

- **Reviewers**: Adicione **gabrielsarteof** como reviewer obrigatório
- **Assignees**: Adicione você mesmo como responsável pelo PR
- **Labels**: Escolha labels apropriadas:
  - 🎨 `frontend` - Mudanças de interface/componentes
  - 🐛 `bugfix` - Correção de problemas
  - ✨ `feature` - Nova funcionalidade
  - 📝 `docs` - Documentação
  - 📱 `mobile` - Melhorias de responsividade
  - ⚡ `hotfix` - Correção urgente

#### **6. Aguarde Review e Merge do Tech Lead**

- ⏳ **Aguarde aprovação** do Tech Lead (obrigatório)
- 💬 **Responda comentários** de forma construtiva
- 🔄 **Faça ajustes** se solicitado pelo Tech Lead
- 🔔 **Notifique** quando terminar os ajustes
- ⚠️ **IMPORTANTE**: Apenas Tech Lead pode fazer merge
- 🚫 **NÃO tente fazer merge** você mesmo

### **Checklist do Autor (antes de criar PR)**

Antes de criar seu PR, verifique:

- [ ] **Funcionamento**: Código foi testado localmente em diferentes cenários
- [ ] **Qualidade**: `npm run lint` passa sem erros
- [ ] **Tipos**: `npm run type-check` passa sem erros
- [ ] **Build**: `npm run build` funciona corretamente
- [ ] **Responsividade**: Testado em mobile, tablet e desktop
- [ ] **Navegadores**: Testado em Chrome, Firefox (mínimo 2)
- [ ] **Atualização**: Branch está atualizada com `develop`
- [ ] **Commits**: Seguem padrão conventional commits
- [ ] **Descrição**: PR tem descrição clara seguindo o template
- [ ] **Visual**: Screenshots/GIFs se houver mudanças visuais
- [ ] **Edge Cases**: Funcionalidade testada em casos extremos
- [ ] **Performance**: Não introduz lentidão perceptível

**⚠️ IMPORTANTE**: Após criar o PR, aguarde review e merge do Tech Lead

### **Checklist do Tech Lead (ao revisar)**

Como Tech Lead, ao revisar um PR, verifique:

- [ ] **Padrões**: Código segue padrões estabelecidos no projeto
- [ ] **Reutilização**: Componentes são reutilizáveis e modulares
- [ ] **DRY**: Não há código duplicado desnecessário
- [ ] **Performance**: Build size e performance não foram comprometidos
- [ ] **Responsividade**: Funciona bem em mobile (320px+), tablet (768px+) e desktop (1024px+)
- [ ] **Navegadores**: Testado em diferentes navegadores
- [ ] **Acessibilidade**: Considera navegação por teclado e screen readers
- [ ] **Limpeza**: Não há `console.log`, `debugger` ou código comentado
- [ ] **Nomenclatura**: Variáveis e funções têm nomes descritivos em português/inglês
- [ ] **Lógica**: A implementação faz sentido e está bem estruturada
- [ ] **Segurança**: Não introduz vulnerabilidades (XSS, validação, etc.)
- [ ] **SEO**: Meta tags e estrutura semântica adequadas (se aplicável)

### **Processo de Review**

#### **1. Review**

- **Tech Lead** analisa o código
- Deixa comentários e sugestões
- Aprova OU solicita mudanças

#### **2. Ajustes (se necessário)**

- Autor faz correções solicitadas
- Commita as mudanças na mesma branch
- Notifica Tech Lead: "Ajustes feitos, pode revisar novamente"

#### **3. Aprovação Final**

- Tech Lead verifica ajustes
- Aprova definitivamente

#### **4. Merge (exclusivo do Tech Lead)**

- **APENAS Tech Lead** pode fazer merge
- Desenvolvedores aguardam o merge
- Branch é deletada automaticamente
- Deploy é disparado (se configurado)

### **Regras de Merge**

#### **❌ NUNCA faça merge sozinho:**

- **Sempre aguarde** o Tech Lead fazer o merge

#### **✅ Processo obrigatório para desenvolvedores:**

- Criar PR seguindo o template
- Aguardar review e aprovação do Tech Lead
- Fazer ajustes se solicitado
- Aguardar Tech Lead fazer o merge final
- **NUNCA** tentar fazer merge próprio

#### **✅ Responsabilidades do Tech Lead:**

- Revisar todos os PRs
- Aprovar ou solicitar mudanças
- Fazer merge após aprovação
- Manter qualidade do código

### **Problemas Comuns e Soluções**

#### **"Meu PR está com conflitos"**

```bash
# Atualizar com develop
git checkout develop
git pull origin develop
git checkout sua-branch
git rebase develop

# Resolver conflitos manualmente
# Depois:
git push --force-with-lease origin sua-branch
```

#### **"Review está demorando muito"**

- Envie mensagem educada no Slack/Teams
- Mencione urgência se necessário
- Ping no próprio PR: "@TechLead quando tiver um tempo 😊"

#### **"Tech Lead pediu muitas mudanças"**

- Veja como oportunidade de aprendizado
- Pergunte se não entender algum feedback
- Implemente uma mudança por vez

---

## 🚨 Resolução de Problemas

### **Problemas Comuns**

#### **1. "Husky não está funcionando"**

```bash
# Husky v9+ usa comandos diferentes
# Primeiro, instalar dependências
npm install

# Se ainda não funcionar, reconfigurar
npx husky init
echo "npx lint-staged" > .husky/pre-commit
```

#### **2. "ESLint está reclamando de arquivo que não modifiquei"**

```bash
# Com ESLint 9+ flat config, rodar em todo o projeto
npm run lint
npm run lint:fix
```

#### **3. "Meu commit foi rejeitado"**

```bash
# Ver exatamente qual é o erro
git commit -m "sua mensagem" --verbose

# Verificar se a mensagem está no formato correto
# Deve ser: type(scope): description
```

#### **4. "Prettier está desfazendo minhas alterações"**

```bash
# Verificar configuração do editor
# Instalar extensão Prettier no VSCode
# Configurar format on save
```

#### **5. "Branch desatualizada"**

```bash
# Atualizar branch com develop
git checkout develop
git pull origin develop
git checkout sua-branch
git rebase develop
```

### **Quando Pedir Ajuda**

1. **Leia a mensagem de erro** completamente
2. **Procure no Google** o erro específico
3. **Verifique se seguiu todos os passos** deste guia
4. **Pergunte no grupo** com:
   - Comando que executou
   - Erro completo
   - Screenshot se necessário

---

## 📚 Recursos Úteis

### **Documentação**

- [Next.js 15 Docs](https://nextjs.org/docs)
- [React 19 Docs](https://react.dev/)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [ESLint 9 Flat Config](https://eslint.org/docs/latest/use/configure/configuration-files)

### **Ferramentas**

- [Conventional Commits](https://www.conventionalcommits.org/)
- [ESLint 9 Migration Guide](https://eslint.org/docs/latest/use/migrate-to-9.0.0)
- [Prettier Options](https://prettier.io/docs/en/options.html)
- [Husky v9 Docs](https://typicode.github.io/husky/)
- [lint-staged](https://github.com/lint-staged/lint-staged)

### **Extensões VSCode**

```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "dbaeumer.vscode-eslint",
    "ms-vscode.vscode-typescript-next",
    "formulahendry.auto-rename-tag",
    "ms-vscode.vscode-json"
  ]
}
```

**Configuração VSCode (.vscode/settings.json):**

```json
{
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit"
  },
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ],
  "typescript.preferences.quoteStyle": "single"
}
```

---

## 🎉 Conclusão

Seguindo este guia, mantemos a qualidade e consistência do projeto. Lembre-se:

- **Qualidade é responsabilidade de todos**
- **Automação previne erros humanos**
- **Padrões facilitam manutenção**
- **Code review é aprendizado mútuo**
- **Apenas Tech Lead faz merge para manter controle de qualidade**

Se tiver dúvidas, não hesite em perguntar no grupo da equipe!

---

\*_Desenvolvido com ❤️ pela equipe Underline Tech_
