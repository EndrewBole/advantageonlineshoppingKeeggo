package com.advantageonlineshopping.pageObjects.login;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginSteps {

    private LoginLogic loginLogic;

    public LoginSteps(){
        loginLogic = new LoginLogic();
    }

    @When("^insiro meu usuario\"([^\"]*)\"$")
    public void insiro_meu_usuario(String username){
        loginLogic.writeLogin(username);
    }

    @When("^insiro minha senha \"([^\"]*)\"$")
    public void insiro_minha_senha(String password)  {
        loginLogic.writePassWord(password);
    }

    @Then("^clico no botao de SigIn \"([^\"]*)\"$")
    public void clico_no_botao_de_SigIn(String username) {
        loginLogic.clickSignIn(username);
    }
}
