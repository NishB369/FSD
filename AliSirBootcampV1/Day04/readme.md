# FSD Bootcamp Day 04 | 18 June 2025

## Object
- Its defined in relation to how things are stored in memory - heap and stack
- Reference variable - has data/address to collection of bytes that stores the actual data
- ‘this’ refers to current instance of the object

## ‘this’
- An object has it for its current instance
- In js function is indeed an object
    - Function is obj so we access to ‘this’
    - Just like obj we can add properties of type function or data
        - If values is a function then there this refers to outer function (this is a member of function)
        - Typeof function returns function even if its a object
        - Function is a special kind of obj and thus type of return ‘function’

## Normal Function vs Arrow Function

| Feature | Normal Function | Arrow Function |
|---------|----------------|----------------|
| **Syntax** | `function name() {}` | `const name = () => {}` |
| **`this` binding** | Has its own `this` | Lexical scope - inherits `this` |
| **Hoisting** | ✅ Hoisted | ❌ Not hoisted |
| **`arguments` object** | ✅ Available | ❌ Not available |
| **Constructor** | ✅ Can be constructor | ❌ Cannot be constructor |
| **Method definition** | Good for object methods | Not ideal for object methods |

### Examples

```javascript
// Normal Function
function add(a, b) {
    return a + b;
}

// Arrow Function  
const add = (a, b) => a + b;
```

## `this` Behavior & Lexical Scope

```javascript
const obj = {
    name: 'John',
    
    // Normal function - 'this' refers to obj
    sayHello: function() {
        console.log(this.name); // 'John'
    },
    
    // Arrow function - lexical scope, 'this' from surrounding context
    sayHi: () => {
        console.log(this.name); // undefined (inherits from global)
    },
    
    // Nested example showing lexical scope
    counter: function() {
        setTimeout(() => {
            console.log(this.name); // 'John' - inherits from counter()
        }, 1000);
    }
};
```