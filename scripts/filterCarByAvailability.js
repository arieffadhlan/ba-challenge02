function filterCarByAvailability(cars) {
  // Sangat dianjurkan untuk console.log semua hal hehe
  console.log(cars);

  // Tempat penampungan hasil
  const result = [];

  // Tulis code-mu disini
  let i = 0;
  while (i < cars.length) {
    let carAvailability = cars[i].available;
    if (carAvailability) {
      result.push(cars[i]);
    }
    i++;
  }

  // Rubah code ini dengan array hasil filter berdasarkan availablity
  return result;
}
