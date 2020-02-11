package cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;




@CucumberOptions(
	plugin = {"html:src/test/java/Reporting8/output/cucumber_html_report",
			"json:src/test/java/Reporting8/output/cucumber.json",
			"junit:src/test/java/Reporting8/output/cucumber_results.xml"
	})
@RunWith(Cucumber.class)
public class sharedRunner {
	

}
