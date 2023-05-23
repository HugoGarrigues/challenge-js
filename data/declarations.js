const escapeStr = " ' \ / ' ";
const arr = [4,'2'];
const obj = { 
    str:'string', 
    num:13, 
    bool:false, 
    undef: undefined };

const nested = { 
    arr : [4,'undefined','2'], 
    str: 'string', 
    num: 13, 
    bool :false};

Object.freeze(nested);
Object.freeze(arr);
Object.freeze(obj);

