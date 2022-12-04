Feature: Login Feature
    
    @smoke @positive @regression @daily
    Scenario Outline: Login with many data
        Given Website homepage
        When User input username <username>
        When User input password <password>
        Then User click login button

        Examples:
            | username    | password    | 
            | sanber39    | sukses12345     |


           
