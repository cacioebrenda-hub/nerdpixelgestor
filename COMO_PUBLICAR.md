# NerdPixel Gestor — Como publicar e gerar o APK

Este pacote contém o app pronto para ser publicado como site (GitHub Pages)
e depois transformado em APK (PWABuilder), para subir na Google Play.

## Arquivos incluídos

```
index.html          o app completo (clientes + financeiro)
manifest.json        configurações do app (nome, cor, ícones)
sw.js                arquivo técnico que torna o app instalável
icons/               ícones do app em vários tamanhos
```

---

## PARTE 1 — Publicar no GitHub Pages (gratuito)

### 1. Criar uma conta no GitHub (se ainda não tiver)
Acesse https://github.com e crie uma conta gratuita.

### 2. Criar um novo repositório
1. Clique no "+" no canto superior direito → "New repository"
2. Nome do repositório: `nerdpixel-gestor` (ou outro nome sem espaços)
3. Marque como **Public**
4. Clique em "Create repository"

### 3. Subir os arquivos
1. Na página do repositório recém-criado, clique em "uploading an existing file"
2. Arraste TODOS os arquivos desta pasta (index.html, manifest.json, sw.js,
   e a pasta icons inteira) para a área de upload
3. Clique em "Commit changes"

### 4. Ativar o GitHub Pages
1. No repositório, clique em "Settings" (engrenagem, no menu superior)
2. No menu lateral esquerdo, clique em "Pages"
3. Em "Source", selecione "Deploy from a branch"
4. Em "Branch", selecione "main" e a pasta "/ (root)"
5. Clique em "Save"
6. Espere 1-2 minutos. Vai aparecer um link tipo:
   `https://seu-usuario.github.io/nerdpixel-gestor/`

### 5. Testar
Abra esse link no navegador do celular. O app deve aparecer funcionando
normalmente. Esse é o link que você vai usar no PWABuilder.

---

## PARTE 2 — Gerar o APK no PWABuilder

### 1. Acessar o PWABuilder
Vá em https://www.pwabuilder.com

### 2. Colar o link do seu app
1. Cole o link do GitHub Pages (ex: `https://seu-usuario.github.io/nerdpixel-gestor/`)
2. Clique em "Start"

### 3. Revisar o relatório
O PWABuilder vai analisar o app e mostrar notas sobre Manifest, Service Worker
e Segurança. Como já preparamos tudo, deve aparecer praticamente tudo certo
(✓ verde). Se aparecer algum aviso amarelo, geralmente pode ignorar — não
impede de gerar o APK.

### 4. Gerar o pacote Android
1. Clique em "Package for stores"
2. Escolha "Android"
3. Preencha:
   - Package ID: algo como `com.nerdpixel.gestor` (sem espaços, sem acentos)
   - App name: NerdPixel Gestor
   - As demais opções podem ficar no padrão
4. Clique em "Generate"
5. Vai baixar um arquivo .zip com o APK/AAB dentro

---

## PARTE 3 — Subir na Google Play (resumo)

1. Crie uma conta de desenvolvedor em https://play.google.com/console
   (taxa única de aproximadamente US$ 25)
2. Clique em "Criar app"
3. Preencha as informações da loja: nome, descrição, categoria, ícone,
   capturas de tela (printa o app funcionando no celular)
4. **Importante**: na descrição, evite citar IPTV ou streaming diretamente.
   Descreva como "app de gestão de clientes e assinaturas recorrentes para
   pequenos negócios" — isso é uma descrição honesta do que o app faz e
   evita problemas na revisão da Google
5. Faça upload do arquivo .aab gerado pelo PWABuilder
6. Preencha a Política de Privacidade (pode usar um gerador gratuito como
   https://www.freeprivacypolicy.com, já que o app coleta dados de clientes)
7. Envie para revisão

A revisão da Google costuma levar de 1 a 7 dias.

---

## Sobre o anúncio (AdMob)

O app já tem um espaço reservado para banner de anúncio na tela. A ativação
real do AdMob (conta + código de anúncio) é um passo técnico adicional que
pode ser feito depois que o app já estiver publicado e funcionando — não é
bloqueante para o lançamento inicial.

## Sobre o WhatsApp de contato

O número (31) 99115-5296 já está configurado nos botões "Suporte" do app.
Caso precise trocar o número no futuro, é só avisar.
