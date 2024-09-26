// Zadanie 4. Dostawa towaru

// Zadeklaruj funkcję getShippingCost(country), która powinna sprawdzać możliwość dostawy towaru do kraju użytkownika (parametr country) i zwracać komunikat o wyniku. Obowiązkowo użyj instrukcji switch.

// Format zwracanego ciągu znaków "Shipping to <country> will cost <price> credits", gdzie zamiast <country> i <price> należy podstawić odpowiednie wartości.

const getShippingCost = (country) => {
    switch(country){
        case "China":
            return `Shipping to China will cost 100 credits`
            break;
        case "Chile":
           return `Shipping to Chile will cost 250 credits`;
            break;
        case "Australia":
           return 'Shipping to Australia will cost 170 credits';
            break;
        case "Jamaica":
           return 'shipping to Jamaica will cost 120 credits';
            break;
        default:
           return 'Sorry, there is no delivery to your country';
    }
}

// Lista krajów i koszt dostawy:

// China — 100 kredytów
// Chile — 250 kredytów
// Australia — 170 kredytów
// Jamaica — 120 kredytów


// Z listy widać, że dostawa jest możliwa nie wszędzie. Jeśli podany kraj nie znajduje się na liście, funkcja powinna zwrócić ciąg znaków "Sorry, there is no delivery to your country".



// Weź poniższy kod i wstaw go po deklaracji swojej funkcji, aby sprawdzić poprawność jej działania. W konsoli zostaną wyświetlone wyniki jej działania.



console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"



// Zostaw ten kod do sprawdzenia przez mentora.

// Na co będzie zwracał uwagę mentor przy sprawdzaniu:

// Zadeklarowana funkcja getShippingCost(country)
// W ciele funkcji użyta instrukcja switch
// Wywołanie getShippingCost("Australia") zwraca "Shipping to Australia will cost 170 credits"
// Wywołanie getShippingCost("Germany") zwraca "Sorry, there is no delivery to your country"
// Wywołanie getShippingCost("China") zwraca "Shipping to China will cost 100 credits"
// Wywołanie getShippingCost("Chile") zwraca "Shipping to Chile will cost 250 credits"
// Wywołanie getShippingCost("Jamaica") zwraca "Shipping to Jamaica will cost 120 credits"
// Wywołanie getShippingCost("Sweden") zwraca "Sorry, there is no delivery to your country"



