const isBossValid = (name, description, img) => {
    return [ name, description, img ].every(i => i && i !== '');
};

module.exports = {
    isBossValid
};
