fs = require('fs');

const getPyramid = (filePath) => {
    return parseData(fs.readFileSync(filePath, 'utf8'))
}
const parseData = (data) => {
    data = data.trim();
    data = data.split(" ");
    data = data.map(number => parseInt(number.replace(/\D/g,'')), 10);
    data = to2DArray(data);
    return data;
}
const to2DArray = (data) => {
    const pyramid = [];
    let n = 0;
    while(data.length) {
        n++;
        const row = [];
        for (let i = 0; i < n; i++) {
            row.push(data.shift());
        }
        pyramid.push(row)
    }
    return pyramid;
}
const getMaxValue = (pyramid) => {
    let total = 0;
    for (let i = 0; i < pyramid.length; i++) {
        total += getNextNumber(pyramid[i]);
    }
    return total;
}
const getNextNumber = (row) => {
    if (row.length % 2 === 0) {
        return row[((row.length) / 2)-1];
    } else {
        return row[(row.length-1) / 2];
    }
}

const pyramid = getPyramid('./triangle.txt');
const total = getMaxValue(pyramid);

console.log("Your max value is ", total)