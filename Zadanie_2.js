/*

Komentarz do kodu:
Blok kodu poniższej funkcji rozpoczynają i kończą tzw. timestamp'y, które przy wywołaniu funkcji pozwalają uzyskać informacje nt. tego ile czasu zajęło jej wywołanie.
Pod pierwszym timestamp'em znajdują się definicje zmiennej tab jako pustej tablicy, a także jej dwóch pierwszych elementów o indeksach 0 i 1 jako wartości liczbowych - odpowiednio 0 i 1.

W następnej kolejności zdefiniowane zostały trzy instrukcje sterujące: if, else-if oraz else, które w zależności od przekazanej funkcji wartości argumentu "ilosc_elementow" służą do wykonania jednej z trzech operacji:
1. w przypadku jeśli "ilosc_elementow" będzie miała wartość 0, funkcja wygeneruje tablicę z jednym elementem o wartości 0.
2. w przypadku jeśli "ilosc elementow" będzie miała wartość 1, funkcja wygeneruje tablicę z dwoma elementami o wartościach 1 i 2.
3. w przypadku jeśli "ilosc elementow" będzie miała wartość większą lub równą 2, funkcja posłuży się pętlą for.

Zdefiniowana w trzeciej instrukcji sterującej pętla for, każdemu elementowi tablicy tab o indeksie odpowiadającemu zmiennej x przydziela wartość będącą sumą wartości dwóch poprzednich elementów tablicy.
Ponieważ dwa pierwsze elementy tablicy tab zostały już zdefiniowane wcześniej, zmienna x na początku przyjmuje wartość 2 (czyli odpowiadającą trzeciemu elementowi tablicy, licząc od 0),
a na końcu wartość przekazaną funkcji w postaci parametru "ilosc_elementow".
W ten sposób pętla, wraz z każdą swoją iteracją, przydziela pożądaną wartość elementowi o odpowiednim indeksie.
Na koniec wykonywana jest kolejna pętla for, która dla każdego elementu tablicy o indeksie odpowiadającemu wartości zmiennej y,wyświetla wartość tego elementu.
W ten sposób funkcja zwraca wynik w postaci oczekiwanej od nas przez treść zadania.


 */
function Funkcja_zadanie_2 (ilosc_elementow){
    console.time('Czas wywołania funkcji wynosi: ');
    var tab = [];

    if(ilosc_elementow == 0){
        tab[0] = 0;
    }
    else if(ilosc_elementow == 1){
        tab[0] = 0;
        tab[1] = 1;
    }
    else{
        for(var x = 2 ; x <= ilosc_elementow ; x++){
            tab[0] = 0;
            tab[1] = 1;
            tab[x] = (tab[x-2]+tab[x-1]);
        }
    }

    for(var y = 0 ; y<tab.length ; y++) {
        console.log(tab[y]);
    }
    console.timeEnd('Czas wywołania funkcji wynosi: ');
}
/*
Wywołanie funkcji - komentarz do rozwiązania
Poniżej funkcja "zadanie drugie" została wywołana po raz pierwszy.
Zgodnie z treścią polecenia funkcja zwraca wartości poszczególnych elementów tablicy, o indeksach od 0 o 5, które powstają poprzez zsumowanie wartości dwóch poprzednich elementów tablicy.
Dodatkowo, dla większej czytelności, wyniki z pierwszego wywołania tablicy oddzielono dwuwierszową przerwą od wyników z wywołania drugiego.
 */

Funkcja_zadanie_2(5);

console.log("\n")

/*
Wywołanie funkcji - komentarz do rozwiązania
Jak wyżej, z tym, ze funkcję wywołano dla parametru o wartości 9.
*/

Funkcja_zadanie_2(9);
console.log("\n")

/*
Wywołanie funkcji - komentarz do rozwiązania
Poniżej w celu przetestowania działania funkcji wywołano ją dla parametrów 0 i 1.
*/

Funkcja_zadanie_2(0);
console.log("\n")

Funkcja_zadanie_2(1);