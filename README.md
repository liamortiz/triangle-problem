## Instructions
By starting at the top of the triangle and moving to adjacent numbers on the row below, the maximum
total from top to bottom is 27.

```javascript
   5
  9 6
 4 6 8
0 7 1 6
```

Write a program in a language of your choice to find the maximum total from top to bottom in
triangle.txt.

## Data Structure
I decided to use a multidimensional array in order to separate the numbers into rows and make finding adjacent numbers easier.

## Parsing the File
Before I could do anything with the file data, I had to first remove any characters that were not integers.
- White Spacing
- /n
- /r

Then construct the required 2D array from the file data.


## Results
While looping through the rows of the pyramid the program checks if the current row is divisible by two.
Depending on that outcome it grabs the correct number within that row and adds it to the total.

## How to Run This
- Have NodeJs Installed
- Make sure text file is in the same directory
- Run node pyramid.js from the terminal
