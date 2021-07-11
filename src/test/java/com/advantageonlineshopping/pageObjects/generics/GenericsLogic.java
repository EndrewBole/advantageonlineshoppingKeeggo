package com.advantageonlineshopping.pageObjects.generics;

import com.advantageonlineshopping.utils.WebUtils;



public class GenericsLogic extends WebUtils {
    private GenericPage gen;

    public GenericsLogic(){
        gen = new GenericPage();
    }

    public void navigation(){
        navigate("http://advantageonlineshopping.com/#/");
    }

    public void userLoginIconClick(){
        waitElementPolling(gen.showModalUser());
        clickHim(gen.showModalUser());
        threadSleep(2000);
    }

}
