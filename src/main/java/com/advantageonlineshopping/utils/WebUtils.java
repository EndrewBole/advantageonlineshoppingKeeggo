package com.advantageonlineshopping.utils;


import com.advantageonlineshopping.core.webdriver.DriverChrome;
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.*;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.FluentWait;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.time.Duration;

public class WebUtils extends DriverChrome {

    public void screenShot(String status, String featureName){
            TakesScreenshot ss = (TakesScreenshot) driver;
            File screenCapture = ss.getScreenshotAs(OutputType.FILE);
            try{
                FileUtils.copyFile(screenCapture,
                        new File("evidences" + File.separator + status + File.separator + featureName + ".jpg"));
            }catch (IOException e ){
                e.printStackTrace();
            }

    }
    public static void threadSleep(int time){
        try{
            Thread.sleep(time);
        }catch(Exception e){
            System.out.println("cant wait this time");
        }
    }



    public static void waitElementPolling(By element) {
        FluentWait wait = new FluentWait(driver).withTimeout(Duration.ofSeconds(15)).pollingEvery(Duration.ofSeconds(1))
                .ignoring(NoSuchElementException.class);
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));

    }
    public static WebElement findingElement(By element){
        return driver.findElement(element);
    }

    public static void clickHim(By element) {
        waitClickable(element);
        findingElement(element).click();
    }

    public static void waitClickable(By element) {
        WebDriverWait wait = new WebDriverWait(driver, 10);
        wait.until(ExpectedConditions.visibilityOfElementLocated(element));
    }

    public static void clearAndWrite(By field, String txt){
        if(findingElement(field).isDisplayed()) {
            waitClickable(field);
            findingElement(field).clear();
            findingElement(field).sendKeys(txt);
        }
    }

    public static void selectComboBox(By by, String textCountry) {
        WebElement element = findingElement(by);
        Select countryBox = new Select(element);
        countryBox.selectByVisibleText(textCountry);
    }
}
