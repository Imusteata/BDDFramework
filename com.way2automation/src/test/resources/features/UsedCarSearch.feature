@Used-Search_cars 
Feature: Acceptance testing to validate Used Search cars page is working properly. 
 In order to validate that
 the Used search cars page is working fine
 we will do the acceptance testing

@Used-Search_cars-Positive 
Scenario: Validate used search cars page 
	Given I am on the Home Page "https://www.carsguide.com.au" of CarsGuide website 
	When I move to the  menu 
		|menu		 |
		|buy and sell|
		|reviews	 |
		
	And click on "Used" link on Used Search Car Page
	And select car brand as "Audi" from AnyMake Dropdown on Used Search Car Page
	And select car model on Used Search Car Page
	    |Model|
	    |A4   |
	    |A3   |
	
	And select car location as "NSW - Sydney" from SelectLocation Dropdown on Used Search Car Page
	And select car price as "$5,000" from price Dropdown on Used Search Car Page
	And click on Find_My_Next_car button on Used Search Car Page
	Then I should see list of searched cars on Used Search Car Page
	And the page title should be "Used Audi A4 Under 5000 for Sale Sydney NSW | carsguide"