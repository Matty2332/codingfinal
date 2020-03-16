## Question A (50% credit):

In CSS3, how would you select:

  - Every `<a>` element whose `href` attribute value begins with “https”.
[href^="https"]
  - Every `<a>` element whose `href` attribute value ends with “.pdf”.
[href$=".pdf"]
  - Every `<a>` element whose `href` attribute value contains the substring “css”.
[href*="css"]
## Question B (50% credit):

What is the purpose of the z-index and how is it used? What possible values does the z-index take (e.g. one of those is "auto")?

The purpose of the z-index property is to determine the stack level of an HTML element.  The "stack level" refers to the element's position on the Z axis (opposed to the X or Y axis)  The higher values will be at the top of the stacking order and runs perpendicular to the display.  It is used to displace elements on the Z-axis i.e. in or out of the screen.  It is used to define the order of element if they overlap on each other. Other than auto, other possible values that the z-index could take would be any integer, inherit, intitial, and unset.

