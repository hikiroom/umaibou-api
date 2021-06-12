import { Item } from './data';

const data:Item[] = require('./data');

module.exports = {
    list() {
        return data;
    },
    item({ name }: {name: string}) {
        return data.find((item) => item.name === name);
    },
};