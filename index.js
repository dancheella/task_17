import { Worker } from './worker.js';

let workersData = [
  { firstName: 'Даниил', lastName: 'Агеев', birthday: '12.12.1998', position: 'Frontend-разработчик', rate: 1115, days: 32 },
  { firstName: 'Сергей', lastName: 'Дуболоб', birthday: '01.04.1994', position: 'Backend-разработчик', rate: 1090, days: 11 },
  { firstName: 'Мария', lastName: 'Рукаложка', birthday: '12.12.1998', position: 'UX/UI', rate: 999, days: 2 },
  { firstName: 'Павел', lastName: 'Прохоров', birthday: '05.19.1995', position: 'PR', rate: 1450, days: 26 },
  { firstName: 'Галя', lastName: 'Галуза', birthday: '08.31.1989', position: 'Team Lead', rate: 2150, days: 50 }
];

let workers = workersData.map(item => {
  let worker = new Worker(item.firstName, item.lastName, item.birthday, item.position);
  worker.rate = item.rate;
  worker.addDays(item.days);
  return worker;
});

workers.forEach(worker => {
  console.log(`${worker.getFullName()}. Заработал: ${worker.getSalary()} рублей`);
});

Worker.whoWorkedMore(workers);
Worker.whoIsYounger(workers);
