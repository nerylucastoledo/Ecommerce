# Ecommerce :moneybag:


## Um ecommerce de bibicletas contendo 3 categorias diferentes, Racing, Retrô e Motorizada.


### O que o site é capaz de fazer 💥

Lado usuário:
- Criar um usuário novo (autenticado com firebase)
- Fazer login com usuário existente (autenticado com firebase)
- Visualizar os produtos
- Entrar na página do produto específico
- Adicionar produtos ao carrinho
- Remover produtos do carrinho
- Comprar algum produto
- Inserir dados de entrega (consumindo api para calcular o valor do frete)
- Visualizar a pagina de pedidos feitos

Lado Admin:
- Inserir um novo produto (bicicleta) e publicar no site.
- Atualizar os dados de um produto específico.
- Deletar produtos.
- Visualizar a quantidade de vendas no mês / dia
- Ganhos em R$ no mês / dia
- Finalizar pedido

> Status do Projeto: Em andamento! 	:warning:

## Projeto integrado com Api Rest
A api que está sendo utilizada no projeto foi feita em django rest framework.

## Projeto integrado com AWS
Todas as imagens do projeto estão sendo adicionadas no s3 da amazon.

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
  npm start
```

Acesse

```sh
  http://localhost:8080/
```
