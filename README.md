<h2>Spring REST cheesy example</h2>

<h3>This module is designed for https://github.com/rintaspon/cheese-rest-spring as its client side.</h3>

<p><b>Related keys:</b></p>
<ul>
  <li>Representational state transfer (REST)</li>
  <li>Data Transfer Object (DTO)</li>
	<li>HTTP status codes</li>
</ul>
<p><b>Scenario:</b></p>
<p>We have milk and want to produce cheese! so that we throw it to a cheese maker (Server).
Before the milk is sent to the server as well-known JSON format, there are some activities here:</p>
<ol>
  <li>Users input milk type and its volume into a html page. The html page contains a form, which is implemented by using <i>Angular's FormGroup</i>, <i>Angular's FormControl</i>, some response texts representing results from server such as HTTP response.</li>
	<li>After submit button is pressed, the html page will send the data to a typescript file (.ts). The .ts file contains a service named 'CheeseMakerService' which is used for sending Milk to CheeseMaker (Server). Both of <i>JSON.stringify(..)</i> and Milk entity are required for completing the sending process.</li>
</ol>
