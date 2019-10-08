# open-promotion-api
A simple API to provide a way to easily start a prize winning game using promotion codes like in some chocolate brand's promos.
Example generated code: X7G85ZL4

It can be easily integratable to any service. A basic example for the generation of 10 promocode strings at length of 7 mixed (numberic and alphabetical) characters:
```
let openPromotion = require('index.js');

let promoCodeArr = openPromotion.generate( 10, 7);
```

# Supported features: 
- Any length of size strings
- Any amount of generated strings
- Mixed (numberic and alphabetical) output

# Todo(s):
- Feature to disable numerical or aplhabetical character generation
