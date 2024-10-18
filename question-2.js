const students = [
  { name: "Alice", score: 42 },
  { name: "Bob", score: 55 },
  { name: "Charlie", score: 68 },
  { name: "David", score: 48 },
  { name: "Eve", score: 91 },
];

/// 1. fillter
/// 2. map+10%
/// 3. reduce


let findtheStudent = students 
.filter(findscore => findscore.score > 50  )
.map(plusScore => plusScore.score*1.10)
.reduce((acc,cur) => acc + cur,0 )




console.log(`Total score is ${findtheStudent}`);

 
 

