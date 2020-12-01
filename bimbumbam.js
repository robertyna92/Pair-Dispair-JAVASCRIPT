/* Implementare una funzione sfida pari o dispari, 
alla funzione passo in ingresso 2 parametri, 
la mia scelta (pari || dispari) e il numero che ho scelto di buttare. */
var winner;
var pairDispair = (mychoose, number) => {
    var computerNumber = parseInt(Math.random() * 6);
    if ((mychoose == "pair" && (computerNumber+number)%2==0) || (mychoose == "dispair" && (computerNumber+number)% 2!= 0) ? winner = "user" : winner = "computer") {
           return { "user":mychoose,
                     "choice":number,
                     "compureNumber": computerNumber,
                     "the winner is": winner};
    }
}
console.log(pairDispair("pair", 4));


