Q1:
Add 2Numbers
Ans:
const AddTwoNumbers = (a,b) => {
    return a+b
};
Q2:
Find if the conditions are obeyed or not?
Ans:
const Is_Valid = (a,b) => {
    return ((a<10) && (a>b));
  };
Q3:
Check the conditons
Ans:
const Check = (A, B) => 
{
   return ((A%10==0) || (B%10==0)); 
};
Q4:
Find the first digit of a 4 digit number
Ans:
const First_Digit = (n) => {
    let num= n%1000;
    let v=(n-num)/1000;
    return v;
 };
 Q5:
 Find the last digit of a 4 digit number
 Ans:
 const Last_Digit = (n) => {
    let num=n%10;
    return num;
 };
 Q6:
 Find the remainder
 Ans:
 const Find_the_remainder = (a,b) => {
    return (b%a);
};
 Q7:
 Multipy two Numbers
 Ans:
 const Multiply_two_number = (a,b) => {
    return (a*b);  
  };
Q8:
Marks Calculator
Ans:
const Sum = (A, B, C) => 
{
 return (A+B+C);
};

const Average = (A, B, C) => 
{
  let num=(A+B+C)/3
 return parseFloat(num);
};