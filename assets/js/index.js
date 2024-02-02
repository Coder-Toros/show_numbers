const defenitionRange = prompt("Till what number we will look for prime numbers?", 100)

function showPrimeNum(till) {
    let check = Number(till);

    if(Number.isNaN(check)) {
        alert("Don`t see a number! Pls, come again)")
        let againTryToRange = prompt("Till what number we will look for prime numbers?", 100)
        showPrimeNum(againTryToRange)
    };

    if(check <= 2) {
        alert("An insufficient number! Pls, come again)")
        let againTryToRange = prompt("Till what number we will look for prime numbers?", 100)
        showPrimeNum(againTryToRange)
     };
 
    nextPrime:for(let i = 2;i < check;i++){

        for(let k = 2;k < i;k++){
            if(i % k === 0) continue nextPrime;
            }
            console.log(`${i} is a prime number`)
        }
    }

showPrimeNum(defenitionRange)