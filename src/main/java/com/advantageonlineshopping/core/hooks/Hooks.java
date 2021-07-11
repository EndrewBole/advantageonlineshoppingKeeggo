package com.advantageonlineshopping.core.hooks;

import com.advantageonlineshopping.core.webdriver.DriverChrome;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.Scenario;



public class Hooks extends DriverChrome {

    @Before
    public static void chromeStart(Scenario featureName){
        System.out.println("Starting test: " + featureName);
    }

    @After
    public static void chromeQuit(){
        tearDown();
    }
}
