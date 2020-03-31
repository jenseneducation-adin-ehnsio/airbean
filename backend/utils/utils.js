///Slumpa ordernummer ///
function generateOrderNr() {
  let letters = ["X", "Y", "Z"];
  return `AB${Date.now()}${
    letters[Math.floor(Math.random() * letters.length)]
  }`;
}

///Slumpa eta ///
function generateETA() {
  let eta = 10;
  return eta + Math.floor(Math.random() * 20);
}

module.exports = { generateOrderNr, generateETA };
