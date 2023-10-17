// const shallowObjClone = require ("./shallowObjClone")

// test("Create a clone of the object parameter", ()=> {

//     const myObj = {person:"Hitchhiker", number:42}
//     expect(shallowObjClone(myObj)).toBe(myObj)
// })

// a shallow clone using the spread operator creates 
// a new object, so they won't be strictly equal.
// When using toBe to compare objects, it checks if they are the same object in memory, 
// which is not the case when you create a new object using the spread operator.

const shallowObjClone = require ("./shallowObjClone")

test("Create a clone of the object parameter", ()=> {

    const myObj = {person:"Hitchhiker", number:42}
    expect(shallowObjClone(myObj)).toStrictEqual(myObj)
})

// this will PASS : "toStrictEqual"
