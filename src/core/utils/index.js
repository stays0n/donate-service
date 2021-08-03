import moment from 'moment';

export function calculateSumOfNumbers(numbers) {
  return numbers.reduce((acc, num) => (acc += num.amount), 0);
}

export function getFormattedTime(date = new Date()) {
  return moment(date).format('MMMM Do YYYY, h:mm:ss a');
}
