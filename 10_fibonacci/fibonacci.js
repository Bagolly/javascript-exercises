const fibonacci = function(pos) {

    if(pos < 0)
        return "OOPS";

    stack = [];

    for(let i = 0; i <= pos;i++){
        
        if(stack.length < 2)
            stack.push(i);
        
        else
        {
            let r_op = stack.pop();
            let l_op = stack.pop();

            console.log("pushing sum:" + (l_op+r_op))
            stack.push(r_op);
            stack.push(l_op + r_op);
        }    
    }

    return stack.pop();
};

// Do not edit below this line
module.exports = fibonacci;
