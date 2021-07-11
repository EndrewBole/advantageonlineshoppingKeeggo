package com.advantageonlineshopping.pageObjects.login;

import com.advantageonlineshopping.utils.WebUtils;

public class LoginLogic extends WebUtils {

    private LoginPage loginPage;

    public LoginLogic(){
        loginPage = new LoginPage();
    }

    public void writeLogin(String userName){
        waitClickable(loginPage.getUserField());
        clearAndWrite(loginPage.getUserField(), userName);
    }

    public void writePassWord(String password){
        waitClickable(loginPage.getPassWordField());
        clearAndWrite(loginPage.getPassWordField(),password);
    }

    public void clickSignIn(String username) {
        threadSleep(5000);
        waitElementPolling(loginPage.getButtonSignIn());
        clickHim(loginPage.getButtonSignIn());
        threadSleep(2000);
        screenShot("passed","RegisterSuccess - " + username);
        tearDown();
    }
}
