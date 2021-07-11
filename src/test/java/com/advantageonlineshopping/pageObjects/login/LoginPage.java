package com.advantageonlineshopping.pageObjects.login;

import org.openqa.selenium.By;

public class LoginPage {
    private By userField = By.xpath("//sec-view[1]/div/input");
    private By passWordField =  By.xpath("//sec-view[2]/div/input");
    private By buttonSignIn = By.xpath("//*[@id=\"sign_in_btnundefined\"]");
    private By messageLogin = By.id("signInResultMessage");


    public By getUserField(){
        return userField;
    }
    public By getPassWordField(){
        return passWordField;
    }
    public By getButtonSignIn(){
        return buttonSignIn;
    }
    public By getMessageLogin(){
        return messageLogin;
    }
}
