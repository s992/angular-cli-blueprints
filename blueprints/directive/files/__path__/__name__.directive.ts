import { Directive } from "@angular/core";

@Directive({
	selector: "[<%= rawEntityName %>]"
})
export class <%= classifiedModuleName %>Directive {

	constructor() {

	}

}
