This will help you find a common selector for your given element.

This helper was extracted from this awesome extension called [SelectorGadget](https://chrome.google.com/webstore/detail/selectorgadget/mhjhnkcfbdhnjickkkdbjoemdmbfginb), you can install and play with it before continuing the development here.

# What's a **common selector**? 🤔

![](http://i.imgur.com/9txG5YT.png)

For this image, this is a unique selector, that only applies to that first result,

```
#\32 1041784 > td:nth-child(3) > a
```

However, if you use the following, it will return all titles on that page,

```
.storylink
```

So if you give the library a list of elements, it will find a common selector. For example, the following,

```
helper.predictCss(document.querySelectorAll("#\32 1041784 > td:nth-child(3) > a"), [])
```

will return the following,

```
.storylink
```

That's a common selector.

# Usage

The format for `.predictCss(selected,rejected)` is that you give it a list of selected elements and a list of rejected elements using document.querySelectorAll. It will return a **common selector** based on that scope.

Test it out:

```js
var pHelper = new DomPredictionHelper();
var css = pHelper.predictCss(
  document.querySelectorAll(".title > .storylink"),
  document.querySelectorAll('[id="15781883"]')
);
console.log(css);
```

Not only that, you can reject few elements and get a more specific common selector.

All of the following will work,

- .predictCss(document.querySelectorAll("some unique selector(s)"), document.querySelectorAll("some unique selector(s)"))
- .predictCss(document.querySelectorAll(some element or elements), document.querySelectorAll(some element or elements))
- .predictCss(document.querySelectorAll(event.target), document.querySelectorAll(event.target))

Basically, anything you can pass to document.querySelectorAll, you can pass to predictCss, it will just require two instances, one with selected items, one with rejected items.

# Development

You can continue the development on a hacker news source, on the [example](example) folder.

```
yarn install
yarn run start
```

Open browser and go to http://localhost:1234/

Your window will look like this,
![](http://i.imgur.com/ntD9ZQ5.png)
