
let arr = [
    { id: 1, name: "john", age: "18", marks: 80 },
    { id: 2, name: "jack", age: "20", marks: 85 },
    { id: 3, name: "karen", age: "19", marks: 35 },
  ];
  
  function PrintStudentswithMap(arr) {
    //Write your code here , just console.log
    // let marks_above_50=arr.map(function(name,id,arr)
    // {
    //     return arr.marks>50;
    // })
    // console.log(marks_above_50);
    const passedStudents = arr.filter(arr => arr.marks > 50)
                                 .map(arr => arr.name);
    console.log(passedStudents);
    

    
  }
  PrintStudentswithMap(arr)
  
  function PrintStudentsbyForEach(arr) {
    //Write your code here , just console.log
    arr.forEach(arr=>{

        if(arr.marks>50)
        {
            console.log(arr.name);
        }
        
    })

    
  }
  PrintStudentsbyForEach(arr)
  
  function addData() {
    //Write your code here, just console.log
    let newdata=
        { id: 4, name: "abhishek", age: "23", marks: 90 }
    
    arr.push(newdata)
  }
  addData()
  console.log(arr)

  
  function removeFailedStudent() {
   
    arr=arr.filter(arr=>arr.marks<50)
    console.log(arr)
  }
  removeFailedStudent()
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newstudents = 
   [
    { id: 4, name: "rina", age: "23", marks: 98 },
    { id: 5, name: "navya", age: "15", marks: 79 },
    { id: 6, name: "Aaditi", age: "28", marks: 69 }
  ];
  arr=arr.concat(newstudents)
  console.log(arr)
  }
  concatenateArray()
