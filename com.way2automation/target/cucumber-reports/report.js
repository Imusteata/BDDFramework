$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/UsedCarSearch.feature");
formatter.feature({
  "name": "Acceptance testing to validate Used Search cars page is working properly.",
  "description": " In order to validate that\n the Used search cars page is working fine\n we will do the acceptance testing",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Used-Search_cars"
    }
  ]
});
formatter.scenario({
  "name": "Validate used search cars page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Used-Search_cars"
    },
    {
      "name": "@Used-Search_cars-Positive"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on the Home Page \"https://www.carsguide.com.au\" of CarsGuide website",
  "keyword": "Given "
});
formatter.match({
  "location": "SearchCarsSteps.i_am_on_the_Home_Page_of_CarsGuide_website(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I move to the  menu",
  "rows": [
    {
      "cells": [
        "menu"
      ]
    },
    {
      "cells": [
        "buy and sell"
      ]
    },
    {
      "cells": [
        "reviews"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "SearchCarsSteps.i_move_to_the_menu(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Used\" link on Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.click_on_link_on_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select car brand as \"Audi\" from AnyMake Dropdown on Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_brand_as_from_AnyMake_Dropdown_on_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select car model on Used Search Car Page",
  "rows": [
    {
      "cells": [
        "Model"
      ]
    },
    {
      "cells": [
        "A4"
      ]
    },
    {
      "cells": [
        "A3"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_model_on_Used_Search_Car_Page(String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select car location as \"NSW - Sydney\" from SelectLocation Dropdown on Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_location_as_from_SelectLocation_Dropdown_on_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "select car price as \"$5,000\" from price Dropdown on Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.select_car_price_as_from_price_Dropdown_on_Used_Search_Car_Page(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on Find_My_Next_car button on Used Search Car Page",
  "keyword": "And "
});
formatter.match({
  "location": "UsedCarsSearchSteps.click_on_Find_My_Next_car_button_on_Used_Search_Car_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see list of searched cars on Used Search Car Page",
  "keyword": "Then "
});
formatter.match({
  "location": "UsedCarsSearchSteps.i_should_see_list_of_searched_cars_on_Used_Search_Car_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the page title should be \"Used Audi A4 Under 5000 for Sale Sydney NSW | carsguide\"",
  "keyword": "And "
});
formatter.match({
  "location": "SearchCarsSteps.the_page_title_should_be(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});