const randomData = require('random-fixture-data');
const jsonFile = require('jsonfile');

//Creates Random Data and Writes it to a JSON File
function createRandomData(){
    let randomInfoList = [],
        file = './randomData.json',
        object = randomInfoList

    for(let i = 0; i < 1000; i++){        
        randomInfoList.push({
            name: randomData.name,
            username: randomData.username,
            country: randomData.country,
            age: randomData.random,
            description: randomData.sentence,
            email: randomData.email
        });
    }

    jsonFile.writeFile(file, object, function (err) {
        if(err){
            console.error('Uh-Oh, something happened!' + ' '+ err);
        }
        console.log('JSON File has been created successfully.');
    })    
}

createRandomData();