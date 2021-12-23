# Ecommerce :moneybag:

> Link do projeto: https://lucasbiker.netlify.app/
> Status do Projeto: Em andamento! 	:warning:

## Uma loja virtual de vendas de bibicletas


### O que o site é capaz de fazer 💥

Lado usuário:
- Criar um usuário novo (autenticado com firebase)
- Fazer login com usuário existente (autenticado com firebase)
- Resetar senha com envio por e-mail
- Visualizar os produtos da loja
- Entrar na página de um produto específico
- Adicionar produtos ao carrinho
- Remover produtos do carrinho
- Comprar algum produto
- Comprar produto com cupom de desconto
- Inserir dados de entrega (consumindo uma api de cep)
- Visualizar a pagina de pedidos feitos

Lado Admin:
- Inserir um novo produto (bicicleta) e publicar no site.
- Atualizar os dados de um produto específico.
- Deletar produtos.
- Visualizar a quantidade de vendas no dia / semana
- Utilização de gráficos para controle
- Ganhos em R$ no dia / semana / mês
- Finalizar pedido
- Alterar o status do produto, processando, cancelado, aceito, entregue

## Projeto integrado com Api Rest
A api que está sendo utilizada no projeto foi feita com django rest framework.

## Projeto integrado com AWS
Todas as imagens do projeto estão sendo adicionadas no s3 da amazon.

## Projeto integrado com firebase
O sistema de login, criação de conta e reset de senha é feita com o firebase

## Como rodar a aplicação na sua máquina :rocket:
No terminal clone o projeto:

```sh
  git clone https://github.com/nerylucastoledo/Ecommerce.git
```

Com o projeto na sua maquina, rode

```sh
  npm install
```

Depois de instaladas as dependências, rode

```sh
  npm run serve
```

Acesse

```sh
  http://localhost:8080/
```
