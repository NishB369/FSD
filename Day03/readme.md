# FSD Bootcamp Day 03 | 17 June 2025

## Art of Learning

- Iterative Process
- Reflect back and see
- Info —> Write —> Experiment
- Write code —> Try from Scratch
- Multiple Iterations —> Practice
- Neurology of Learning and Brain Functionality
- [Power of Habits](https://ia803102.us.archive.org/35/items/CharlesDuhigg.ThePowerOfHabit_201808/Charles-Duhigg.The-Power-of-Habit.pdf) - Charles Duhigg

## Code Review

### Differnce between `~` and `^` in package.json

#### Comparison Table

| Aspect                     | `~` (Tilde)                  | `^` (Caret)                   |
| -------------------------- | ---------------------------- | ----------------------------- |
| **Name**                   | Tilde range                  | Caret range                   |
| **Update scope**           | Patch-level changes only     | Minor and patch-level changes |
| **Version parts affected** | `~1.2.3` allows `1.2.x`      | `^1.2.3` allows `1.x.x`       |
| **What gets updated**      | Bug fixes, security patches  | New features + bug fixes      |
| **Risk level**             | Lower risk (minimal changes) | Higher risk (more changes)    |
| **Stability**              | More stable/predictable      | Less stable but more features |

#### Version Examples

| Version Specifier | Will Install              | Won't Install    |
| ----------------- | ------------------------- | ---------------- |
| `~1.2.3`          | `1.2.3`, `1.2.4`, `1.2.9` | `1.3.0`, `2.0.0` |
| `^1.2.3`          | `1.2.3`, `1.2.4`, `1.9.0` | `2.0.0`, `0.9.0` |
| `~0.2.3`          | `0.2.3`, `0.2.4`, `0.2.9` | `0.3.0`, `1.0.0` |
| `^0.2.3`          | `0.2.3`, `0.2.4`, `0.2.9` | `0.3.0`, `1.0.0` |

#### Special Cases

| Version  | Tilde Behavior                  | Caret Behavior                  |
| -------- | ------------------------------- | ------------------------------- |
| `~0.2.3` | Only patch updates (`0.2.x`)    | Only patch updates (`0.2.x`)    |
| `~1.2`   | Minor updates allowed (`1.2.x`) | Minor updates allowed (`1.x.x`) |
| `~1`     | Minor updates allowed (`1.x.x`) | Minor updates allowed (`1.x.x`) |
| `~0.0.3` | Exact version only              | Exact version only              |

#### When to Use

| Use Case                  | Recommended | Reason                          |
| ------------------------- | ----------- | ------------------------------- |
| **Production apps**       | `~` (tilde) | Minimize breaking changes       |
| **Development/testing**   | `^` (caret) | Get latest features and fixes   |
| **Libraries**             | `^` (caret) | Allow flexibility for consumers |
| **Critical dependencies** | `~` (tilde) | Maximum stability               |

#### Key Differences

- **`^` (Caret)**: Allows minor version updates (new features) while keeping the same major version
- **`~` (Tilde)**: Only allows patch updates (bug fixes) while keeping the same minor version

#### Example package.json

```json
{
  "dependencies": {
    "express": "^4.18.0", // Allows 4.x.x updates
    "lodash": "~4.17.21", // Allows 4.17.x updates only
    "react": "^18.0.0", // Allows 18.x.x updates
    "axios": "~1.3.4" // Allows 1.3.x updates only
  }
}
```
## Abstraction
- Taking complex code and wrapping it in something simple
- API —> end user is not bothered about how data is manage

## Modules
- module or common js
- Analogy like it being a class
- Defined properties —> functions, variables
- Single thread —> only one code can be executed at once
- Main thread is created when a program start —> a process is created —> then it responses the thread —> and thread responses to program
- Keeping a thread alive
    - While true
    - Recursive code
        - Issue with this —> stack overflow
        - Thread has got Stack Memory
            - Function is executed by thread
            - Variables can go into heap or stack
            - Reference goes to stack - address
- Can’t take every piece of code by its face value only —> gotta know backend thing

## MomentJS
- [moment.js](https://momentjs.com/)
- npm package for dates and timestamps related functionalities
- Use cases: Date parsing, formatting, manipulation, and timezone handling made simple

## Node.js Process Object
- **Global object** available in all Node.js applications without importing
- Provides information and control over the current Node.js process
- Contains environment variables, command line arguments, and process lifecycle methods

### Common Use Cases
- Handle uncaught exceptions and unhandled promise rejections
- Access environment variables (`process.env`)
- Get command line arguments (`process.argv`)
- Exit the application gracefully (`process.exit()`)

### Error Handling Example

```javascript
// Handle uncaught exceptions (last resort error handling)
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    // Log the error and exit gracefully
    process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});
```

### Other Useful Process Methods

```javascript
// Environment variables
console.log(process.env.NODE_ENV);

// Command line arguments
console.log(process.argv);

// Current working directory
console.log(process.cwd());

// Process ID
console.log(process.pid);
```

## CORS - Cross Origin Resource Sharing
- Browser blocks requests between different domains by default
- Example: `localhost:3000` can't fetch from `localhost:8000`

### Solution - Enable CORS Headers

#### Express.js with cors middleware
```javascript
const cors = require('cors');
app.use(cors()); // Allow all origins
```

#### Manual headers
```javascript
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});
```

### Key Points
- Server must explicitly allow cross-origin requests
- `*` allows all origins, use specific domains in production

## Tasks
- Communication between bots - dashboard kind
- 2 GPT instances talking to each other —> Ollama