# console.log() — ~~alert()~~
pojemność > 1000 znaków, zawsze działa, np.

`console.log(new XMLSerializer().serializeToString(this));`

# eval() — ~~Function()~~
problemy z działaniem, sami autorzy na [stronie MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) dostrzegają problemy z użyciem zamiennika, ale zalecają jeszcze bardziej karkołomną konstrukcję - sytuacja wydaje się przypominać [porównanie Windowsa z Linuxem](https://ubuntu.pl/czytelnia/2008/08/14/linux-to-nie-windows/#comment-4310) - a jednak są przypadki, gdzie kod nie musi być aż tak bezpieczny i szybki - ale ma działać i być łatwy w tworzeniu

# innerText — ~~textContent~~
zwraca tylko widoczny (uwzględniając CSS) tekst bez (często przeszkadzających) znaczników HTML











