

var findStays = function (stays) {
    if (stays.length === 0) {
      return 0; 
    }
    let prev = -1;
    let curr = stays[0];
    for (let i = 1; i < stays.length; i++) {
       let max = prev + stays[i];
       let alternative = curr;
      
       if (max < alternative) {
          max = alternative;   
       }
       prev = curr;
       curr = max;
    }
    return curr > prev ? curr : prev;
  };
  
  
  console.log(findStays([1, 2, 3])); //4 
  console.log(findStays([5, 1, 2, 6])); // 11
  console.log(findStays([5, 5, 5, 5]));
  console.log(findStays([]));
  console.log(findStays([2]));
  console.log(findStays([4, 6]));
  console.log(findStays([6, 12, 1, 9, 13]));
  
      
    
  // # # You are provided a set of positive integers (an array of integers). Each integer represents a number of nights users request on Airbnb.com. If you are a host, you need to design and implement an algorithm to find out the maximum number of nights you can accommodate. The constraint is that you have to reserve at least one day between each request, so that you have time to clean the room.
  // # # Example:
  // # # 1) Input: [1, 2, 3]; output: 4, because you will pick 1 and 3
  // # # 2) input: [5, 1, 2, 6]; output: 11, because you will pick 5 and 6
  // # # 
  // # # 
  // # 
  