# this
JavaScript is late binding language. Not bind at compile time, not at runtime, BUT at call time!

## Call Site
* func.bind()
* object.func
* apply, call
* `window` or `global`


<blockquote>
  Called with new? Use the newly constructed object.

Called with call or apply (or bind)? Use the specified object.

Called with a context object owning the call? Use that context object.

Default: undefined in strict mode, global object otherwise.
</blockquote>
  
  
# Example
```javascript
var myObject = {
  foo: 'bar',
  say: function() {
    var self = this;
    (function() {
      console.log('From IIFE: this.foo = '+this.foo);
      console.log('From IIFE: self.foo = '+self.foo);
    }()); // IIFE
  }
}

myObject.say();

```
prints out:

```
From IIFE: this.foo = undefined
From IIFE: self.foo = bar
```
