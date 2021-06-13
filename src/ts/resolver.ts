import data from './data';

export default {
    list() {
        return data;
    },
    item({ name }: {name: string}) {
        return data.find((item) => item.name === name);
    },
};