const eternalsData = [
    {
        eternalName: "Ikaris",
        power: "Flight",
        strength: "Superhuman",
        intelligence: "Genius",
        pic: "images\\ikaris.jpg"
    },
    {
        eternalName: "Sersi",
        power: "Reality Manipulation",
        strength: "Superhuman",
        intelligence: "Above average",
        pic: "images\\sersi.jpg"
    },
    {
        eternalName: "Kingo",
        power: "Swordsmanship",
        strength: "Superhuman",
        intelligence: "Above average",
        pic: "images\\kingo.webp"
    },
    {
        eternalName: "Gilgamesh",
        power: "Strength",
        strength: "Superhuman",
        intelligence: "Above average",
        pic: "images\\gilgamesh.jpg"
    },
    {
        eternalName: "Phastos",
        power: "Technological Prowess",
        strength: "Above average",
        intelligence: "Genius",
        pic: "images\\phastos.webp"
    }
];

const showInfo = () => {
    // get a handle to the input field and get the value
    let eternalSelect = document.querySelector("#eternalType").value;
    // the array is zero-based, so subtract 1
    eternalSelect = parseInt(eternalSelect) - 1;
    // get a handle to the paragraph
    let selectedEternalInfo = document.querySelector(".selectedEternalInfo");
    // get the correspoding EternalsData object
    let eternal = eternalsData[eternalSelect];
    // set the information
    selectedEternalInfo.textContent = `${eternal.eternalName} has the following attributes: power - ${eternal.power}, strength - ${eternal.strength}, intelligence - ${eternal.intelligence}`;
    let eternalPic = document.querySelector(".selectedEternalPic");
    // set the image
    eternalPic.src = eternal.pic;
}
