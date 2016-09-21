import { Component, OnInit } from "@angular/core";

@Component({
	selector: "<%= selector %>",<% if(inlineStyle) { %>
	styles: [],<% } else { %>
	styleUrls: ["./<%= dasherizedModuleName %>.component.<%= styleExt %>"],<% } if (inlineTemplate) { %>
	template: `
		<p><%= dasherizedModuleName %> works!</p>
	`,<% } else { %>
	templateUrl: "./<%= dasherizedModuleName %>.component.html"<% } %>
})
export class <%= classifiedModuleName %>Component implements OnInit {

	constructor() {

	}

	ngOnInit() {

	}

}
