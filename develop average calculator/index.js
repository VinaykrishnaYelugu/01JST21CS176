

async function getNumbers() {
    const response = await fetch(`http://localhost:9876/numbers`)
    const json = await response.json()
    return json
}


function isPrime(n) {
  if (n==1) 
    return false;
  for (let i = 2; i<=Math.sqrt(n); i++) {
    if (n%i==0)
         return false;
  }
  return true;
}


function generateFibonacci(n) {
  if(n==1)
     return 0
  else if( n==2 )
     return 1
  else{
      let f1=0
      let f2=1
      let f=-1
      
      for(let i=2 ;i<n ; i++ ) {
        f = f1+f2
        f1 =f2;
        f2 = f;
      }
  }
  return fib;
}


