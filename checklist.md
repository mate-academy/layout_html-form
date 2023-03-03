1. [CODE STYLE] - Keep your code line length below 80. It’s not only historical
tradition, but also allows your code to fit into one standard screen without
horizontal scroll. 
But do not break the line if it cannot be broken (ex., long links).


2. [CODE STYLE] - Remember about correct indentation between parent and child
elements. Each level of nesting, including text, contained inside the element,
requires 2-space offset.
        <details>
          <summary>BAD examples</summary>
            ![html-indentations-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-indentations/example-bad-1.png)
        </details>
        <details>
          <summary>GOOD example</summary>
            ![html-indentations-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-indentations/example-good-1.png)
        </details>


3. [CODE STYLE] - If the HTML-element has long attribute values or number of
attributes is more than 2 - start each one, including the first, on the new
line with 2-space indentation related to tag. Tag’s closing bracket should be
on the same level as opening one.
        <details>
          <summary>BAD examples</summary>
            ![html-attributes-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-1.png)
            ![html-attributes-bad-example-2](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-2.png)
            ![html-attributes-bad-example-3](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-3.png)
            ![html-attributes-bad-example-4](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-bad-4.png)
        </details>
        <details>
          <summary>GOOD example</summary>
            ![html-attributes-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-attributes/example-good-1.png)
        </details>


4. [CODE STYLE] - Use camelCase for values of name attribute - they should be
valid as JavaScript object keys. It should not contain spaces, “-” or other
special characters.
        <details>
          <summary>BAD example</summary>
            ![html-name-attribute-bad-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-name-attribute/example-bad-1.png)
        </details>
        <details>
          <summary>GOOD example</summary>
            ![html-name-attribute-good-example-1](https://mate-academy.github.io/fe-program/css/checklists/html-name-attribute/example-good-1.png)
        </details>


5. [CODE STYLE] - No need to provide empty value="" attribute for inputs. Add
it only if a certain value is specified from the start, or use placeholders.

6. [CODE STYLE] - Don't style tags, use class selector instead

7. [FUNCTIONAL] - You need to use a label tag for each input, so that every
input could be activated by clicking on the corresponding label.

8. [FUNCTIONAL] - Check the textarea behaviour - when you click on the textarea, 
the cursor should appear in the beginning of the input.
       <details>
          <summary>BAD example</summary>
            <img width="172" alt="image" src="https://user-images.githubusercontent.com/94261494/220734116-a5c8da79-68ca-49ac-b9c6-7303d774f7a1.png">
        </details>
        <details>
          <summary>GOOD example</summary>
            <img width="163" alt="image" src="https://user-images.githubusercontent.com/94261494/220747096-076e133e-e5f8-4de4-9fe0-9beaf40c9e53.png">
        </details>
ATTENTION!!! the closing tag should start on the level as opening tag (this is required to pass the html linter)

Example:
```
 <textarea
   class="textarea"
></textarea>
```
9. [TESTS] - Remember, you need to add a certain distance BETWEEN inputs and
BETWEEN blocks with inputs. It means that, for example, the last input in
the group of inputs should not have a set bottom margin.


10. [TESTS] - Remember, any other styles besides margins, should be browser
default.

