const fs = require("fs");

module.exports = (req, res, next) => {

    // Retour spécifique pour coller au comportement de l'EX
    if (req.method === 'PATCH') {

        if (req.url === '/acteur') {
            const body = req.body;
            if (body.id === 'brad-pitt') {
                return res.status(400).send({ message: "Erreur lors de la modification des informations de l'acteur Brad Pitt" });
            } else {
                return res.status(201).send(body);
            }
        }
    }

    if (req.method === 'POST') {
        if (req.url.includes('/film')) {
            const body = req.body;
            return res.status(201).send(body);
        }
    }


    if (req.method === 'DELETE') {

        if (req.url.includes('film')) {
            return res.send();
        }
    }

    next()
}