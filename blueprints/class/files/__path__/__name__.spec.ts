/* tslint:disable:no-unused-variable */

import { async, inject } from "@angular/core/testing";
import { <%= classifiedModuleName %> } from "./<%= fileName %>";

describe("<%= classifiedModuleName %>", () => {
	it("should create an instance", () => {
		expect(new <%= classifiedModuleName %>()).toBeTruthy();
	});
});
