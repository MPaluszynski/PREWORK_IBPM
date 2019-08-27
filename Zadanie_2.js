/*

Komentarz do kodu:
Blok kodu poniższej funkcji rozpoczynają i kończą tzw. timestamp'y, które przy wywołaniu funkcji pozwalają uzyskać informacje nt. tego ile czasu zajęło jej wywołanie.
Pod pierwszym timestamp'em znajdują się definicje zmiennej tab jako pustej tablicy, a także jej dwóch pierwszych elementów o indeksach 0 i 1 jako wartości liczbowych - odpowiednio 0 i 1.
W następnej kolejności zdefiniowana została pętla for, która każdemu elementowi tablicy tab o indeksie odpowiadającemu zmiennej x przydziela wartość będącą sumą wartości dwóch poprzednich elementów tablicy.
Ponieważ dwa pierwsze elementy tablicy tab zostały już zdefiniowane wcześniej, zmienna x na początku przyjmuje wartość 2 (czyli odpowiadającą trzeciemu elementowi tablicy, licząc od 0),
a na końcu wartość przekazaną funkcji w postaci parametru "ilosc_elementow".
W ten sposób pętla, wraz z każdą swoją iteracją, przydziela pożądaną wartość elementowi o odpowiednim indeksie.
Na koniec wykonywana jest kolejna pętla for, która dla każdego elementu tablicy o indeksie odpowiadającemu wartości zmiennej y,wyświetla wartość tego elementu.
W ten sposób funkcja zwraca wynik w postaci oczekiwanej od nas przez treść zadania.


 */
function Funkcja_zadanie_2 (ilosc_elementow){
    console.time('Czas wywołania funkcji wynosi: ');
    var tab = [];
    tab[0] = 0;
    tab[1] = 1;
    for(var x = 2 ; x <= ilosc_elementow ; x++){
        tab[x] = (tab[x-2]+tab[x-1]);
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