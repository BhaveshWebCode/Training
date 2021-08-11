// console.log(typeof(parseInt(process.argv[2])))
const n1 = parseInt(process.argv[2]); 
const n2 = parseInt(process.argv[3]); 
const alpha = {
    2: ['a','b','c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
}
let ans=[]
if( n2==9 || n2==7){
    c1=3; c2=4;
    console.log("7");
}
else if(n1==9 || n1==7){
    c1=4;c2=3;
}
else{
    c1=3; c2=3
}    
for(let i=0; i<c1; i++)
{
    for(let j=0; j<c2; j++)
    {
        ans.push(alpha[n1][i] + alpha[n2][j]) 
    }
}
console.log(ans)