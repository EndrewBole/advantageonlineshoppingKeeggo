package com.advantageonlineshopping.pageObjects.generics;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class GenericSteps {

    private GenericsLogic gen;

    public GenericSteps(){
        gen = new GenericsLogic();
    }

    @Given("^acesso a pagina inicial$")
    public void acesso_a_pagina_inicial(){
        gen.navigation();
    }

    @When("^nao estou logado clico no icone de login$")
    public void nao_estou_logado_clico_no_icone_de_login() {
        gen.userLoginIconClick();
    }
}
