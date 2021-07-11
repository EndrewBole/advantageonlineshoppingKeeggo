package com.advantageonlineshopping.pageObjects.generics;


import org.openqa.selenium.By;


public class GenericPage {

    private By iconUser = By.id("menuUser");

    public By showModalUser(){
        return iconUser;
    }

}
