/*
&& - and 
|| - or 
! - not
*/

let n1,n2,n3,n4;
n1 = 10;
n2 = 5;
n3 = 15;
n4 = 2;

// certo e certo
console.log((n1>n2) && (n3 > n4))
//certo e errado
console.log((n1>n2) && (n3 < n4))
//errado e errado
console.log((n1<n2) && (n3 < n4))
console.log("-----------------------")

//certo e certo
console.log((n1>n2) || (n3 > n4))
//certo e errado
console.log((n1>n2) || (n3 < n4))
//errado e errado
console.log((n1<n2) || (n3 < n4))
console.log("-----------------------")
//certo e certo
console.log(!((n1>n2) || (n3 > n4)))
//certo e errado
console.log(!((n1>n2) && (n3 < n4)))
//errado e errado
console.log(!((n1<n2) || (n3 < n4)))
//certo e certo
console.log(!(n1>n2) && (n3 > n4))
//certo e certo
console.log(!(n1>n2) || (n3 > n4))