package com.advantageonlineshopping.core.webdriver;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class DriverChrome {

    protected static WebDriver driver;

    public static WebDriver setUp(){
        if (driver == null) {
            String pathDriverChrome = System.getProperty("user.dir")
                    + "//chromedriver/91/chromedriver.exe";
            System.setProperty("webdriver.chrome.driver", pathDriverChrome);
            driver = new ChromeDriver();
            driver.manage().window().maximize();
        }
        return driver;
    }

    public void navigate(String url){
        DriverChrome.setUp().get(url);
    }

    public static void tearDown(){
        System.out.println("Test ends");
            driver.quit();
    }

}
