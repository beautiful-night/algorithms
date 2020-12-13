// 快速排序
let arr = [8];
for (let i = 0; i < 1000000; i++) {
    const num = Math.random();
    arr.push(num);
}

const start = new Date().getTime();
function quick_sort(arr, l, r) {
    if (l < r) {
        let i = l, j = r, x = arr[l];
        while (i < j) {
            while (i < j) {
                if (x > arr[j]) {
                    arr[i++] = arr[j];
                    break;
                }
                j--;
            }
            while (i < j) {
                if (x <= arr[i]) {
                    arr[j--] = arr[i];
                    break;
                }
                i++;
            }
        }
        arr[i] = x;
        quick_sort(arr, l, i - 1);
        quick_sort(arr, i + 1, r);
    }
}
// quick_sort(arr, 0, arr.length - 1);
// console.log('时间：' + (new Date().getTime() - start) + 'ms 百万级，快速排序');