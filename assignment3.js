/*Q1:
Find the number of digits
Ans:
const Find_Digits = (n) => 
{
  if (n==0)
  return 1;
      let  count=0;
       while(n!=0){
          n=parseInt(n/10);
          count++;
        }
       return count;
};
Q2:
Find the fives
Ans:
const Find_Five = (N) => 
{
  let count=0;
  while(N!=0)
  {
    let digit=N%10;
    if(digit==5)
    {
      count++;
    }
    N=parseInt(N/10);
  }
  return count;
};
Q3:
Sum of even numbers
Ans:
let sum = 0;
        for (let i=0;i<=n;i++){
            if(i%2==0){
              sum += i;
            }
        }
        return sum;
Q4:
Sum of digits
Ans:
const Number_Sum = (n) => 
{
	 let rem=0,sum=0;
	   while(n != 0){
	     rem = n % 10;
	     sum += rem;
	     n = parseInt(n / 10);
	   }
	   return sum;
};
Q5:
print the odd numbers
Ans:
const Print_Odd = (N) => 
{
	for(let i=2; i<=N; i++)
	{
	  if(i==2 || i%2!=0)
	  {
	    console.log(i);
	  }
	}
};
Q6:
Print the pattern
Ans:
const Print_pattern = (N) => 
{
  for (let i=1; i<=N; i++)
  {
    let a=" ";
    for(let j=1;j<=i;j++)
    {
      a +="*";
    }
    console.log(a)
  }
};
Q7:
checking whether a number is prime or not
Ans:
const Prime_Check = (N) => 
{
 let a=0;
 if (N==1)
 {
  return "NO";
 }
 if (N==2)
 {
  return "YES";
 }
 for( let i=2; i<N; i++)
 {
   if(N%i==0)
   {
     a ++;
     break;
   }
 }
	if (a==0)
	{
	  return ("YES");
	}
	else
	{
	  return ("NO");
	}
};
Q8:
Print numbers between 1 to N
Ans:
const printNumbers = (n) => {
    for(let i=1; i<=n; i++)
    {
      console.log(i)
    }
};
Q9:
Create a table
Ans:
const Print_Table = (N) => 
{
  for(let i=1; i<=10; i++)
  {
    console.log(N + " * " +  i +  " = " + N*i);
  }
};
*/