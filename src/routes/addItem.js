const db = require('../persistence');
const uuid = require('uuid/v4');

const nodeVersion = process.versions.node;
console.log(nodeVersion)
const nodeMajorVersion = parseInt(nodeVersion.split('.')[0]);

module.exports = async (req, res) => {

    if (nodeMajorVersion <= 8) {
        res.status(500).send({ error: `Incompatible node version ${nodeVersion}` });
        return;
    }
    const item = {
        id: uuid(),
        name: req.body.name,
        completed: false,
    };

    await db.storeItem(item);
    res.send(item);
};
