function printerError(s) {
    let printerErrors = 0;
    for (i = 0; i < s.length; i++ ) 
    {
    if (s[i] == ['a'] || 
    s[i] == ['b'] || 
    s[i] == ['c'] || 
    s[i] == ['d'] || 
    s[i] == ['e'] || 
    s[i] == ['f'] || 
    s[i] == ['g'] || 
    s[i] == ['h'] || 
    s[i] == ['i'] || 
    s[i] == ['j'] || 
    s[i] == ['k'] || 
    s[i] == ['l'] || 
    s[i] == ['m'] ) {
    } 
    else { printerErrors = printerErrors+1; }
  } 
   return printerErrors+'/'+s.length;
  }