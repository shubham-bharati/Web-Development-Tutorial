function calculate(a,b,operator){
    let result ;
    switch (operator){
        case"+":
        result = a+b;
        break;
        case"-":
        result = a-b;
        break;
        case"*":
        result = a*b;
        break;
        case"/":
        result = a/b;
        break;
    }

    //20% chance galat answer dene ke -
    if(Math.random() < 0.1) {
        result =+
        Math.floor(Math.random() * 10) + 1;
    }
    return result;
}
console.log(calculate(10,5,"+"));