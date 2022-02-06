Feature: Demo Feature
    
    Scenario Outline: Run first demo feature
        Given Google page is opened
        When Search with <SearchItem>
        Then Click on the first search result
        Then Url should match <ExpectedURL>

        Examples:
            | TestID        | SearchItem    | ExpectedURL           |
            | DEMO_TC001    | WEB WDIO      | https://webdriver.io/  |