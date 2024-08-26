let arr = [15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180, 195, 210, 225, 240, 255, 270, 285, 300];
//Tìm các số là bội chung của 3 và 5 và tính tổng:
function multiple(number) {
    return number % 3 === 0 && number % 5 === 0;
}
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    if (multiple(arr[i])) {
        sum += arr[i];
    }
}

//Kết quả theo yêu cầu:
console.log("Hiển thị mảng tạo ban đầu:", arr );
console.log("Hiểm thị số phần tử trong mảng ban đầu:", arr.length);
document.write("Tổng các số là bội chung của 3 và 5: " + sum);
