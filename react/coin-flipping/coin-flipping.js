const tossCoin = () => Math.random() > 0.5 ? "heads" : "tails";
    
function fiveHeads() {
    return new Promise( (resolve, reject) => {
        // your code here!
        let headsCount = 0;
        let attempts = 0;
        while(headsCount < 5) {
            attempts++;
            let result = tossCoin();
            if(result === "heads") {
                headsCount++;
            } else {
                headsCount = 0;
            }
            if (headsCount === 5){
                resolve(`It took ${attempts} flips to get 5 heads!`)
            }
            else if (attempts === 100){
                reject(`You flipped 100 times and didn't get 5 heads. Crazy!`)
            }
            }
        }
    )};

fiveHeads()
    .then( res => console.log(res) )
    .catch( err => console.log(err) );
console.log( "When does this run now?" );

