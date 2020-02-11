$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("classpath:cucumber/shared.feature");
formatter.feature({
  "name": "Test Calculator",
  "description": "This file describes calculator functionality",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Add two numbers",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I enter 50 in the calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "sharedDef.I_enter_50_in_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press add",
  "keyword": "And "
});
formatter.match({
  "location": "sharedDef.I_press_add()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have entered 50 in the calculator",
  "keyword": "And "
});
formatter.match({
  "location": "sharedDef.I_have_entered_50_in_the_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I press equal symbol",
  "keyword": "When "
});
formatter.match({
  "location": "sharedDef.I_press_equal_symbol()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The result should be 100 on the screen",
  "keyword": "Then "
});
formatter.match({
  "location": "sharedDef.The_result_should_be_100_on_the_screen()"
});
formatter.result({
  "status": "passed"
});
});