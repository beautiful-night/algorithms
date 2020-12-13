// 归并排序
let arr = [8];
for (let i = 0; i < 1000000; i++) {
    const num = Math.random();
    arr.push(num);
}

const start = new Date().getTime();
function mergeSort(arr) {
    if (arr.length > 1) {
        const mid = Math.floor(arr.length / 2);
        const left = mergeSort(arr.slice(0, mid));
        const right = mergeSort(arr.slice(mid, arr.length));
        arr = merge(left, right);
    }
    return arr;
}
function merge(left, right) {
    let i = 0, j = 0;
    const res = [];
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            res.push(left[i++]);
        } else {
            res.push(right[j++]);
        }
    }
    return res.concat(i < left.length ? left.slice(i) : right.slice(j));
}
mergeSort(arr);
console.log('时间：' + (new Date().getTime() - start) + 'ms 百万级，归并排序');