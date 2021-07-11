@First
Feature: deve Clicar no icone de login entao clicar no link de cadastrar nova conta e inserir os dados


Scenario Outline: Deve direcionar a uma pagina de cadastro de usuario assim que clicar em create new account
  Given acesso a pagina inicial
  When nao estou logado clico no icone de login
  Then clico no link Create new Account
  And insiro meu usuario "<user>"
  And insiro meu Email "<email>"
  And insiro minha nova senha "<password>"
  And insiro a confirmacao da minha senha "<confirmPassword>"
  And insiro meu primeiro nome "<firstName>"
  And insiro meu sobrenome "<lastName>"
  And insiro meu numero de telefone "<phoneNumber>"
  And seleciono o pais "<country>"
  And insiro a Cidade "<city>"
  And insiro o Endereco "<address>"
  And insiro o Estado "<state>"
  And insiro o CEP "<postalCode>"
  And clico no botao de acordo com as condicoes de privacidade do site
  Then clico no botao de registro "<user>"

  Examples:
    |user         |email          |password|confirmPassword|firstName|lastName|phoneNumber|country|city|address                       |state|postalCode|
    |TestandoS173 |teste@gmail.com|Senha123|Senha123       |Teste    |Testando|119308585  |Brazil |Poá |Rua Presidente Rodrigues Alves|SP   |08553520  |


