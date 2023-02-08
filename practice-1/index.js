function Fibonacci() {
    // let start = Date.now();
    // console.time("test timer")
    let number = document.getElementById("Number").value;
    // console.log(number);
    let no1 = 0, no2 = 1, nextno;
    let result = [];

    if (number >= 1) {
        result.push(no1);
        for (let i = 2; i <= number; i++) {

            result.push(no2);
            nextno = no1 + no2;
            no1 = no2;
            no2 = nextno;

        }
    }
    document.getElementById("ans").innerHTML= result;
    console.log(ans);
    // let timetaken = Date.now() - start;
    // console.log(timetaken);
    // console.timeEnd("test timer")
}