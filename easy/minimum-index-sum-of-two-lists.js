var findRestaurant = function(list1, list2) {
    const hashMap = {};
    for (let i = 0; i < list1.length; i++) {
        hashMap[list1[i]] = i;
    }

    let smallest = list1.length + list2.length;
    let retVal = [];
    for (let i = 0; i < list2.length; i++) {
       if(list2[i] in hashMap) {
           hashMap[list2[i]] += i;
            if (hashMap[list2[i]] < smallest) {
                smallest = hashMap[list2[i]];
                retVal = [list2[i]];
            } else if (hashMap[list2[i]] === smallest) {
                retVal.push(list2[i]);
            }
        }
    }
    return retVal;
};