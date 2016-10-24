# view-with-transition

Angular 1.x ngRoute state transitions with block containers made simple.

## Installation

### Using Bower

```shell
bower install view-with-transition
```

### Using npm
```shell
npm install view-with-transition
```

### Declare in angular app manifest
```js
angular.module('myApp', ['ui.route', 'dzegarra.utils.transitions']);
```

## Use

For be able of managing the transition is required to move the ui-view element inside a container.

### HTML
```html
<head>
    ...
    <link rel="stylesheet" href="view-with-transition.min.css">
    ...
</head>
<body>
    ...
    <main class="view-container">
        <ui-view view-with-transition></ui-view>
    </main>
    ...
    <script src="view-with-transition.min.js"></script>
    <script src="app.js"></script>
</body>
```

### Custom transitions

By default the transition used is `fade`. You can set new transitions passing the
name of the CSS class with the transition as a value of `view-with-transition` 
directive.

#### This library came with a few transition effects:
 - zoom-in
 - slide-left
 - slide-right
 - slide-up
 - slide-down

For can use these this way:
```html
<main class="view-container">
    <ui-view view-with-transition="zoom-in"></ui-view>
</main>
```

And yep, you can create your own transitions and use then this way.