var data = [],
    n = 10000,
    a = 20,
    b = 20;

for (var k = 0; k < n; k++) {
    data.push({x: 0.01 * k, y: 10 * Math.pow(2, 0.01 * 10)});
}
console.log(data[999])