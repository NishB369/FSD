# FSD Bootcamp Day 05 | 19 June 2025

🔗 [TypeScript Tutorial For Beginners
](https://afteracademy.com/blog/typescript-tutorial-for-beginners/)

<details open>
<summary>📑 Class Notes</summary>

## Typescript

- A language is compiled by compiler and then executed on machine
- ts is a transpilar as babel
- It is superset of javascript
- To have predictable behaviour it is needed to make sure that correct types are being used

## Cron Job

- In Linus if one want to execute certain task on certain time - os executes it
- Server —> database —> one can loose access to server
  - To safeguard the data one can use cron job
- Schedule emails

## Issues

- Errors shown at runtime is not good as project can be large
- Also npm packages being used one might not be aware of correct data types to use

## Data Types

- Allowed types
  - string
  - number
  - Array<string>
    - Array<string | number> - heterogenous data types
  - object (not promoted)
  - boolean

## any

- Type inference

  ```javascript
  type Person = {
    name: string,
    age: number,
  };
  ```

- But suppose a field has to be made optional
  - So we use optional mechanism
    - `education?.string`

## Multiple Types

- var : string | number | object
- Respect the types
  - Can use ‘typeof’

## Generics

- These are like templates in other languages
- Use a single letter - convention

  ```javascript
  function print<M>(message: M) {
    console.log(message);
  }
  ```

- But it limits to doing certain things that requires type to be defined
  - Like adding 2 varsity with type N
  - But sum is not defined for all types
- Real world example

  - ```javascript
    publicRequest<T extends object | null, R extends object | null>
    ```
  - this network response call can be used everywhere
    - Limit T to certain types

- Can be used in class and interface as well

## Interface

- These are agreement to have certain properties and functions
- class animal implements mammal{}
  - Now animal has to has mammal defined properties
- Why do we need “Interface”???
  - Rewatch the latter part
  - Public, Protected and Basic Request
  - We can extend the interface from basic to public to protected
  - Make sure the use cases can guarantee the existence of certain properties
  - Class can also implement multiple interfaces at same time
- Types cannot be extended

## enum

- http request error example
- ‘enum’ data type
- Its just a way - figure out how it converts into js at backend - “object”
- Enumerated constants

## Extra

- ‘as’ keyword is used for type assertions
- ‘npx’ — runs without global file
</details>

<details><summary>📄 Blog Notes</summary>

## Intro

- JS has its applications in frontend, backend and other frameworks in other domains
- High demand and performance with maintainability of Javascript has led to Typescript

## What is TS?

- Open Source programming language
- Strongly Typed Superset of JS
  - **Typed**: it considers the type of fields and functions and checks at compile time
  - **Superset of JS**: built on top of JS and added new features
- TS compiles to plain JS after compiling
  - As browsers don't understand anything but JS
  - TS Compiler compiles these JS added new features that provide nicer and easier way of writing syntax

## Why TS?

- Absence of type checking can lead to ambiguity and security issues
- `add()` function takes 2 args - all are converted to string no matter datatypes of passed parameters

```typescript
// JavaScript behavior - problematic
function add(a, b) {
  return a + b;
}
add(5, 3); // 8
add("5", 3); // "53" (string concatenation!)
add(5, "3"); // "53" (string concatenation!)
```

- A JS object can be added with a new property
  - Objects in Javascript are loosely coupled
  - They don't have a proper template

```javascript
// JavaScript - dynamic properties
const user = { name: "John" };
user.age = 25; // Can add new properties anytime
user.salary = 50000; // No restrictions
```

## TS Setup

- Node should be installed
- `npm install typescript --save-dev`
- `tsc -v`
  - tsc stands for TypeScript compiler
  - Produces `tsconfig.json`
    - file to provide instructions on how our Typescript project should be configured

```bash
# Installation
npm install typescript --save-dev

# Check version
tsc -v

# Initialize TypeScript project
tsc --init
```

## Variables

- Allows variable creation using `var`, `let`, `const`
- Data types has to be assigned while creation
  - Once assigned it has to be used with that
- **Type Inference**
  - It infers when variable is declared and initialised
- If no type is assigned
  - It takes `any`

```typescript
// Explicit type declaration
let name: string = "John";
let age: number = 25;
let isActive: boolean = true;

// Type inference
let city = "New York"; // TypeScript infers this as string
let count = 10; // TypeScript infers this as number

// Any type (avoid when possible)
let data: any = "hello";
data = 42; // No error
```

## Types in TS

- JS has got certain data types
- But TS adds on more to them
  - And also allows users to define their own
    - Using ":"

### Basic Types

**number**

```typescript
let price: number = 99.99;
let quantity: number = 5;
```

**string**

```typescript
let firstName: string = "John";
let lastName: string = "Doe";
```

**boolean**

```typescript
let isComplete: boolean = false;
let hasAccess: boolean = true;
```

**object**

- Once defined no new properties can be added

```typescript
let user: { name: string; age: number } = {
  name: "John",
  age: 25,
};
// user.email = "john@example.com";  // Error! Property doesn't exist
```

**Array**

- **Homogeneous**
  - `elemType[]`
  - `Array<elemType>`

```typescript
// Method 1
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["John", "Jane", "Bob"];

// Method 2
let scores: Array<number> = [85, 92, 78];
let cities: Array<string> = ["NYC", "LA", "Chicago"];
```

- **Heterogeneous**
  - `(Type1 | Type2)[]`
  - `Array<Type1 | Type2>`

```typescript
// Method 1
let mixed: (string | number)[] = ["John", 25, "Developer", 50000];

// Method 2
let data: Array<string | number | boolean> = ["John", 25, true];
```

**Tuple**

- We can define the type of data that is stored in each position
- Fixed length, Fixed type array

```typescript
let person: [string, number, boolean] = ["John", 25, true];
let coordinates: [number, number] = [10.5, 20.3];

// person[0] is string
// person[1] is number
// person[2] is boolean
```

**Enum**

- Enums allow us to define a set of predefined constants
- They are then converted into IIFE(Immediately Invoked Function Expression)
- At backend, they are mapped with numeric values
  - By default, the numeric values start with 0 index but they can also be set to any value

```typescript
enum Status {
  Pending, // 0
  Approved, // 1
  Rejected, // 2
}

enum Priority {
  High = 1,
  Medium = 2,
  Low = 3,
}

let currentStatus: Status = Status.Pending;
let taskPriority: Priority = Priority.High;
```

**void**

- If a function not returns anything

```typescript
function logMessage(message: string): void {
  console.log(message);
  // No return statement
}
```

**never**

- It represents values which will never occur
- It is used in functions that can never return any value and with variables that have impossible types
  - Infinite loop

```typescript
function throwError(message: string): never {
  throw new Error(message);
}

function infiniteLoop(): never {
  while (true) {
    // This never ends
  }
}
```

## Type Inference

- If we not explicitly define type to a variable
- TS itself infers the type as per the value
- It also assigns 'any' to uninitialized vars

```typescript
// Type inference examples
let message = "Hello World"; // inferred as string
let count = 42; // inferred as number
let isValid = true; // inferred as boolean

// Uninitialized variables
let data; // inferred as any
data = "string";
data = 123; // No error due to 'any'

// Better approach
let value: unknown; // Use unknown instead of any
```

Functions

- Almost same as that in JS
- But forces to declare strong signatures with strict parameter types and return types
- Functions can also be assigned to variable by giving it type 'Function'

```typescript
// Function with typed parameters and return type
function add(a: number, b: number): number {
  return a + b;
}

// Function with no return value
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

// Optional parameters
function createUser(name: string, age?: number): void {
  console.log(`Name: ${name}, Age: ${age || "Not specified"}`);
}

// Function assigned to variable
let calculate: Function = function (x: number, y: number): number {
  return x * y;
};

// Better typing for function variables
let multiply: (x: number, y: number) => number = function (x, y) {
  return x * y;
};
```

## Type Aliasing

- Once define the type using an alias
- And then keep on using it

```typescript
// Type alias for primitive types
type UserID = string;
type Score = number;

// Type alias for complex types
type User = {
  id: UserID;
  name: string;
  email: string;
  score: Score;
};

type Status = "pending" | "approved" | "rejected";

// Using the aliases
let currentUser: User = {
  id: "user123",
  name: "John Doe",
  email: "john@example.com",
  score: 95,
};

let taskStatus: Status = "pending";
```

## Interface

- It defines object structure
- They perform type checking during compile time
- Object can have any shape but all things defined in interface

```typescript
interface Person {
  name: string;
  age: number;
  email?: string; // Optional property
}

interface Employee extends Person {
  employeeId: string;
  department: string;
  salary: number;
}

// Using interfaces
let user: Person = {
  name: "John",
  age: 30,
  email: "john@example.com",
};

let employee: Employee = {
  name: "Jane",
  age: 28,
  employeeId: "EMP001",
  department: "Engineering",
  salary: 75000,
};
```

## Type Aliases vs Interface

### Key Differences:

- **Aliases support all kind of type including primitive**
- **Interface support only object**
- Another difference is that type aliases cannot be extended or implemented if you use the union operator with your type definition
- **Declaration merging** is supported by interfaces but not by type aliases
  - It means all fields that are declared in multiple declarations of the same interface, will get merged into a single interface

```typescript
// Type aliases - support primitives and unions
type ID = string | number;
type Status = "active" | "inactive";

// Interface - only objects
interface User {
  id: ID;
  name: string;
}

// Declaration merging with interfaces
interface User {
  email: string; // This gets merged with above User interface
}

// Now User interface has: id, name, and email

// Type aliases with unions cannot be extended
type UserType =
  | {
      name: string;
    }
  | {
      id: number;
    };

// This won't work:
// interface ExtendedUser extends UserType {}  // Error!

// But this works with interfaces:
interface ExtendedUser extends User {
  age: number;
}
```

</details>

<details><summary>any and unkown</summary>

## Core Principles

- **Prefer `unknown` over `any`**
- Use `any` **only as a last resort**
- Use `unknown` when you're unsure of the type but want **type safety**
- Use type guards to safely refine `unknown`

## 🧨 What's wrong with `any`?

```typescript
let data: any = "hello";
data(); // ✅ No error at compile time — 💥 Runtime crash
```

- `any` disables all type checking
- It's like saying: "TypeScript, take a nap. I got this."
- Linting rules like `no-explicit-any` exist because it often hides bugs

## 🛡️ Prefer `unknown` (safer alternative)

```typescript
let value: unknown = "hello";
value(); // ❌ Error: Object is of type 'unknown'.
```

TypeScript forces you to **narrow the type** before using it:

```typescript
if (typeof value === "string") {
  console.log(value.toUpperCase()); // ✅ Safe usage
}
```

## ✅ When to Use `any` (Last Resort)

Use `any` when:

- You're **working with dynamic or legacy data** (e.g., from `JSON.parse()`)
- You're **prototyping** and will define proper types later
- A **third-party library** has no type definitions
- You're **deliberately opting out** of type checking in a very specific spot

```typescript
// Example: parsing unknown JSON structure
const response = await fetch("/data");
const rawData: any = await response.json(); // temporary use

// But better:
const rawData: unknown = await response.json();
// then narrow or transform into a known type
```

## ✅ Where to avoid `any`

- **Function parameters** and **return types** - Use proper types or generics
- **Component props (React)** - Use defined interfaces
- **Global state/data stores** - Type them strictly or use `unknown`

## 🧠 Summary

| Use Case                  | Use `any`? | Use `unknown`? |
| ------------------------- | ---------- | -------------- |
| Temporary prototyping     | ✅ Yes     | ✅ Yes         |
| From untyped APIs         | ✅ Yes     | ✅ Yes         |
| Safe handling needed      | ❌ No      | ✅ Yes         |
| Want TS to catch mistakes | ❌ No      | ✅ Yes         |

---

Want examples for how to convert `any` → `unknown` in real scenarios like API responses or React states?</details>
