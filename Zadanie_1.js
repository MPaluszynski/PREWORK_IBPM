/*
Komentarz do kodu:
Blok kodu rozpoczynamy od zdefiniowana czterech zmiennych - dwóch przechowujących wartości typu obiekt Date (dt1 i dt2) i dwóch przechowujących łańcuchy znaków typu String (st1 i st2).
Zmiennym st1 i st2 zostaje przekazana wartość parametrów "początek" i "koniec" funkcji, a następnie one same zostają przekazane jako argument do zmiennych dt1 i dt2.

Następnie wewnątrz funkcji, została zdefiniowana kolejna funkcja o nazwier "randomDate", służąca do generowania losowej daty z przedziału przekazanego jej pod postacią zadanych argumentów.
Wykorzystuje ona do tego celu funkcję "random" zdefiniowaną w obiekcie Math, która zwraca losową liczbę z przedziału od 0 do 1.
Aby zwrócić losową datę 'randomDate" posługuje się prostą formułą matematyczną, która do początku zadanego funkcji przedziału dodaje różnicę końca i początku przedziału, przemnożonego przez losowo wygenerowaną liczbę ułamkową.
Dzięki temu otrzymana przez nas losowa data jest zawsze większa od wartości początkowej przedziału i zawsze mniejsza od wartości końcowej.
W następnej kolejności zdefiniowana została pusta tablica "tab".
Aby zwrócić tablicę składającą się z wymaganych przez zadanie elementów funkcja posługuje się pętlą for, która w każdej iteracji kolejno:
- generuje losową datę za pomocą funkcji randomDate jako argumenty przekazując jej zdefiniowane na samym początku zmienne dt1 i dt2.
- przydziela wygenerowaną datę do zdefiniowanej wcześniej tablicy, która następnie za pomocą metody toLocalDateString formatuję datę do łańcucha znaków o zadananych parametrach.
- wyświetla wymagane przez polecenie informacje - dzień tygodnia, rok, miesiąc, data.
Dodatkowo aby wyświetlić nazwy dni tygodnia oraz miesiąca, funkcja posługuje się zdefiniowanymi wcześniej tablicami "daysOfWeek" i "monthsOfYear".
Odpowiednia nazwa zostaje pobrana z ww. tablic na podstawie numeru indeksu, który został zwrócony przez funkcje getDay() oraz getMonth().

Tym samym funkcja zwraca wynik w postaci oczekiwanej od nas przez treść zadania.


 */

function Funkcja_zadanie_1 (poczatek, koniec, ilosc_elementow) {

    var st1 = poczatek;
    var dt1 = new Date(st1);

    var st2 = koniec;
    var dt2 = new Date(st2);

    function randomDate(start, end) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    var tab=[];

    for(var x = 0 ; x<ilosc_elementow ; x++) {
        var date = randomDate(dt1,dt2);
        tab[x] = date.toLocaleDateString( "en" , { weekday: "long", year: "numeric", month: "long", day: "2-digit" });
        console.log(tab[x])
    }
}

/*
Wywołanie funkcji - komentarz do rozwiązania
Funkcji zostały przekazane te same argumenty co w treści zadania.
Funkcja zwraca trzy losowe daty w postaci: Dzień tygodnia, rok, miesiąc, data.

 */

Funkcja_zadanie_1('2019-01-01', '2019-03-28',3);