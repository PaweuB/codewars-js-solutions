function maskify(cc) { 
    let toHide = cc.split(''); //make it Array
    let toShow = toHide.slice(); //copy Array
    let toH = new Array(toHide.splice(0, cc.length-4).join('').replace(/,/g, '').replace(/['0-9', 'aA-zZ']/g, '#'));
    let toS = new Array(toShow.splice(-4, cc.length).join('').replace(/,/g, ''));
    return toH+toS;
    }