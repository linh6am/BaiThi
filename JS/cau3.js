let arr = [1,2,3,4,5,6,7,8,9];
let k = 5;

function count() {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}

//Kết quả theo yêu cầu:
console.log(`Số lượng cặp số chia hết cho ${k} là: ${count(arr, k)}`);