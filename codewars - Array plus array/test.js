Test.describe("Basic tests",function(){
    Test.assertEquals(arrayPlusArray([1, 2, 3], [4, 5, 6]), 21);
    Test.assertEquals(arrayPlusArray([-1, -2, -3], [-4, -5, -6]), -21);
    Test.assertEquals(arrayPlusArray([0, 0, 0], [4, 5, 6]), 15);
    Test.assertEquals(arrayPlusArray([100, 200, 300], [400, 500, 600]), 2100);
  })
  
  
  Test.describe("Random tests", function(){
      const randomInt = (a, b) => Math.floor(Math.random() * (b - a + 1) + a);
      const check = (arr1, arr2) => {
        return arr1.reduce((sum, cur) => sum + cur) + arr2.reduce((sum, cur) => sum + cur);
      }
  
      for (let i = 0; i < 20; i++){
        let arr1 = [];
        let arr2 = [];
        for (let i = 0; i < 5; i++){
          arr1.push(randomInt(-10000, 10000))
          arr2.push(randomInt(-10000, 10000))
        };
      
        Test.it(`Testing for arrayPlusArray ([ ${arr1} ], [  ${arr2} ])`,() => {
          Test.assertSimilar(arrayPlusArray(arr1, arr2), check(arr1, arr2), "It should work for random tests too");
        })
      };
  })