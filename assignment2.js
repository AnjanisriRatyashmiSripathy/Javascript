Q1:
Calculator
Ans:
switch(A){
    case '+' :
    {
        return(B+C);
    }
    case '-' :
    {
        return(B-C);
    }  
    case '*' :
    {
      return(B*C);
    }
   case '/' :
    {
        return(B/C);
    } 
  }
  Q2:
  Divisible by both 6 & 9
  Ans:
 const Check_divisibility = (N) => {
    if ((N%6===0) && (N%9===0))
    {
     return("Divisible by both");
   }
   else
   {
     return("Not Divisible by both");
   }
  };
  Q3:
  Eligiblity for voting
  Ans:
  const isEligible = (a) => {
    if (a>18){
      return("Eligible for Voting");
    }
    else{
      return("Not Eligible for Voting");
    }
   };
Q4:
Relation between numbers
Ans:
const findRelation = (x,y) => {
    if(x<y)
    {
      return(x +" is smaller than "+ y)
    }
    else if (x>y)
    {
      return(x +" is greater than "+ y)
    }
    else 
    {
      return(x +" is equal to "+ y)
    }
};
Q5:
Grades
Ans:
const findGrades = (a) => {
    switch(true)
    {
      case (41<=a && a<=50):
        return ("A");
      case (31<=a && a<=40):
        return ("B");
      case (21<=a && a<=30):
        return ("C");
      case (11<=a && a<=20):
        return ("D");  
      case (a<=10):
        return ("E");
      default:
        return ("It is not a valid value");
    }
  };
  Q6:
  Get Value
  Ans:
const getValue = (a) => {
    if (a=='P' || a=='p')
    {
        return("PrepBytes");
    }
    else if (a=='Z' || a=='z')
    {
        return("Zenith");
    }
    else if (a=='E' || a=='e')
    {
        return("Expert Coder");
    }
    else if (a=='D' || a=='d')
    {
        return("Data Structure");
    }
  };
Q7:
Greater of 3
Ans:
const Max_out_of_three = (A,B,C) => {
    if(A>B && A>C)
    {
      return A;
    }
    else if(B>A && B>C)
    {
        return B;
    } 
    else if(C>A && C>B)
    {
        return C;
    }
    else if (A=B=C)
    {
      return ("-1");
    }  
  };
Q8:
Second greatest number
Ans:
const findSndSmallest = (x,y,z) => {
    if(x>y && x>z)
    {
      if(y>z)
      {
        return y;
      }
      else
      {
        return z;
      }
    }
    else if(y>x && y>z)
    {
      if (x>z)
      {
        return x;
      }
      else
      {
        return z;
      }
    }
    else if(z>x && z>y)
    {
      if(x>y)
      {
        return x;
      }
      else
      {
        return y;
      }
    }  
  };  
Q9:
Triangle is acute or not
Ans:
const Triangle_Check = (A,B,C) => {
    if(A<90)
    {
      if(B<90)
      {
        if(C<90)
        {
          return ("acute");
        }
        else
        {
          return("obtuse");
        }
      }
      else
      {
        return ("obtuse");
      }
    }
    else
    {
      return ("obtuse");
    }  
  };