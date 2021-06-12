const data = require('./data');

module.exports = {
    list() {
        return data;
    },
    item({ name }) {
        return data.find((item) => item.name === name);
    },
};