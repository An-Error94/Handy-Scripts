Selektor|Dopasowuje element|Przykład
---|---|---
[attr]|z atrybutem o nazwie `attr`
[attr="value"]|z atrybutem o nazwie `attr`, którego wartością jest dokładnie `value`
[attr~="value"]|z atrybutem o nazwie `attr`, którego wartością jest lista słów oddzielonych białymi znakami, z których jedno to właśnie `value`
[attr\|="value"]|z atrybutem o nazwie `attr`, którego wartość to dokładnie `value` albo zaczyna się od `value`, po którym bezpośrednio jest łącznik/minus (-) (U+002D)
[attr^="value"]|z atrybutem o nazwie `attr`, którego wartość zaczyna się od `value`
[attr$="value"]|z atrybutem o nazwie `attr`, którego wartość kończy się na `value`
[attr*="value"]|z atrybutem o nazwie `attr`, w którego wartości występuje ciąg znaków `value`
... i]|- wielkość liter w wartości atrybutu nie ma znaczenia (w zakresie ASCII)|`a[href*="wArTOsc" i]`
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
:not()|który nie pasuje do selektora podanego w nawiasie; nie używać pseudoelementów; nie wolno zagnieżdżać tej pseudoklasy: `:not(:not(...))` lista argumentów w nawiasie nie jest szeroko zaimplementowana!|`body :not(div):not(span)`, `body :not(table) a`
:link|LVHA:każdy nieodwiedzony `a`, `area` lub `link`, który ma atrybut `href`
:visited|każdy odwiedzony link; ograniczone właściwości z uwagi na prywatność
:target|jeśli jest on celem aktualnie użytego łącza wewnętrznego
:nth-child()|spośród węzłów o **wspólnym rodzicu**, o pozycji określonej liczbą w nawiasie (numeracja od `1`) która może być postaci: `An+B`, gdzie `A`,`B` to dziesiętne liczby całkowite; można pominąć część `An+` lub `+B` – pominięte części są uznawane za `0`; `A` może być równe `-1`, wtedy `1` można pominąć; `B` może być ujemne, wtedy trzeba zastąpić znak `+` znakiem `-`; `n` automatycznie przybiera wartości od `0` w górę|`:nth-child(7)`, `:nth-child(5n)`, `:nth-child(3n+4)`, `:nth-child(-n+3)`, `p:nth-child(n+8):nth-child(-n+15)`
:nth-last-child()|to samo co :nth-child(), jedyna różnica: numeracja pozycji od tyłu
:nth-of-type()|spośród węzłów **tego samego typu o wspólnym rodzicu** (**LEPSZY**) o pozycji określonej liczbą w nawiasie - składnia identyczna jak w `:nth-child()`
:nth-last-of-type()|to samo co :nth-of-type(), jedyna różnica: numeracja pozycji od tyłu
::before|tworzy niezaznaczalne i nieobecne w DOM dziecko danego elementu PRZED nim, które objęte jest formatowaniem tego elementu. Składnia - poniżej
::after|identyczny do ::before, jedyna różnica: dodaje specyficzne dziecko PO elemencie












LVHA - Reguła LVHA: `:link`, `:visited`, `:hover`, `:active` – kolejność umieszczania w kodzie CSS pseudoklas związanych z łączem, w kolejności: od lewej

*- data aktualizacji informacji w danym wierszu: miesiąc (zapisany liczbą rzymską) i cyfra jedności roku

[źródło](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors)
