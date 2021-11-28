// const getSleepHours = day => {
//   switch(day) {
//     case 'monday':
//       return 7;
//     case 'tuesday':
//       return 8;
//     case 'wednesday':
//       return 7;
//     case 'thursday':
//       return 8;
//     case 'friday':
//       return 7;
//     case 'saturday':
//       return 8;
//     case 'sunday':
//       return 7;
//   }
// }
const getActualSleepHours = () => 5 + 6 + 7 + 8 + 5 + 6 + 7;
const getIdealSleepHours = idealHours => idealHours * 7;
const calculateSleepDebt = () => {
  const actualSleepHours = getActualSleepHours();
  const idealSleepHours = getIdealSleepHours(7);

  if (actualSleepHours === idealSleepHours) {
    console.log('You got the perfect amount of sleep.');
  } else if (actualSleepHours > idealSleepHours) {
    console.log('You got more sleep than needed.');
  } else if (actualSleepHours < idealSleepHours) {
    console.log('You should get some rest');
  }
}

calculateSleepDebt();