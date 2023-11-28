function countTotalSalary(salaries) {
    let totalSalary = 0;
    const values = Object.values(salaries);
for (let value of values) {
    totalSalary += value ;
}
    return totalSalary;
  }

  console.log(countTotalSalary({})) // 0
  console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })) //330
  console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })) // 400