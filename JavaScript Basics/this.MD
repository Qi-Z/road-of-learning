# this

## Call Site
* func.bind()
* object.func
* apply, call
* `window` or `global`


# Example
```javascript
var object = {
  foo: 'bar',
  say: function() {
    var self = this;
    (function() {
      console.log('From IIFE: this.foo = '+this.foo);
      console.log('From IIFE: self.foo = '+self.foo);
    }()); // IIFE
  }
}

object.say();
```
