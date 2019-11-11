function  calculateAge(birthYear, askYear) {

    const ageCalc = askYear - birthYear;
    
    if ((ageCalc > 1)) 
    { return 'You are ' + ageCalc + ' years old.'; }
    
    if ((ageCalc < 1) && ageCalc < -1) 
    { return 'You will be born in ' + ageCalc*-1 + ' years.'; }
    
    if (ageCalc === 0) 
    { return 'You were born this very year!'; }
    
    if (ageCalc === 1)
    { return 'You are 1 year old.'; }
    
    if (ageCalc === -1)
    { return 'You will be born in 1 year.'; }
    
    }