export const quizInformation = [
    {
        question : "What's the output?",
        task:
            "function sayHi() {\n" +
            "  console.log(name);\n" +
            "  console.log(age);\n" +
            "  var name = \"Lydia\";\n" +
            "  let age = 21;\n" +
            "}\n" +
            "\n" +
            "sayHi();"
        ,
        answers: {
            A:" Lydia and undefined",
            B:" Lydia and ReferenceError",
            C:" ReferenceError and 21",
            D:" undefined and ReferenceError",
        },
        trueAnswer : {D:" undefined and ReferenceError"}
    },
    {
        question : "What's the output?",
        task:
            "for (var i = 0; i < 3; i++) {\n" +
            "  setTimeout(() => console.log(i), 1);\n" +
            "}\n" +
            "\n" +
            "for (let i = 0; i < 3; i++) {\n" +
            "  setTimeout(() => console.log(i), 1);\n" +
            "}",
        answers: {
            A: "0 1 2 and 0 1 2",
            B: "0 1 2 and 3 3 3",
            C: "3 3 3 and 0 1 2"
        },
        trueAnswer : {C: "3 3 3 and 0 1 2"}
    },
    {
        question : "What's the output?",
        task: "+true;\n!\"Lydia\";",
        answers: {
            A: "1 and false",
            B: "false and NaN",
            C: "false and false"
        },
        trueAnswer : {A: "1 and false"}
    },
    {
        question : "What's the output?",
        task:
            "const shape = {\n" +
            "  radius: 10,\n" +
            "  diameter() {\n" +
            "    return this.radius * 2;\n" +
            "  },\n" +
            "  perimeter: () => 2 * Math.PI * this.radius\n" +
            "};\n" +
            "\n" +
            "console.log(shape.diameter());\n" +
            "console.log(shape.perimeter());",
        answers: {
            A: "20 and 62.83185307179586",
            B: "20 and NaN",
            C: "20 and 63",
            D: "NaN and 63"
        },
        trueAnswer : {B: "20 and NaN"}
    },
    {
        question : "Which one is true?",
        task:
            "const bird = {\n" +
            "  size: \"small\"\n" +
            "};\n" +
            "\n" +
            "const mouse = {\n" +
            "  name: \"Mickey\",\n" +
            "  small: true\n" +
            "};",
        answers: {
            A: "mouse.bird.size is not valid",
            B: "mouse[bird.size] is not valid",
            C: "mouse[bird[\"size\"]] is not valid",
            D: "All of them are valid"
        },
        trueAnswer : {A: "mouse.bird.size is not valid"}
    },
    {
        question : "What's the output?",
        task:
            "let c = { greeting: \"Hey!\" };\n" +
            "let d;\n" +
            "d = c;\n" +
            "c.greeting = \"Hello\";\n" +
            "\n" +
            "console.log(d.greeting);",
        answers: {
            A: "Hello",
            B: "Hey!",
            C: "undefined",
            D: "ReferenceError",
            E: "TypeError"
        },
        trueAnswer : {A: "Hello"}
    },
    {
        question : "What's the output?",
        task:
            "let a = 3;\n" +
            "let b = new Number(3);\n" +
            "let c = 3;\n" +
            "\n" +
            "console.log(a == b);\n" +
            "console.log(a === b);\n" +
            "console.log(b === c);",
        answers: {
            A: "true false true",
            B: "false false true",
            C: "true false false",
            D: "false true true"
        },
        trueAnswer : {C: "true false false"}
    },
    {
        question : "What happens when we do this?",
        task:
            "function bark() {\n" +
            "  console.log(\"Woof!\");\n" +
            "}\n" +
            "\n" +
            "bark.animal = \"dog\";",
        answers: {
            A: "Nothing, this is totally fine!",
            B: "SyntaxError. You cannot add properties to a function this way.",
            C: "\"Woof\" gets logged.",
            D: "ReferenceError"
        },
        trueAnswer : {A: "Nothing, this is totally fine!"}
    },
    {
        question : "What's the output?",
        task:
            "function Person(firstName, lastName) {\n" +
            "  this.firstName = firstName;\n" +
            "  this.lastName = lastName;\n" +
            "}\n" +
            "\n" +
            "const lydia = new Person(\"Lydia\", \"Hallie\");\n" +
            "const sarah = Person(\"Sarah\", \"Smith\");\n" +
            "\n" +
            "console.log(lydia);\n" +
            "console.log(sarah);",
        answers: {
            A: "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and undefined",
            B: "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and Person {firstName: \"Sarah\", lastName: \"Smith\"}",
            C: "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and {}",
            D: "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and ReferenceError"
        },
        trueAnswer : {A: "Person {firstName: \"Lydia\", lastName: \"Hallie\"} and undefined"}
    },
    {
        question : "What's the output?",
        task:
            "function sum(a, b) {\n" +
            "  return a + b;\n" +
            "}\n" +
            "\n" +
            "sum(1, \"2\");",
        answers: {
            A: "NaN",
            B: "TypeError",
            C: "\"12\"",
            D: "3"
        },
        trueAnswer : {C: "\"12\""}
    },
    {
        question : "What's the output?",
        task:
            "let number = 0;\n" +
            "\n" +
            "console.log(number++);\n" +
            "console.log(++number);\n" +
            "console.log(number);",
        answers: {
            A: "1 1 2",
            B: "1 2 2",
            C: "0 2 2",
            D: "0 1 2"
        },
        trueAnswer : {C: "0 2 2"}
    },
    {
        question : "What's the output?",
        task:
            "function checkAge(data) {\n" +
            "  if (data === { age: 18 }) {\n" +
            "    console.log(\"You are an adult!\");\n" +
            "  } else if (data == { age: 18 }) {\n" +
            "    console.log(\"You are still an adult.\");\n" +
            "  } else {\n" +
            "    console.log(`Hmm.. You don't have an age I guess`);\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "checkAge({ age: 18 });",
        answers: {
            A: "You are an adult!",
            B: "You are still an adult.",
            C: "Hmm.. You don't have an age I guess"
        },
        trueAnswer : {C: "Hmm.. You don't have an age I guess"}
    },
    {
        question : "What's the output?",
        task:
            "function getAge() {\n" +
            "  \"use strict\";\n" +
            "  age = 21;\n" +
            "  console.log(age);\n" +
            "}\n" +
            "\n" +
            "getAge();",
        answers: {
            A: "21",
            B: "undefined",
            C: "ReferenceError",
            D: "TypeError"
        },
        trueAnswer : {C: "ReferenceError"}
    },
    {
        question : "What's value of sum?",
        task: "const sum = eval(\"10*10+5\");",
        answers: {
            A: "105",
            B: "\"105\"",
            C: "TypeError",
            D: "\"10*10+5\""
        },
        trueAnswer : {A: "105"}
    },
    {
        question : "What's the output?",
        task: "var num = 8;\nvar num = 10;\n\nconsole.log(num);",
        answers: {
            A: "8",
            B: "10",
            C: "SyntaxError",
            D: "ReferenceError"
        },
        trueAnswer : {B: "10"}
    },
    {
        question : "What's the output?",
        task: "const obj = { a: \"one\", b: \"two\", a: \"three\" };\nconsole.log(obj);",
        answers: {
            A: "{ a: \"one\", b: \"two\" }",
            B: "{ b: \"two\", a: \"three\" }",
            C: "{ a: \"three\", b: \"two\" }",
            D: "SyntaxError"
        },
        trueAnswer : {C: "{ a: \"three\", b: \"two\" }"}
    },
    {
        question : "What's the output?",
        task:
            "const foo = () => console.log(\"First\");\n" +
            "const bar = () => setTimeout(() => console.log(\"Second\"));\n" +
            "const baz = () => console.log(\"Third\");\n" +
            "\n" +
            "bar();\n" +
            "foo();\n" +
            "baz();",
        answers: {
            A: "First Second Third",
            B: "First Third Second",
            C: "Second First Third",
            D: "Second Third First"
        },
        trueAnswer : {B: "First Third Second"}
    },
    {
        question : "What's the output?",
        task: "!!null;\n!!\"\";\n!!1;",
        answers: {
            A: "false true false",
            B: "false false true",
            C: "false true true",
            D: "true true false"
        },
        trueAnswer : {B: "false false true"}
    },
    {
        question : "What does this return?",
        task: "[...\"Lydia\"];",
        answers: {
            A: "[\"L\", \"y\", \"d\", \"i\", \"a\"]",
            B: "[\"Lydia\"]",
            C: "[[], \"Lydia\"]",
            D: "[[\"L\", \"y\", \"d\", \"i\", \"a\"]]"
        },
        trueAnswer : {A: "[\"L\", \"y\", \"d\", \"i\", \"a\"]"}
    },
    {
        question : "What's the output?",
        task:
            "let person = { name: \"Lydia\" };\n" +
            "const members = [person];\n" +
            "person = null;\n" +
            "\n" +
            "console.log(members);",
        answers: {
            A: "null",
            B: "[null]",
            C: "[{}]",
            D: "[{ name: \"Lydia\" }]"
        },
        trueAnswer : {D: "[{ name: \"Lydia\" }]"}
    },
    {
        question : "What's the output?",
        task:
            "const person = {\n" +
            "  name: \"Lydia\",\n" +
            "  age: 21\n" +
            "};\n" +
            "\n" +
            "for (const item in person) {\n" +
            "  console.log(item);\n" +
            "}",
        answers: {
            A: "{ name: \"Lydia\" }, { age: 21 }",
            B: "\"name\", \"age\"",
            C: "\"Lydia\", 21",
            D: "[\"name\", \"Lydia\"], [\"age\", 21]"
        },
        trueAnswer : {B: "\"name\", \"age\""}
    },
    {
        question : "What's the output?",
        task: "console.log(3 + 4 + \"5\");",
        answers: {
            A: "\"345\"",
            B: "\"75\"",
            C: "12",
            D: "\"12\""
        },
        trueAnswer : {B: "\"75\""}
    },
    {
        question : "What's the output?",
        task:
            "const a = {};\n" +
            "const b = { key: \"b\" };\n" +
            "const c = { key: \"c\" };\n" +
            "a[b] = 123;\n" +
            "a[c] = 456;\n" +
            "\n" +
            "console.log(a[b]);",
        answers: {
            A: "123",
            B: "456",
            C: "undefined",
            D: "ReferenceError"
        },
        trueAnswer : {B: "456"}
    },
    {
        question : "What's the output?",
        task: "const numbers = [1, 2, 3];\nnumbers[10] = 11;\n\nconsole.log(numbers.length);",
        answers: {
            A: "11",
            B: "4",
            C: "Error"
        },
        trueAnswer : {A: "11"}
    },
    {
        question : "What's the value of num?",
        task: "const num = parseInt(\"7*6\");",
        answers: {
            A: "42",
            B: "\"42\"",
            C: "7",
            D: "NaN"
        },
        trueAnswer : {C: "7"}
    },
    {
        question : "What's the output?",
        task:
            "function getInfo(member, year) {\n" +
            "  member.name = \"Lydia\";\n" +
            "  year = \"1998\";\n" +
            "}\n" +
            "\n" +
            "const person = { name: \"Sarah\" };\n" +
            "const birthYear = \"1997\";\n" +
            "\n" +
            "getInfo(person, birthYear);\n" +
            "\n" +
            "console.log(person, birthYear);",
        answers: {
            A: "{ name: \"Lydia\" }, \"1997\"",
            B: "{ name: \"Sarah\" }, \"1998\"",
            C: "{ name: \"Lydia\" }, \"1998\"",
            D: "{ name: \"Sarah\" }, \"1997\""
        },
        trueAnswer : {A: "{ name: \"Lydia\" }, \"1997\""}
    },
    {
        question : "What's the output?",
        task:
            "function greeting() {\n" +
            "  throw \"Hello world!\";\n" +
            "}\n" +
            "\n" +
            "function sayHi() {\n" +
            "  try {\n" +
            "    const data = greeting();\n" +
            "    console.log(\"It worked!\", data);\n" +
            "  } catch (e) {\n" +
            "    console.log(\"Oh no an error:\", e);\n" +
            "  }\n" +
            "}\n" +
            "\n" +
            "sayHi();",
        answers: {
            A: "It worked! Hello world!",
            B: "Oh no an error: undefined",
            C: "SyntaxError: can only throw Error objects",
            D: "Oh no an error: Hello world!"
        },
        trueAnswer : {D: "Oh no an error: Hello world!"}
    },
    {
        question : "What's the output?",
        task: "const numbers = [1, 2, 3, 4, 5];\nconst [y] = numbers;\n\nconsole.log(y);",
        answers: {
            A: "[[1, 2, 3, 4, 5]]",
            B: "[1, 2, 3, 4, 5]",
            C: "1",
            D: "[1]"
        },
        trueAnswer : {C: "1"}
    },
    {
        question : "What's the output?",
        task:
            "const user = { name: \"Lydia\", age: 21 };\n" +
            "const admin = { admin: true, ...user };\n" +
            "\n" +
            "console.log(admin);",
        answers: {
            A: "{ admin: true, user: { name: \"Lydia\", age: 21 } }",
            B: "{ admin: true, name: \"Lydia\", age: 21 }",
            C: "{ admin: true, user: [\"Lydia\", 21] }",
            D: "{ admin: true }"
        },
        trueAnswer : {B: "{ admin: true, name: \"Lydia\", age: 21 }"}
    },
    {
        question : "What's the output?",
        task:
            "const settings = {\n" +
            "  username: \"lydiahallie\",\n" +
            "  level: 19,\n" +
            "  health: 90\n" +
            "};\n" +
            "\n" +
            "const data = JSON.stringify(settings, [\"level\", \"health\"]);\n" +
            "console.log(data);",
        answers: {
            A: "\"{\"level\":19, \"health\":90}\"",
            B: "\"{\"username\": \"lydiahallie\"}\"",
            C: "\"[\"level\", \"health\"]\"",
            D: "\"{\"username\": \"lydiahallie\", \"level\":19, \"health\":90}\""
        },
        trueAnswer : {A: "\"{\"level\":19, \"health\":90}\""}
    },
    {
        question : "What's the output?",
        task:
            "let num = 10;\n" +
            "\n" +
            "const increaseNumber = () => num++;\n" +
            "const increasePassedNumber = number => number++;\n" +
            "\n" +
            "const num1 = increaseNumber();\n" +
            "const num2 = increasePassedNumber(num1);\n" +
            "\n" +
            "console.log(num1);\n" +
            "console.log(num2);",
        answers: {
            A: "10, 10",
            B: "10, 11",
            C: "11, 11",
            D: "11, 12"
        },
        trueAnswer : {A: "10, 10"}
    },
    {
        question : "What's the output?",
        task: "[1, 2, 3, 4].reduce((x, y) => console.log(x, y));",
        answers: {
            A: "1 2 and 3 3 and 6 4",
            B: "1 2 and 2 3 and 3 4",
            C: "1 undefined and 2 undefined and 3 undefined and 4 undefined",
            D: "1 2 and undefined 3 and undefined 4"
        },
        trueAnswer : {D: "1 2 and undefined 3 and undefined 4"}
    },
    {
        question : "What's the output?",
        task:
            "function addToList(item, list) {\n" +
            "  return list.push(item);\n" +
            "}\n" +
            "\n" +
            "const result = addToList(\"apple\", [\"banana\"]);\n" +
            "\n" +
            "console.log(result);",
        answers: {
            A: "['apple', 'banana']",
            B: "2",
            C: "true",
            D: "undefined"
        },
        trueAnswer : {B: "2"}
    },
    {
        question : "What is the output?",
        task: "const list = [1 + 2, 1 * 2, 1 / 2]\n\nconsole.log(list)",
        answers: {
            A: "[\"1 + 2\", \"1 * 2\", \"1 / 2\"]",
            B: "[\"12\", 2, 0.5]",
            C: "[3, 2, 0.5]",
            D: "[1, 1, 1]"
        },
        trueAnswer : {C: "[3, 2, 0.5]"}
    },
    {
        question : "What is the output?",
        task:
            "function sayHi(name) {\n" +
            "  return `Hi there, ${name}`\n" +
            "}\n" +
            "\n" +
            "console.log(sayHi())",
        answers: {
            A: "Hi there,",
            B: "Hi there, undefined",
            C: "Hi there, null",
            D: "ReferenceError"
        },
        trueAnswer : {B: "Hi there, undefined"}
    },
    {
        question : "What's the output?",
        task: "console.log(\"I want pizza\"[0])",
        answers: {
            A: "\"\"",
            B: "\"I\"",
            C: "SyntaxError",
            D: "undefined"
        },
        trueAnswer : {B: "\"I\""}
    },
    {
        question : "What is the output?",
        task:
            "function checkAge(age) {\n" +
            "  if (age < 18) {\n" +
            "    const message = \"Sorry, you're too young.\"\n" +
            "  } else {\n" +
            "    const message = \"Yay! You're old enough!\"\n" +
            "  }\n" +
            "  return message\n" +
            "}\n" +
            "\n" +
            "console.log(checkAge(21))",
        answers: {
            A: "\"Sorry, you're too young.\"",
            B: "\"Yay! You're old enough!\"",
            C: "ReferenceError",
            D: "undefined"
        },
        trueAnswer : {C: "ReferenceError"}
    },
    {
        question : "What's the output?",
        task:
            "function sum(num1, num2 = num1) {\n" +
            "  console.log(num1 + num2)\n" +
            "}\n" +
            "\n" +
            "sum(10)",
        answers: {
            A: "NaN",
            B: "20",
            C: "ReferenceError",
            D: "undefined"
        },
        trueAnswer : {B: "20"}
    },
    {
        question : "What's the output?",
        task: "let newList = [1, 2, 3].push(4)\n\nconsole.log(newList.push(5))",
        answers: {
            A: "[1, 2, 3, 4, 5]",
            B: "[1, 2, 3, 5]",
            C: "[1, 2, 3, 4]",
            D: "Error"
        },
        trueAnswer : {D: "Error"}
    },
    {
        question : "When you click the paragraph, what's the logged output?",
        task:
            "<div onclick=\"console.log('div')\">\n" +
            "  <p onclick=\"console.log('p')\">\n" +
            "    Click here!\n" +
            "  </p>\n" +
            "</div>",
        answers: {
            A: "p div",
            B: "div p",
            C: "p",
            D: "div"
        },
        trueAnswer : {A: "p div"}
    },
    {
        question : "What is the event.target when clicking the button?",
        task:
            "<div onclick=\"console.log('first div')\">\n" +
            "  <div onclick=\"console.log('second div')\">\n" +
            "    <button onclick=\"console.log('button')\">\n" +
            "      Click!\n" +
            "    </button>\n" +
            "  </div>\n" +
            "</div>",
        answers: {
            A: "Outer div",
            B: "Inner div",
            C: "button",
            D: "An array of all nested elements."
        },
        trueAnswer : {C: "button"}
    },
    {
        question : "What's the output?",
        task:
            "const person = { name: \"Lydia\" };\n" +
            "\n" +
            "function sayHi(age) {\n" +
            "  return `${this.name} is ${age}`;\n" +
            "}\n" +
            "\n" +
            "console.log(sayHi.call(person, 21));\n" +
            "console.log(sayHi.bind(person, 21));",
        answers: {
            A: "undefined is 21 Lydia is 21",
            B: "function function",
            C: "Lydia is 21 Lydia is 21",
            D: "Lydia is 21 function"
        },
        trueAnswer : {D: "Lydia is 21 function"}
    },
    {
        question : "What's the output?",
        task:
            "function sayHi() {\n" +
            "  return (() => 0)();\n" +
            "}\n" +
            "\n" +
            "console.log(typeof sayHi());",
        answers: {
            A: "\"object\"",
            B: "\"number\"",
            C: "\"function\"",
            D: "\"undefined\""
        },
        trueAnswer : {B: "\"number\""}
    },
    {
        question : "Which of these values are falsy?",
        task: "0;\nnew Number(0);\n(\"\");\n(\" \");\nnew Boolean(false);\nundefined;",
        answers: {
            A: "0, '', undefined",
            B: "0, new Number(0), '', new Boolean(false), undefined",
            C: "0, '', new Boolean(false), undefined",
            D: "All of them are falsy"
        },
        trueAnswer : {A: "0, '', undefined"}
    },
    {
        question : "What's the output?",
        task:
            "(() => {\n" +
            "  let x, y;\n" +
            "  try {\n" +
            "    throw new Error();\n" +
            "  } catch (x) {\n" +
            "    (x = 1), (y = 2);\n" +
            "    console.log(x);\n" +
            "  }\n" +
            "  console.log(x);\n" +
            "  console.log(y);\n" +
            "})();",
        answers: {
            A: "1 undefined 2",
            B: "undefined undefined undefined",
            C: "1 1 2",
            D: "1 undefined undefined"
        },
        trueAnswer : {A: "1 undefined 2"}
    },
    {
        question : "What's the output?",
        task: "[[0, 1], [2, 3]].reduce(\n  (acc, cur) => {\n    return acc.concat(cur);\n  },  [1, 2]);",
        answers: {
            A: "[0, 1, 2, 3, 1, 2]",
            B: "[6, 1, 2]",
            C: "[1, 2, 0, 1, 2, 3]",
            D: "[1, 2, 6]"
        },
        trueAnswer : {C: "[1, 2, 0, 1, 2, 3]"}
    },
    {
        question : "What's the output?",
        task:
            "function getAge(...args) {\n" +
            "  console.log(typeof args);\n" +
            "}\n" +
            "\n" +
            "getAge(21);",
        answers: {
            A: "\"number\"",
            B: "\"array\"",
            C: "\"object\"",
            D: "\"NaN\""
        },
        trueAnswer : {C: "\"object\""}
    },
    {
        question : "What does this return?",
        task:
            "const firstPromise = new Promise((res, rej) => {\n" +
            "  setTimeout(res.bind(undefined, 'one'), 500);\n" +
            "});\n" +
            "\n" +
            "const secondPromise = new Promise((res, rej) => {\n" +
            "  setTimeout(res, 100, 'two');\n" +
            "});\n" +
            "\n" +
            "Promise.race([firstPromise, secondPromise]).then(res => console.log(res));",
        answers: {
            A: "\"one\"",
            B: "\"two\"",
            C: "\"two\" \"one\"",
            D: "\"one\" \"two\""
        },
        trueAnswer : {B: "\"two\""}
    },
    {
        question : "What's the output?",
        task:
            "async function getData() {\n" +
            "  return await Promise.resolve('I made it!');\n" +
            "}\n" +
            "\n" +
            "const data = getData();\n" +
            "console.log(data);",
        answers: {
            A: "\"I made it!\"",
            B: "Promise {<resolved>: \"I made it!\"}",
            C: "Promise {<pending>}",
            D: "undefined"
        },
        trueAnswer : {C: "Promise {<pending>}"}
    },
    {
        question : "What's the value of output?",
        task:
            "const myPromise = () => Promise.resolve('I have resolved!');\n" +
            "\n" +
            "function firstFunction() {\n" +
            "  myPromise().then(res => console.log(res));\n" +
            "  console.log('second');\n" +
            "}\n" +
            "\n" +
            "async function secondFunction() {\n" +
            "  console.log(await myPromise());\n" +
            "  console.log('second');\n" +
            "}\n" +
            "\n" +
            "firstFunction();\n" +
            "secondFunction();",
        answers: {
            A: "I have resolved!, second and I have resolved!, second",
            B: "second, I have resolved! and second, I have resolved!",
            C: "I have resolved!, second and second, I have resolved!",
            D: "second, I have resolved! and I have resolved!, second"
        },
        trueAnswer : {D: "second, I have resolved! and I have resolved!, second"}
    },
    {
        question : "What's the output?",
        task:
            "const myPromise = Promise.resolve('Woah some cool data');\n" +
            "\n" +
            "(async () => {\n" +
            "  try {\n" +
            "    console.log(await myPromise);\n" +
            "  } catch {\n" +
            "    throw new Error(`Oops didn't work`);\n" +
            "  } finally {\n" +
            "    console.log('Oh finally!');\n" +
            "  }\n" +
            "})();",
        answers: {
            A: "Woah some cool data",
            B: "Oh finally!",
            C: "Woah some cool data Oh finally!",
            D: "Oops didn't work Oh finally!"
        },
        trueAnswer : {C: "Woah some cool data Oh finally!"}
    },
    {
        question : "What's the output?",
        task:
            "const promise1 = Promise.resolve('First')\n" +
            "const promise2 = Promise.resolve('Second')\n" +
            "const promise3 = Promise.reject('Third')\n" +
            "const promise4 = Promise.resolve('Fourth')\n" +
            "const runPromises = async () => {\n" +
            "  const res1 = await Promise.all([promise1, promise2])\n" +
            "  const res2 = await Promise.all([promise3, promise4])\n" +
            "  return [res1, res2]\n" +
            "}\n" +
            "\n" +
            "runPromises()\n" +
            "  .then(res => console.log(res))\n" +
            "  .catch(err => console.log(err))",
        answers: {
            A: "[['First', 'Second'], ['Fourth']]",
            B: "[['First', 'Second'], ['Third', 'Fourth']]",
            C: "[['First', 'Second']]",
            D: "'Third'"
        },
        trueAnswer : {D: "'Third'"}
    }
];