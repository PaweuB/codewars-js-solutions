describe( "whatday", function(){
    it( "should work for the examples" , function(){
      Test.assertEquals(whatday(1),'Sunday')
      Test.assertEquals(whatday(2), 'Monday')
      Test.assertEquals(whatday(3),'Tuesday')
      Test.assertEquals(whatday(4),  'Wednesday')
      Test.assertEquals(whatday(5),  'Thursday')
      Test.assertEquals(whatday(6),  'Friday')
      Test.assertEquals(whatday(7),  'Saturday')
      Test.assertEquals(whatday(0),  'Wrong, please enter a number between 1 and 7')
      Test.assertEquals(whatday(8),  'Wrong, please enter a number between 1 and 7')
      Test.assertEquals(whatday(20),  'Wrong, please enter a number between 1 and 7')
    });
  });
  
  function sol(num) { 
    return ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'][num-1]||'Wrong, please enter a number between 1 and 7'
  }
  
  describe('Random tests', function() {
    it('should work for random tests', function() {
      for(let i=0; i<100; i++) {
        let n=r()*15|0;
        Test.assertEquals(whatday(n),sol(n));
      }
    });
  });