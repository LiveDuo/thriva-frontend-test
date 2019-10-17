## Task 1
To allow access to the name variable I used Vuex, storing the variable name in store state and updating on keypress. For further optimization I could setup debounce to update the store every 1s at max.

## Task 2
Following the designs on Zeplin the CheckButton was styled. A rather better approach would be to have the color scheme like colors and background colors in a CSS preprocessor file. I couldn't find a design for the mouse hovering state and I used a simple background highlight effect.

## Task 3
This task was about saving user selections for goals, diets and gender and limited the possible selections when required. The goals and diets were saved as arrays and the gender as a string given the nature of the variables. A few basic unit tests are also included that verified the the component displays text correctly, recognizes disabled and selected state and emits a 'clicked' event when clicked.

## Task 4
To have a rather extensible solution for the progress bar, I added a 'currentStep' meta field to each children route that is the passed to the component. The 'stages' variable is derived from the number of children the route have. I added a unit test that checks if the width of the colored part of the component is 40% when currentStep=2 and stages=5.

## Task 5
Most of the work regarding validation was done completing previous tasks. There was a problem with the 'v-validate' attribute of the BobInput component making it unable to display errors correctly that was fixed.

## Task 6
The last task was to add transitions between the steps in the survey for which I prefered a simple fade animation. As Vue router nested routes were not recognized as different a key attribute was supplied each route to make them distinct.
