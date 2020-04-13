# Selektory (wybrane)
Selektor|Dopasowuje element
---|---
[attr]|z atrybutem o nazwie `attr`
[attr="value"]|z atrybutem o nazwie `attr`, którego wartością jest dokładnie `value`
[attr~="value"]|z atrybutem o nazwie `attr`, którego wartością jest lista słów oddzielonych białymi znakami, z których jedno to właśnie `value`
[attr\|="value"]|z atrybutem o nazwie `attr`, którego wartość to dokładnie `value` albo zaczyna się od `value`, po którym bezpośrednio jest łącznik/minus (-) (U+002D)
[attr^="value"]|z atrybutem o nazwie `attr`, którego wartość zaczyna się od `value`
[attr$="value"]|z atrybutem o nazwie `attr`, którego wartość kończy się na `value`
[attr*="value"]|z atrybutem o nazwie `attr`, w którego wartości występuje ciąg znaków `value`
... i]|wielkość liter w wartości atrybutu nie ma znaczenia (w zakresie ASCII)
`,`|wybrane przez selektory, oddzielone `,` - działa tylko, kiedy wszystkie selektory są prawidłowe
spacja|[przodek]spacja[`dopasowywany`]
\>|[rodzic]>[`dopasowywane bezpośrednie dziecko`]
~|[rodzeństwo wyżej w kodzie strony]~[`dopasowywany`]
+|[rodzeństwo BEZPOŚREDNIO przed w kodzie strony]+[`dopasowywany`]
:active|LVHA: aktywowany przez użytkownika element
:checked|włączone: `radio`, `checkbox` lub `option`; `option` – w pewnych przeglądarkach ograniczone możliwości ostylowania
:focus|kliknięty lub wybrany przy pomocy klawisza `Tab` na klawiaturze
:focus-within|element, który ma `:focus` lub który zawiera element, który ma `:focus`
:hover|nad którym jest kursor myszy; jeśli urządzenie dotykowe: bardzo różna obsługa
:not()|który nie pasuje do selektora podanego w nawiasie; nie używać pseudoelementów; nie wolno zagnieżdżać tej pseudoklasy: `:not(:not(...))` lista argumentów w nawiasie nie jest szeroko zaimplementowana!
:link|LVHA:każdy nieodwiedzony `a`, `area` lub `link`, który ma atrybut `href`
:visited|każdy odwiedzony link; ograniczone właściwości z uwagi na prywatność
:target|jeśli jest on celem aktualnie użytego łącza wewnętrznego
:nth-child()|spośród węzłów o **wspólnym rodzicu**, o pozycji określonej liczbą w nawiasie (numeracja od `1`) która może być postaci: `An+B`, gdzie `A`,`B` to dziesiętne liczby całkowite; można pominąć część `An+` lub `+B` – pominięte części są uznawane za `0`; `A` może być równe `-1`, wtedy `1` można pominąć; `B` może być ujemne, wtedy trzeba zastąpić znak `+` znakiem `-`; `n` automatycznie przybiera wartości od `0` w górę
:nth-last-child()|to samo co :nth-child(), jedyna różnica: numeracja pozycji od tyłu
:nth-of-type()|spośród węzłów **tego samego typu o wspólnym rodzicu** (**LEPSZY**) o pozycji określonej liczbą w nawiasie - składnia identyczna jak w `:nth-child()`
:nth-last-of-type()|to samo co :nth-of-type(), jedyna różnica: numeracja pozycji od tyłu
::before|tworzy niezaznaczalne i nieobecne w DOM dziecko danego elementu PRZED nim, które objęte jest formatowaniem tego elementu. Składnia - poniżej
::after|identyczny do ::before, jedyna różnica: dodaje specyficzne dziecko PO elemencie
# Składnia ::before/::after
###### Na przykładzie ::after - dla ::before identycznie
[`selektor elementu`]::after
{
content:"`zawartość tekstowa`";

white-space:pre-wrap; `konieczna właściwość która daje wolność w kwestii` TO DO

color:`kolor tekstu`
}

# Przykłady użycia wybranych selektorów
Selektor|Dopasowuje
---|---
a[href*="tekst" i]|`a`, który w wartości atrybutu `href` ma ciąg liter `tekst` zapisany DOWOLNĄ wielkością
body :not(div):not(span)|wszystko w `body` oprócz `div` i `span`
body :not(table) a|linki m.in. w tabeli, bo `td` pasuje do `:not(table)`
:nth-child(7)|każde 7. dziecko
:nth-child(5n)|każde co 5. dziecko
:nth-child(3n+4)|każde 4., 7., 10. ... dziecko
:nth-child(-n+3)|każde pierwsze 3 dzieci
a:nth-child(n+8):nth-child(-n+15)|każde od 8. do 15. wł. dziecko, które musi być `a`
p:nth-of-type(2n+1)|nieparzyste paragrafy
p:nth-of-type(2n)|parzyste paragrafy
p:nth-of-type(1)|1. paragraf
p:nth-of-type(4n)|co 4. paragraf

LVHA - Reguła LVHA: `:link`, `:visited`, `:hover`, `:active` – kolejność umieszczania w kodzie CSS pseudoklas związanych z łączem, w kolejności: od lewej

*- data aktualizacji informacji w danym wierszu: miesiąc (zapisany liczbą rzymską) i cyfra jedności roku

[źródło](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
