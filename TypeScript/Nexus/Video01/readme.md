## Nexus | Video 01 : Introduction to TypeSrcipt

1. Why need of type safety
   - js tries to output almost everytime without an erorr
   - it can generate many business and user level difficulties
   - also majorly for developer experience
   </br></br>
        ``` javascript
        let a = 10
        // it can be later changed to "Ten"
        a = "Ten"
        // which can cause issue 
        ``` 
        ``` javascript
        let obj = {name:"Nishb", age:20}
        // accessing non existent key also returns with error
        console.log(obj.height)
        --> undefined
        // which can cause issue 
        ``` 

    