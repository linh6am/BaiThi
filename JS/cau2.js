function score(level) {
    if (level < 48) {
        return level;
    }
    let next5 = Math.ceil(level / 5) * 5;
    if (next5 - level < 3) {
        return next5;
    }
return level;
}

//Kết quả theo yêu cầu:
console.log(score(84)); //Làm tròn thành 85
console.log(score(77)); //Không làm tròn
console.log(score(44)); //Trượt - Không làm tròn
