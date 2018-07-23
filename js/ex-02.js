function getImageNamesFromObject(obj) {
    var tempProp = Object.keys(obj);
    var tempWord = [];
    var arrayFinal = [];
    for (let j = 0; j < tempProp.length; j++) {
        tempWord = tempProp[j].split("_");
            if(tempWord[0] === "img"){
                arrayFinal.push(obj[tempProp[j]]);
            } 
    }
    console.log(arrayFinal);
    return arrayFinal;
}




var jennyObj = {
    name: "jenny",
    img_40x40: "selfy-ig-profile.png",
    job: 'seamstress',
    age:  28,
    profileActive: false,
    img_40x40: "thumnail-me.jpg",
    img_100x100: "jenny-profile.jpg",
    img_244x244: "frend-kitkat.jpg",
    img_200x200: "penguin-hat.png",
 }
 
 var rufusDolanObj = {
    name: "rufus",
    img_50x50: "srs-photo.png",
    job: 'cook',
    age:  48,
    hasFace: false,
    img_100x100: "glamour-shot.png",
    img_300x200: "at-the-game.png",
 }
 
 var userImageList2 = getImageNamesFromObject(jennyObj)
 //=> ["srs-photo.png", "glamour-shot.png", "at-the-game.png"]