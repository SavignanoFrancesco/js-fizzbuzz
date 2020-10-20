//Scrivere un programma che stampi tutti i numeri da 1 a 100 con queste regole:
//al posto dei multipli di 3, deve stampare "Fizz"
//al posto dei multipli di 5, deve stampare "Buzz"
//al posto dei multipli sia di 3 che di 5, deve stampare "FizzBuzz"


//inizzializzazone di un array vuoto
var numbers = [];

//inizializzazione contatori
var i = 0;

//numero limite fino a cui effettuare la ricerca
var max_limit = 100;

//stringa in cui sommare gli elementi dell'array
var array_to_string = '';

//Stringhe che sostituiranno i multipli di 3 e/o di 5
var mult_3 = 'Fizz';
var mult_5 = 'Buzz';

//scorro l'array numbers
for (i = 0; i < max_limit; i++) {

    //Inserisco i numeri da 1 a 100
    numbers[i] = (i + 1);

    //Sostituisco con FizzBuzz i multipli sia di 3 che di 5
    if(!(numbers[i] % 3) && !(numbers[i] % 5)){
        numbers[i] = mult_3 + mult_5;
    }
    //Sostituisco con Fizz i multipli solo di 3
    else if(!(numbers[i] % 3)){
        numbers[i] = mult_3;
    }
    //Sostituisco con Buzz i multipli solo di 5
    else if(!(numbers[i] % 5)){
        numbers[i] = mult_5;
    }

    //stringa da stampare nell'html
    if (i < (max_limit - 1)) {
        array_to_string += numbers[i] + "," + "  ";
    }else{
        array_to_string += numbers[i] + "." + "  ";
    }

}

//stampo elementi array
for  (i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

document.getElementById('box_internal2').innerHTML = array_to_string;
