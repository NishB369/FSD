# FSD Bootcamp Day 02 | 02 June 2025

- [Fifocode](https://fifocode.com/)
- [JavaScript Most Used Modern Features](https://fifocode.com/article/javascript-most-used-modern-features)
- [Claude Chat](https://claude.ai/chat/4fefe719-fa75-43b7-9805-eef66dbbb101)

## Bot

<details open><summary><strong>🤖 Bot Brief</strong></summary>

### Cron Jobs
   - Cron is a time-based job scheduler in Unix/Linus that runs commands automatically at specified times
   - Our bot is a cron job with bit more features like
     - dynaic scheduling
     - persistent logging
     - parallel processing
     - self managing lefy-cycle
   
   ### Project Ideas (Basic -> Advance)
   - Basic News Aggrigator, Weather or Crypto Dashbaords
   - Job Portals Monitoring and Brand Social Media Tracking
   - API Health Monitor 

</details>

<br>
<details>
<summary><strong>👨‍💻 Code Summary</strong></summary>
1. Project Creation

1.  Linitng
2.  Prettier
3.  package.json and package-lock.json
4.  gitignore
5.  env setup

6.  App.js File

    1.  Import Statements
        - rest
        - sleep
        - filelog
        - launch
        - operations
    2.  process object uncaught err handling

        ```javascript
        process.on("uncaughtexpressoin"),
          (e) => {
            console.error(e);
          };
        ```

    3.  async function run() definition
        - desturcturing of time related fields from operatoin object from config file
        - calculating restTime from rest()
        - condition based block
          - restTime >0 --> sleep and then wake up
          - restTime <0 --> work and rest cycles
    4.  recursive run() call

        - concern of `stack overflow`

        #### What is it?

        - **Stack overflow** = Program crashes when too many function calls pile up without finishing.

        #### Simple Analogy

        - Like stacking plates - if you keep adding plates without removing any, the stack falls over.

        #### Common Cause - Infinite Recursion

        ```javascript
        // BAD - Will crash
        function loop() {
          loop(); // Calls itself forever
        }

        // GOOD - Has a stop condition
        function countdown(n) {
          if (n <= 0) return; // STOP HERE
          // countdown(n - 1);
        }
        ```

        #### Quick Fixes

        1. **Add base case** - Give recursion a way to stop
        2. **Use loops instead** - `while` or `for` loops don't add to stack
        3. **Add `await`** - In async functions, always await recursive calls

## dot env

- Stores configuration variables outside your code for security and flexibility.
- env variables follow SCREAMING_SNAKE_CASE

  ### Key Rules

  - Add .env to .gitignore - Never commit sensitive data
  - Use .env.example - Share template without actual values
  - Different environments - .env.development, .env.production

  ### Why Use .env?

  - Security - Keep secrets out of code
  - Flexibility - Different configs for dev/staging/production
  - Team collaboration - Everyone has their own local settings

  ### Common Variables

  ```bash
  # Database
  DB_HOST=localhost
  DB_PASSWORD=secret123
  DB_NAME=myapp

  # API Keys (never commit these!)
  API_KEY=abc123xyz
  SECRET_KEY=mysecrettoken

  # App Config
  PORT=3000
  NODE_ENV=development
  ```

## config.js

- defines the fields realted to env folder as constants
- uses process.env.\_\_\_ to access env variables
- `process` is a global node obj that contains env variables as key-val pairs

## rest.js

- utilizes `moment` npm package
- finds the current time stamp along with work start time and end time
- conditional retruns depending on if:
  - current time is `before start time`
  - or current time is `after end time`

## sleep.js

- exports a basic promise fucntion
- takes argument for time to resolve

## filelog.js

- utilizes `moment` npm package along with
- `path` and `fs` node packages
- process
  - creates `_root`
  - provides path for logdir
    - checks if it exists
      - if not then mkdir
  - async function filelog() definition
    - takes message as parameter
    - checks if not logging or message length is 0 then early returns
    - else:
      - modifies message by adding current timestamp and a newline char
      - creates dynamic filename and filepath
      - appendFileSync creates fil and/or adds text

## launch.js

- `isMainThread` and `Worker` from Node.js `worker_threads`
- Checks if running in main thread (`isMainThread`)
- If not main thread → throws error "only main thread can start a bot"
- Creates new `Worker` instance
- Dynamic path: `./src/bots/${botname}`
- Empty options object `{}`
- Sets up error listener on worker
- On error:
  - Logs via `filelog(botname, 'error', error)`
  - Outputs to console via `console.error(error)`
- Creates isolated worker threads for bots with safety checks and error logging.
</details>
