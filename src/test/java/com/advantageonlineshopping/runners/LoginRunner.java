package com.advantageonlineshopping.runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = "src/test/java//com/advantageonlineshopping/features/login.feature",
        glue = { "" },
        plugin = {"pretty",
                "html:target/relatoriosimples",
                "json:target/relatoriosimples.json"
        },
        monochrome = true,
        snippets = SnippetType.CAMELCASE
)

public class LoginRunner {
}
