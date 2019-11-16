Test.describe( "Some tests:", function(){
    Test.assertSimilar(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
    Test.assertSimilar(openOrSenior([[3, 12],[55,1],[91, -2],[53, 23]]),['Open', 'Open', 'Open', 'Open'])
    Test.assertSimilar(openOrSenior([[59, 12],[55,-1],[12, -2],[12, 12]]),['Senior', 'Open', 'Open', 'Open'])
  });
  
  Test.describe( "Edge cases:", function(){
    Test.assertSimilar(openOrSenior([]),[], "Empty array")
    Test.assertSimilar(openOrSenior([[54,9],[55,9]]),['Open','Senior'], "age for 'Senior' should be > 54")
    Test.assertSimilar(openOrSenior([[55,7],[55,9]]),['Open','Senior'], "handicap for 'Senior' should be > 7")
  });
  
  Test.describe( "Some random tests:", function(){
  
    var opens = [[1,1],[54,9],[90,7],[21,21],[0,0]].map(function(data){return {data:data,cat:'Open'} }),
        seniors = [[55,10],[90,8],[90,9],[60,12],[75,11]].map(function(data){return {data:data,cat:'Senior'} });
  
    for( var t=0; t<5; t++ ){
      var tt = [], rr = [];
      Test.randomize(opens.concat(seniors)).forEach(function(v){tt.push(v.data); rr.push(v.cat)})
      console.log(Test.inspect(tt)+" ?")
      Test.assertSimilar(openOrSenior(tt),rr)
    }
  })