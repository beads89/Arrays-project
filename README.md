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

_This is an application that requires the user to input a number and will return a string ranging from 0 to the entered number. Any number containing 1, 2, or 3 will be respectfully replaced by "Beep!", "Boop!" and "Won't you be my neighbor?". Only whole numbers will be displayed._

## Setup/Installation Requirements

* _Clone or download github repository to machine_
* _If a .zip was downloaded, extract contents and open folder at extracted location_
* _If cloned, navigate to and open cloned folder_
* _Open index.html_

## Known Bugs

* _TBD_
* _should go here_

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
_Test: "It should display an individual range of numbers starting from 0 and going to 10"_
_Code: numberTranslate(10);_
_Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]_

_Test: "It should display each number, but replace 3 with "Won't you be my neighbor?"_
_Code: numberTranslate(3);_
_Expected Output: [0, 1, 2, Won't you be my neighbor?]_

_Test: "It should display each number, but replace 3 with "Won't you be my neighbor?" and 2 with "Boop!"._
_Code: numberTranslate(2);_
_Expected Output: [0, 1, Boop!, Won't you be my neighbor?]_



