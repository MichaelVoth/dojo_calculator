# dojo_calculator
 Practice using JavaScript to make a simple calculator

This was a real challenge for me to wrap my head around the JavaScript. Even googling JavaScript calculators made no sense to me. But then I found the .join ability which let me throw everything into one big array. It then took another minute to figure out the eval() ability was what I wanted. 
From there, it was just making sure nothing would mess up the array order from instances like pressing the operators multiple times. Finally, I figured out how to convert the eval() string into a number to prevent errors from hitting the decimal point more than once. That even made scientific notation possible for really big numbers.