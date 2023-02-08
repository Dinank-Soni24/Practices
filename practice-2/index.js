function Factorial() {
    let number = document.getElementById("Number").value;
    // let fact = 1;
    // for(let i = 2;i<=number;i++){
    //     fact = i * fact;
    //     console.log(fact);
    // }
    function fact(num) {
        if (num==1 || num==0) {
            return 1;
        }
        else {
            
            return num * fact(num-1);
        }
    }
    
    const result = fact(number);
    document.getElementById("ans").innerHTML = result;  

}