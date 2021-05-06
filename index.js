

    //const people = [ 'Lisa', 'Kaitlin', 'Jan' ]
    const cards = []

function writeCards(array, string) {
    for (let f = 0; f < array.length; f++ ) {
        cards.push(`Thank you, ${array[f]} for the wonderful ${string} gift!`);
        return cards;
    };
};


function countDown(number) {
    for (let count = number; count >= 0; count --) {
        console.log(`${count}`);
    }
};