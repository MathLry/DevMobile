// module fileSystem
const fs = require('fs');

//load json files
const data = JSON.parse(fs.readFileSync('save.json'));

//save data
const saveData = (data, file) => {

    const finished = (error) => {
        if (error) {
            console.error(error);
            return;
        }
    }

    const jsonData = JSON.stringify(data, null, 2);
    fs.writeFile(file, jsonData, finished);
    console.log('saved');
};

const piece = {
    nom: 'salon',
    meubles: 'commode',
};

const meuble = {
    nom: 'placard',
    piece: 'salon',
    compartiments: '5',
};

const compartiment = {
    numero: '5',
    meuble: 'commode',
};

const categorie = {
    nom: 'instrument pour ecrire',
};

const image = {
    nom: 'img.png',
};

const objet = {
    nom: 'stylo',
};

const saveItem = (objet) => {
    const newObjet = {
        name: objet.nom,
        categorie: categorie.nom,
        piece: piece.nom,
        image: image.nom,
        meuble: meuble.nom,
        compartiment: compartiment.nom,
    }

    data[objet.nom] = newObjet;
    saveData(data, 'save.json');
}

const saveRoom = (piece) => {
    const newRoom = {
        name: piece.nom,
        meubles: {},
    }

    data[meuble.nom] = newRoom;
    saveData(data, 'save.json');
}

const saveFurniture = (meuble) => {
    const newFurniture = {
        name: meuble.nom,
        compartiments: {},
    }

    data[meuble.piece].meubles[meuble.nom] = newFurniture;
    saveData(data, 'save.json');
}

// saveItem(objet);
// saveRoom(piece);
// saveFurniture(meuble);