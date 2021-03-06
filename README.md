# _Mr Roboger_

#### _This was created as my independent project for week 3 of Epicodus's full-stack development curriculum._

#### By _**Brandon Eads**_

## Technologies Used

* _HTML_
* _CSS_
* _JavaScript_
* _Bootstrap framework for CSS and JavaScript_
* _jQuery framework for JavaScript_

## Description

_This is an application that requires the user to input a number and will return a string ranging from 0 to the entered number. Any digit containing 1, 2, or 3 will be respectfully replaced by "Beep!", "Boop!" or "Won't you be my neighbor?". If a digit contains two or more of those numbers, the phrase displayed will follow the order of 3 > 2 > 1. For example, if a user inputs 321, that number will instead read as "Won't you be my neighbor?". Only whole numbers will be translated._

## Setup/Installation Requirements

* _Clone or download github repository to machine_
* _If a .zip was downloaded, extract contents and open folder at extracted location_
* _If cloned, navigate to and open cloned folder_
* _Open index.html_

## Known Bugs

* _None as of current. Please contact if any are found._

## License

MIT License

Copyright (c) 2021 Brandon Eads

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Contact Information

_Brandon Eads - brandon181989@hotmail.com_

# Tests

* Describe: _numberTranslate()_
_Test: "It should display an individual range of numbers starting from 0 and going to the number the user enters"_
_Code: numberTranslate(10);_
_Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]_

_Test: "It should display each number, but replace any number containing a 3 with "Won't you be my neighbor?"_
_Code: numberTranslate(3);_
_Expected Output: [0, 1, 2, Won't you be my neighbor?]_

_Test: "It should display each number, but replace any number containing a 3 with "Won't you be my neighbor?" and numbers containing a 2 with "Boop!"._
_Code: numberTranslate(3);_
_Expected Output: [0, 1, Boop!, Won't you be my neighbor?]_

_Test: "It should replace numbers containing 3 with "Won't you be my neighbor?", numbers containing 2 with "Boop!" and numbers containing 1 with "Beep!"._
_Code: numberTranslate(3);_
_Expected Output: [0, Beep!, Boop!, Won't you be my neighbor?]_

_Test: "It should display up to the users inputted number and replace digits containing 3 with "Won't you be my neighbor?", 2 with "Boop!" and 1 with "Beep!". If a digit contains two or more of those numbers, it will only display the phrases in the hierarchy of 3, 2, 1. Ex: 32 should display "Won't you be my neighbor?"._
_Code: numberTranslate(35);_
_Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", "Boop!", "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Boop!", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?", "Won't you be my neighbor?"]_



