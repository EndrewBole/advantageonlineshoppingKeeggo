package com.advantageonlineshopping.pageObjects.register;

import cucumber.api.java.en.Then;

public class RegisterSteps {

    private RegisterLogic registerLogic;

    public RegisterSteps(){
        registerLogic = new RegisterLogic();
    }

    @Then("^clico no link Create new Account$")
    public void clico_no_link_Create_new_Account(){
        registerLogic.clickCreateNewAccount();
    }

    @Then("^insiro meu usuario \"([^\"]*)\"$")
    public void insiro_meu_usuario(String user){
        registerLogic.writeUser(user);
    }

    @Then("^insiro meu Email \"([^\"]*)\"$")
    public void inisiro_meu_Email(String email){
        registerLogic.writeEmail(email);
    }

    @Then("^insiro minha nova senha \"([^\"]*)\"$")
    public void insiro_minha_senha(String password){
        registerLogic.writePassoword(password);
    }

    @Then("^insiro a confirmacao da minha senha \"([^\"]*)\"$")
    public void insiro_a_confirmacao_da_minha_senha(String confirmPassword){
        registerLogic.writeConfirmPassword(confirmPassword);
    }

    @Then("^insiro meu primeiro nome \"([^\"]*)\"$")
    public void insiro_meu_primeiro_nome(String firstName){
        registerLogic.writeFirstName(firstName);
    }

    @Then("^insiro meu sobrenome \"([^\"]*)\"$")
    public void insiro_meu_sobrenome(String lastName){
        registerLogic.writeLastName(lastName);
    }

    @Then("^insiro meu numero de telefone \"([^\"]*)\"$")
    public void insiro_meu_numero_de_telefone(String phoneNumber){
        registerLogic.writePhoneNumber(phoneNumber);
    }

    @Then("^seleciono o pais \"([^\"]*)\"$")
    public void seleciono_o_pais(String country){
        registerLogic.selectCountry(country);
    }

    @Then("^insiro a Cidade \"([^\"]*)\"$")
    public void insiro_a_Cidade(String city){
        registerLogic.writeCity(city);
    }

    @Then("^insiro o Endereco \"([^\"]*)\"$")
    public void insiro_o_Endereco(String address){
        registerLogic.writeAddress(address);
    }

    @Then("^insiro o Estado \"([^\"]*)\"$")
    public void insiro_o_Estado(String state){
        registerLogic.writeState(state);
    }

    @Then("^insiro o CEP \"([^\"]*)\"$")
    public void insiro_o_CEP(String postalCode){
        registerLogic.writePostalCode(postalCode);
    }

    @Then("^clico no botao de acordo com as condicoes de privacidade do site$")
    public void clico_no_botao_de_acordo_com_as_condicoes_de_privacidade_do_site(){
        registerLogic.selectCheckBoxIAgree();
    }

    @Then("^clico no botao de registro \"([^\"]*)\"$")
    public void clico_no_botao_de_registro(String user){
        registerLogic.clickButtonRegister(user);
    }

}
