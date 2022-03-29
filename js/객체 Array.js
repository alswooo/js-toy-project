let days = ["mon", "tue", "wed"];

days.push('thu'); // 맨 뒤에 더해준다
days.unshift("sun"); // 맨 앞에 더해준다

for (let day of days) {
    console.log(day);
}