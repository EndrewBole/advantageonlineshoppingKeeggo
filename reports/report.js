$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/advantageonlineshopping/features/login.feature");
formatter.feature({
  "line": 2,
  "name": "Fazer login como um usuario ainda não logado",
  "description": "",
  "id": "fazer-login-como-um-usuario-ainda-não-logado",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": ": Deve mostrar um modal de login ao clicar no icone e apos a inserção de dados efetuar o login",
  "description": "",
  "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "acesso a pagina inicial",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "nao estou logado clico no icone de login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "insiro meu usuario\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insiro minha senha \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico no botao de SigIn \"\u003cusername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 14,
      "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login;;1"
    },
    {
      "cells": [
        "TestandoOSite",
        "Senha123"
      ],
      "line": 15,
      "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login;;2"
    },
    {
      "cells": [
        "Testando0site",
        "Senha123"
      ],
      "line": 16,
      "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 108000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": ": Deve mostrar um modal de login ao clicar no icone e apos a inserção de dados efetuar o login",
  "description": "",
  "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "acesso a pagina inicial",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "nao estou logado clico no icone de login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "insiro meu usuario\"TestandoOSite\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insiro minha senha \"Senha123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico no botao de SigIn \"TestandoOSite\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GenericSteps.acesso_a_pagina_inicial()"
});
formatter.result({
  "duration": 2386911100,
  "status": "passed"
});
formatter.match({
  "location": "GenericSteps.nao_estou_logado_clico_no_icone_de_login()"
});
formatter.result({
  "duration": 3217215500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestandoOSite",
      "offset": 19
    }
  ],
  "location": "LoginSteps.insiro_meu_usuario(String)"
});
formatter.result({
  "duration": 266430600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha123",
      "offset": 20
    }
  ],
  "location": "LoginSteps.insiro_minha_senha(String)"
});
formatter.result({
  "duration": 205262700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestandoOSite",
      "offset": 25
    }
  ],
  "location": "LoginSteps.clico_no_botao_de_SigIn(String)"
});
formatter.result({
  "duration": 7143700900,
  "status": "passed"
});
formatter.after({
  "duration": 1207827700,
  "status": "passed"
});
formatter.before({
  "duration": 40700,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": ": Deve mostrar um modal de login ao clicar no icone e apos a inserção de dados efetuar o login",
  "description": "",
  "id": "fazer-login-como-um-usuario-ainda-não-logado;:-deve-mostrar-um-modal-de-login-ao-clicar-no-icone-e-apos-a-inserção-de-dados-efetuar-o-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Login"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "acesso a pagina inicial",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "nao estou logado clico no icone de login",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "insiro meu usuario\"Testando0site\"",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "insiro minha senha \"Senha123\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "clico no botao de SigIn \"Testando0site\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "GenericSteps.acesso_a_pagina_inicial()"
});
formatter.result({
  "duration": 346200,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LOLLORS\u0027, ip: \u0027192.168.1.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\r\n\tat com.advantageonlineshopping.core.webdriver.DriverChrome.navigate(DriverChrome.java:25)\r\n\tat com.advantageonlineshopping.pageObjects.generics.GenericsLogic.navigation(GenericsLogic.java:15)\r\n\tat com.advantageonlineshopping.pageObjects.generics.GenericSteps.acesso_a_pagina_inicial(GenericSteps.java:16)\r\n\tat ✽.Given acesso a pagina inicial(src/test/java/com/advantageonlineshopping/features/login.feature:7)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GenericSteps.nao_estou_logado_clico_no_icone_de_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testando0site",
      "offset": 19
    }
  ],
  "location": "LoginSteps.insiro_meu_usuario(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Senha123",
      "offset": 20
    }
  ],
  "location": "LoginSteps.insiro_minha_senha(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Testando0site",
      "offset": 25
    }
  ],
  "location": "LoginSteps.clico_no_botao_de_SigIn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 107900,
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LOLLORS\u0027, ip: \u0027192.168.1.23\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_292\u0027\nDriver info: driver.version: RemoteWebDriver\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat com.advantageonlineshopping.utils.WebUtils.screenShot(WebUtils.java:20)\r\n\tat com.advantageonlineshopping.core.hooks.Hooks.chromeQuit(Hooks.java:20)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runAfterHooks(Runtime.java:206)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:46)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:221)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
});