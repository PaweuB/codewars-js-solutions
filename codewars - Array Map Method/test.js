Test.describe( "Basic tests", ()=>{
    Test.assertDeepEquals(maps([1, 2, 3]), [2, 4, 6]);
    Test.assertDeepEquals(maps([4, 1, 1, 1, 4]), [8, 2, 2, 2, 8]); 
    Test.assertDeepEquals(maps([2, 2, 2, 2, 2, 2]), [4, 4, 4, 4, 4, 4]); 
  });
  Test.describe( "Sanity test", ()=>{
    const a = [1,2,3];
    maps(a);
    Test.assertEquals( a.join("")==="123", true, "Do not mutate your input!" );
  });
  Test.describe( "Random tests", ()=>{
    const refMaps = x => x.map( x => x*2 ) ;
    const names = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const rnd = n => Math.floor( Math.random() * n ) ;
    for ( let i=100; i--; ) {
      const a = Array.from( { length: rnd(7)+2 }, () => names[rnd(names.length)] );
      Test.it( `Testing for [${a}]`, ()=>{
        Test.assertDeepEquals( maps(Array.from(a)), refMaps(Array.from(a)), "It should work for random inputs too" );
      });
    }
  });