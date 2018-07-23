function getFirstLetterFromFirstName(array) {
    var tempName=[];
    var mayor = [];
    for (let i = 0; i < array.length; i++) {
        tempName.push(array[i].firstName);
        mayor.push(tempName[i][0].toUpperCase());
    }
    console.log(mayor);
    return mayor;
}

var names = [{
    firstName: "pedro",
    lastName: "Paramo"
  }, {
    firstName: "chuck",
    lastName: "Norris"
  }, {
    firstName: "vicente",
    lastName: "Fernandez"
  }, {
    firstName: "electric",
    lastName: "Blue"
  }];
  
  getFirstLetterFromFirstName(names); // => ["P", "C", "V", "E"]