#2 Data parsing
Suppose that we have the following DOM structures:
```pug
fieldset.input-hub
  div.input-element(data-name="a" data-value="1")
  div.input-element(data-name="a" data-value="2")
  div.input-element(data-name="b" data-value="3")
  fieldset.input-hub(data-name="c")
    div.input-element(data-name="d" data-value="4")
    div.input-element(data-name="undefined" data-value="5")
    /* Invalid input should not be parsed */
    div.input-element(data-value="6")
```
How would you parse the data-value as the following result:
{a: [1, 2], b: 3, c: {d: 4, undefined: 5}}
Note that the `fieldset` will appear recursively so we hope that you could give an general solution.
