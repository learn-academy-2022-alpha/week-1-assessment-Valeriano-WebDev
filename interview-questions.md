# ASSESSMENT 1: Tech Interview Practice Questions
Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

  Your answer: 
                A conditional statement is a value that needs to be evaluated as true or false
                in order for the continuing logic to be executed . If/else, If / else if statements and 
                various loops are generally used to accomplish this.
     
  Researched answer:
                If HTML and CSS are like the skeleton and body of a human then Javascript is like the brain. 
                Controlling the behavior and actions, conditional statements are central to ensure the correct actions
                are occurring in our code. It is like our conscious determining what is right/wrong, true/false, what should
                and shouldn't run. It is mentioned in the syllabus that conditionals follow a "flowchart-like" structure.
    References: https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/conditionals.md    
                https://www.w3schools.com/js/js_if_else.asp
                


1. What is git? What is the difference between git and Github?

  Your answer: 
                In order to manage our project code and files we use Git. It is a version control system where we can see all the changes made
                over time. Github is cloud or web-based service where we can upload our files to share and collaborate with others.
                Locally on our own computers we can liken Git to having rough drafts of a written paper in our binder and Github is when we bring that paper 
                to class to either be peer edited or graded by a teacher.
 

  Researched answer:
                Git is a software while Github is a cloud based service. Using git locally we utilize the command-line tool
                while Github uses a graphical user interface(GUI). Git is managed by linux while Github is managed by microsoft. Although,
                they have different competitors and different purposes. Both Git and Github are used to complement each other and make managing code
                easier.
    References: https://www.simplilearn.com/tutorials/git-tutorial/git-vs-github#git_and_github_operate_completely_differently
                https://www.geeksforgeeks.org/difference-between-git-and-github/
                
                


2. Which JavaScript operators will return a Boolean value?

  Your answer: 
               JavaScript logical operators , && (and) || (or) used in tandem with conditionals return the 
               value true or false. 

  Researched answer:
                In addition , equality operators will also return a Boolean value. Loosely == or Strictly === comparing
                values will return true/false. We can also combine that with the logical not ! operator to reverse the 
                turn truthy to falsy and vice versa. I don't have very much exposure with this concept yet but we can use 
                a double not !! to "to explicitly force the conversion of any value to the corresponding boolean primitive." -MDN
    References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT
                https://github.com/learn-academy-2022-alpha/Syllabus/blob/main/javascript/intro.md



3. What is an index? What is the difference between index and value?

  Your answer: Index would be the place of a specified item, while value is what that specified item is. For example,
               finding what place of a string a certain letter is or what place an element of an array occurs would be 
               the index, while the letter or specific word would be the value. 

  Researched answer:
               We can attach [] to the end of a string to find the placement of a particular character contained in that string.
               Using the index method on a array will return the element located at the specified index. Just like strings
               arrays are zero-indexed . Meaning the first letter or element would be 0 , and so forth. If the specified char/element index is not found
               then a -1 will be the resulting output.Values are generally contain properties that define variables. They are often compared, assigned 
               and altered to suit our coding needs. In order to handle the massive amount of information and date we need to manipulate
               we can look at values as manageable bits of information.
   References: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
               https://eloquentjavascript.net/01_values.html 
                



4. What is iteration?

  Your answer: Iteration in programming is where a specified value is checked and evaluated against every occurrence
               of another value. This can be accomplished by using conditionals and loops. We can check each individual character
               of a string through iteration. We can also iterate over an array or in other words, check each 
               value of an array against another value. Iteration can be used to repeat a loop until a certain condition is met.


  Researched answer:
                There are various ways we can navigate and iterate through arrays. There is the forEach() function, and the
                map() method. Using iteration makes it easier to manipulate data and solve problems without having to write repeat 
                code . 
    References: https://www.w3schools.com/js/js_array_iteration.asp
                https://afteracademy.com/blog/what-is-iteration-in-programming



5. Give a brief description of proper pair programming techniques. What are the roles of each person?

  Your answer: 
               Proper paired programming requires open communication between both roles. One person filling the role as the "driver" and the other 
               as the "navigator". It would act in the same way as you driving in the car while a passenger tells you where to go.
               Only one person can operate the vehicle at a time. Or in our case, only one person will actively be coding.  The other person
               fills a support role, aiding in proper logic development, picking out coding errors, sifting through documentation and ensuring
               the guidelines for the project are being adhered to. Both should be collaborating and alternating roles, to gain experience in both areas.
               In aviation the pilot and co-pilot must act in tandem and use a method called "challenge and response". Any action taken is verbalized and
               then reiterated back so that both parties are in the loop into what is occurring at all times.
               Extended lapses in concentration lead to mistakes. 

  Researched answer:
               Paired programming reduces fatigue and increases work productivity. Quality of work generally tends to be higher and 
               burnout is lessened due to the shared load and accountability. This agile software development technique spreads out the workload
               so each person can focus on their role. Each will learn how to play to their strengths and weaknesses when 
               both driving and navigating. Learning how to work with other programmers of varying knowledge levels and personalities
               is essential for long-term success.
    References: https://medium.com/@weblab_tech/pair-programming-guide-a76ca43ff389
                https://en.wikipedia.org/wiki/Pair_programming
                
                


## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: Higher-Order functions , is a way to write cleaner code and avoid unnecessary repetition 
allowing functions to be used in a wider scope. These are functions which can take functions as arguments and return a
function as well.

References: https://eloquentjavascript.net/05_higher_order.html
            https://dmitripavlutin.com/javascript-higher-order-functions/

2. Jest: A testing framework created by Facebook utilizing unit tests to test code on 
node, react, angular , vue and other apps. 

Reference: https://jestjs.io/

3. Objects: Objects are variables which contain more than one value. They are defined with object literals and
the values work in pairs (name:values). These pairs are known as properties.

References: https://www.w3schools.com/js/js_objects.asp
            https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
            

4. Method:While functions can be invoked by the given name, Methods are properties of objects which contain the function 
          definition. There are numerous built in methods useful in executing commonly used functions.

References: https://dev.to/elpepebenitez/built-in-methods-in-javascript-4bll
            https://www.geeksforgeeks.org/difference-between-methods-and-functions-in-javascript/  

5. Classes: We can liken JavaScript classes to a blueprint. They give us a template on how to construct an object. 

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
