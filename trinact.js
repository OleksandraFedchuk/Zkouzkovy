const names = "Alice,John,Andrew,Chris,Angela";
const phones = "123333333,54687999,23456699,07640098,743210854"
const namesArray = names.split(","); 
const phonesArray = phones.split(",");

for (let i = 0; i < namesArray.length; i++) {
    console.log(`${namesArray[i]} number is ${phonesArray[i]}`);
}

console.log(phonesArray);