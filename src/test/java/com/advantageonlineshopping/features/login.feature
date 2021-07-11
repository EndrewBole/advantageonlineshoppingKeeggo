@First
Feature: Fazer login como um usuario ainda não logado



Scenario Outline: : Deve mostrar um modal de login ao clicar no icone e apos a inserção de dados efetuar o login
  Given acesso a pagina inicial
  When nao estou logado clico no icone de login
  And insiro meu usuario"<username>"
  And insiro minha senha "<password>"
  Then clico no botao de SigIn "<username>"

  Examples:
    |username     |password   |
    |TestandoS173 |Senha123   |
