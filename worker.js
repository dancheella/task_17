import {Person} from './person.js';

export class Worker extends Person {
  #rate;
  #days;

  constructor(firstName, lastName, birthday, position) {
    super(firstName, lastName, birthday);
    this.position = position;
    this.#rate = 1000;
    this.#days = 0;
    this.addDays();
  }

  get rate() {
    return this.#rate;
  }

  set rate(value) {
    if (value >= 1000) {
      this.#rate = value;
    } else {
      console.log("Ставка за день работы менее 1000 рублей. Сам работай:)");
    }
  }

  addDays(days) {
    if (days > 0) {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();
      const totalDaysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

      this.#days += days;

      if (this.#days > totalDaysInMonth) {
        this.#days = totalDaysInMonth;
      }
    }
  }

  getSalary() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 1;
    const birthMonth = parseInt(this.birthday.split('.')); // извлекаем месяц рождения из строки с датой рождения

    let bonus = 0;
    if (birthMonth === currentMonth) {
      bonus = 0.1 * this.rate * this.#days;
    }

    return this.rate * this.#days + bonus;
  }

  static whoWorkedMore(workers) {
    let maxDaysWorked = -1;
    let workersWithMaxDays = [];

    // поиск работников с наибольшим количеством отработанных дней
    for (const worker of workers) {
      if (worker.#days > maxDaysWorked) {
        maxDaysWorked = worker.#days;// обновляем максимальное количество отработанных дней и массив с работниками
        workersWithMaxDays = [worker]; // заменяем предыдущий массив с одним работником
      } else if (worker.#days === maxDaysWorked) {
        workersWithMaxDays.push(worker);
      }
    }

    if (workersWithMaxDays.length === 1) {
      console.log(`Больше всех отработал ${workersWithMaxDays[0].getFullName()}. Количество рабочих дней - ${maxDaysWorked}`);
    } else {
      const workerNames = workersWithMaxDays.map(worker => worker.getFullName());
      console.log(`Несколько работников отработали одинаковое количество дней - ${maxDaysWorked}: ` + workerNames.join(', '));
    }
  }

  static whoIsYounger(workers) {
    let minAge = Infinity;
    let youngestWorkers = [];

    // поиск работников которое являются самыми молодыми
    for (const worker of workers) {
      const age = parseInt(worker.getAge());

      if (age < minAge) {
        minAge = age; // обновляем минимальный возраст и массив с работниками
        youngestWorkers = [worker]; // заменяем предыдущий массив с одним работником
      } else if (age === minAge) {
        youngestWorkers.push(worker);
      }
    }

    if (youngestWorkers.length === 1) {
      console.log(`${youngestWorkers[0].getFullName()} ${minAge} лет`);
    } else {
      const youngestWorker = youngestWorkers.map(worker => worker.getFullName())
      console.log(`Несколько работников имеют одинаковый наименьший возраст - ${minAge}: ` + youngestWorker.join(', '));
    }
  }
}

