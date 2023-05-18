export class Person {

  #birthday;

  constructor(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.#birthday = birthday;
    this.birthday;  // получение значения свойства birthday
  }

  get birthday() {
    let birthday = this.#birthday; // получение значения приватного свойства birthday
    let separationBirth = birthday.split('.'); // разделение даты рождения на части (разделитель .)
    if (separationBirth[0] >= 1 && separationBirth[0] <= 12) { // первая часть даты рождения является числом от 1 до 12
      return this.#birthday;
    }
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }

  getAge() {
    const today = new Date(); // дата сегодня
    const birthDate = new Date(this.#birthday); // дата на основе приватного свойства birthday
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthsSinceBirth = today.getMonth() - birthDate.getMonth();
    if (monthsSinceBirth < 0 || (monthsSinceBirth === 0 && today.getDate() < birthDate.getDate())) {
      age--; // уменьшение значения возраста на 1, если текущий месяц меньше месяца рождения или если текущий день меньше дня рождения в текущем месяце
    }

    if (age % 10 === 1 && age !== 11) {
      return `${age} год`;
    } else if ((age % 10 === 2 || age % 10 === 3 || age % 10 === 4) && (age < 10 || age > 20)) {
      return `${age} года`;
    } else {
      return `${age} лет`;
    }
  }
}