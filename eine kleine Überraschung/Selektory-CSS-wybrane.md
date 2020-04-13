Selektor|Dopasowuje element|Przykład|Objaśnienie|*
---|---|---|---|---
[attr]|z atrybutem o nazwie `attr`|[id]
[attr="value"]|z atrybutem o nazwie `attr`, którego wartością jest dokładnie `value`
[attr~="value"]|z atrybutem o nazwie `attr`, którego wartością jest lista słów oddzielonych białymi znakami, z których jedno to właśnie `value`
[attr\|="value"]|z atrybutem o nazwie `attr`, którego wartość to dokładnie `value` albo zaczyna się od `value`, po którym bezpośrednio jest łącznik/minus (-) (U+002D)
[attr^="value"]|z atrybutem o nazwie `attr`, którego wartość zaczyna się od `value`
[attr$="value"]|z atrybutem o nazwie `attr`, którego wartość kończy się na `value`
[attr*="value"]|z atrybutem o nazwie `attr`, w którego wartości występuje ciąg znaków `value`
... i]|- wielkość liter w wartości atrybutu nie ma znaczenia (w zakresie ASCII)|a[href*="wArTOsc" i]
`,`|wybrane przez selektory, oddzielone `,` - działa tylko, kiedy wszystkie selektory są prawidłowe
spacja|[przodek]spacja[`dopasowywany`]
>|[bezpośredni rodzic]>[`dopasowywane dziecko`]











*- data aktualizacji informacji w danym wierszu: miesiąc (zapisany liczbą rzymską) i cyfra jedności roku
