function filter_list(l) {
    const newArr = l.filter(ele => {return typeof ele == 'number'});
    return newArr;
   }