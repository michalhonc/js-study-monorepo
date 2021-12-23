
# Color management

Barvy používáme ve formátu HEX.

Pro barvy, které potřebují určitý stupeň průhlednosti používáme LESS fci `fade()` , která dokáže pracovat s opacity u HEX barev. Output fce je barva ve formátu *rgba*, tj. žádný problém s kompatibilitou u prohlížečů.
  

## Obecné proměnné
```
```
Název proměnné | HEX | INFO
--- | --- | ---
@color-yellow | #ffae00 | ![alt text](http://www.thecolorapi.com/id?hex=ffae00&format=svg)
@color-gold | #f5a623 |![alt text](http://www.thecolorapi.com/id?hex=f5a623&format=svg)
@color-orange | #e57e24 |![alt text](http://www.thecolorapi.com/id?hex=e57e24&format=svg)
| |
@color-red | #cc0000 |![alt text](http://www.thecolorapi.com/id?hex=cc0000&format=svg)
@color-red-light | #df0000 |![alt text](http://www.thecolorapi.com/id?hex=df0000&format=svg)
@color-red-dark | #9d0000 |![alt text](http://www.thecolorapi.com/id?hex=9d0000&format=svg)
| |
@color-green | #008000 |![alt text](http://www.thecolorapi.com/id?hex=008000&format=svg)
@color-green-light | #00a000 |![alt text](http://www.thecolorapi.com/id?hex=00a000&format=svg)
@color-green-dark | #005000 |![alt text](http://www.thecolorapi.com/id?hex=005000&format=svg)
@color-green-special | #59946b |![alt text](http://www.thecolorapi.com/id?hex=59946b&format=svg)
| |
@color-blue | #0645ad |![alt text](http://www.thecolorapi.com/id?hex=0645ad&format=svg)
@color-blue-light | #0084ff |![alt text](http://www.thecolorapi.com/id?hex=0084ff&format=svg)
@color-blue-dark | #002962 |![alt text](http://www.thecolorapi.com/id?hex=002962&format=svg)
@color-violet | #7b009d |![alt text](http://www.thecolorapi.com/id?hex=7b009d&format=svg)
| |
@color-grey-darker| #222|![alt text](http://www.thecolorapi.com/id?hex=222222&format=svg)
@color-grey-dark| #666|![alt text](http://www.thecolorapi.com/id?hex=666666&format=svg)
@color-grey-medium| #999|![alt text](http://www.thecolorapi.com/id?hex=999999&format=svg)
@color-grey-light| #ccc|![alt text](http://www.thecolorapi.com/id?hex=cccccc&format=svg)
@color-grey-lighter| #eee|![alt text](http://www.thecolorapi.com/id?hex=eeeeee&format=svg)
@color-grey-lightest| #f5f5f5|![alt text](http://www.thecolorapi.com/id?hex=f5f5f5&format=svg)
| |
@color-white|#fff|![alt text](http://www.thecolorapi.com/id?hex=ffffff&format=svg)
@color-black| #000|![alt text](http://www.thecolorapi.com/id?hex=000000&format=svg)
| |
@color-firmy| #41679C|![alt text](http://www.thecolorapi.com/id?hex=41679C&format=svg)
**Průhledné**||
@color-grey-transparent-zero| rgba(0, 0, 0, .0)
@color-grey-transparent-lightest-1| rgba(0, 0, 0, .06)
@color-grey-transparent-lightest-2| rgba(0, 0, 0, .08)
@color-grey-transparent-lighter| rgba(0, 0, 0, .10)
@color-grey-transparent-light| rgba(0, 0, 0, .20)
@color-grey-transparent-medium| rgba(0, 0, 0, .50)
@color-grey-transparent-dark| rgba(0, 0, 0, .60)
@color-grey-transparent-darker| rgba(0, 0, 0, .70)
@color-grey-transparent-darkest| rgba(245, 246, 249, .95)
||
@color-white-transparent-zero| rgba(255, 255, 255, .0)
@color-white-transparent-light| rgba(255, 255, 255, .10)
@color-white-transparent-medium| rgba(255, 255, 255, .50)
@color-white-transparent-dark| rgba(255, 255, 255, .85)
||

## Barvy použité bez proměnné v kódu

```
```
Využití | HEX | INFO
--- | --- | ---
**Barva pozadi**||
background-color| #f2f2f2|![alt text](http://www.thecolorapi.com/id?hex=f2f2f2&format=svg)
background-color| #ebebeb|![alt text](http://www.thecolorapi.com/id?hex=ebebeb&format=svg)
background-color| #006eb7|![alt text](http://www.thecolorapi.com/id?hex=006eb7&format=svg)
background-color| #2297f4|![alt text](http://www.thecolorapi.com/id?hex=2297f4&format=svg)
background-color| #1b78c3|![alt text](http://www.thecolorapi.com/id?hex=1b78c3&format=svg)
background-color| #4C6991|![alt text](http://www.thecolorapi.com/id?hex=4C6991&format=svg)
background-color| #F3F3F3|![alt text](http://www.thecolorapi.com/id?hex=F3F3F3&format=svg)
background-color| #7A94B9|![alt text](http://www.thecolorapi.com/id?hex=7A94B9&format=svg)
background-color| #3A5C8C|![alt text](http://www.thecolorapi.com/id?hex=3A5C8C&format=svg)
background-color| #F8F9FB|![alt text](http://www.thecolorapi.com/id?hex=F8F9FB&format=svg)
background-color| #FEF9F6|![alt text](http://www.thecolorapi.com/id?hex=FEF9F6&format=svg)
background-color| #F5FAF5|![alt text](http://www.thecolorapi.com/id?hex=F5FAF5&format=svg)
background-color| #FDF5F5|![alt text](http://www.thecolorapi.com/id?hex=FDF5F5&format=svg)
background-color| #479647|![alt text](http://www.thecolorapi.com/id?hex=479647&format=svg)
background-color| #9F3378|![alt text](http://www.thecolorapi.com/id?hex=9F3378&format=svg)
background-color| #8E2D6B|![alt text](http://www.thecolorapi.com/id?hex=8E2D6B&format=svg)
background-color| #018766|![alt text](http://www.thecolorapi.com/id?hex=018766&format=svg)
background-color| #00795B|![alt text](http://www.thecolorapi.com/id?hex=00795B&format=svg)
background-color| #007ACC|![alt text](http://www.thecolorapi.com/id?hex=007ACC&format=svg)
background-color| #006DB7|![alt text](http://www.thecolorapi.com/id?hex=006DB7&format=svg)
background-color| #b9418d|![alt text](http://www.thecolorapi.com/id?hex=b9418d&format=svg)
background-color| #8f2e6c|![alt text](http://www.thecolorapi.com/id?hex=8f2e6c&format=svg)
background-color| #029c76|![alt text](http://www.thecolorapi.com/id?hex=029c76&format=svg)
background-color| #01795c|![alt text](http://www.thecolorapi.com/id?hex=01795c&format=svg)
**Barva textu**||
color| #bbb|![alt text](http://www.thecolorapi.com/id?hex=bbbbbb&format=svg)
color| #c30000|![alt text](http://www.thecolorapi.com/id?hex=c30000&format=svg)
color| #B35109|![alt text](http://www.thecolorapi.com/id?hex=B35109&format=svg)
color| #007ACC|![alt text](http://www.thecolorapi.com/id?hex=007ACC&format=svg)
color| #CA0000|![alt text](http://www.thecolorapi.com/id?hex=CA0000&format=svg)
color| #D66E00|![alt text](http://www.thecolorapi.com/id?hex=D66E00&format=svg)
**Barva borderu**||
border| #EBEBEB|![alt text](http://www.thecolorapi.com/id?hex=EBEBEB&format=svg)
border-bottom| #F2EFEF|![alt text](http://www.thecolorapi.com/id?hex=F2EFEF&format=svg)
border-right-color| #018766|![alt text](http://www.thecolorapi.com/id?hex=018766&format=svg)
border-right-color| #9F3378|![alt text](http://www.thecolorapi.com/id?hex=9F3378&format=svg)
border-right-color| #007ACC|![alt text](http://www.thecolorapi.com/id?hex=007ACC&format=svg)
## Barvy použité s proměnnou přímo u komponenty
```
`````
Nazev | HEX | INFO
--- | --- | ---
**Jizdni rady** ||
@brand-primary| #5DB75F|![alt text](http://www.thecolorapi.com/id?hex=5DB75F&format=svg)
@brand-primary-active| #2f7733|![alt text](http://www.thecolorapi.com/id?hex=2f7733&format=svg)
@brand-success| #5cb85c|![alt text](http://www.thecolorapi.com/id?hex=5cb85c&format=svg)
@brand-info| #5bc0de|![alt text](http://www.thecolorapi.com/id?hex=5bc0de&format=svg)
@brand-warning| #f0ad4e|![alt text](http://www.thecolorapi.com/id?hex=f0ad4e&format=svg)
@brand-danger| #de0000|![alt text](http://www.thecolorapi.com/id?hex=de0000&format=svg)
@bus-city-color| #8b572a|![alt text](http://www.thecolorapi.com/id?hex=8b572a&format=svg)
@bus-color| #8b572a|![alt text](http://www.thecolorapi.com/id?hex=8b572a&format=svg)
@cable-color| #7dc39e|![alt text](http://www.thecolorapi.com/id?hex=7dc39e&format=svg)
@ferry-color| #7d89c3|![alt text](http://www.thecolorapi.com/id?hex=7d89c3&format=svg)
@metro-color| #667177|![alt text](http://www.thecolorapi.com/id?hex=667177&format=svg)
@metro-A-color| #429845|![alt text](http://www.thecolorapi.com/id?hex=429845&format=svg)
@metro-B-color| #f9b32d|![alt text](http://www.thecolorapi.com/id?hex=f9b32d&format=svg)
@metro-C-color| d0011b|![alt text](http://www.thecolorapi.com/id?hex=d0011b&format=svg)
@tram-color| #4a90e2|![alt text](http://www.thecolorapi.com/id?hex=4a90e2&format=svg)
@trolley-color| #a92277|![alt text](http://www.thecolorapi.com/id?hex=a92277&format=svg)
@train-color| #003b79|![alt text](http://www.thecolorapi.com/id?hex=003b79&format=svg)
@icon-color| #b2b8bb|![alt text](http://www.thecolorapi.com/id?hex=b2b8bb&format=svg)
@icon-color-hover| #86949D|![alt text](http://www.thecolorapi.com/id?hex=86949D&format=svg)
@text-muted| #7B878E|![alt text](http://www.thecolorapi.com/id?hex=7B878E&format=svg)
**krasty-msfotbal**||
@ms-color-football| #014F8F|![alt text](http://www.thecolorapi.com/id?hex=014F8F&format=svg)
@ms-color-football-live| #AE0008|![alt text](http://www.thecolorapi.com/id?hex=AE0008&format=svg)
**krasty-ms**||
@ms-color| #007ACC|![alt text](http://www.thecolorapi.com/id?hex=007ACC&format=svg)

  
