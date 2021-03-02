// - створити функцію яка виводить масив
let array = [2, 3, 5, 6, 3, 5, 7, 9]

function printArray(arr) {
    console.log(arr);
}

printArray(array);
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.

function randomNum() {
    let emptyArray = [];
    for (let i = 0; i < 10; i++) {
        emptyArray.push(Math.round(Math.random() * 100));
    }
    return emptyArray;
}

printArray(randomNum());

// - створити функцію яка приймає три числа та виводить та повертає найменьше.

function minNumber(a, b, c) {
    if (a <= b && a <= c) {
        return a;
    }
    if (b <= a && b <= c) {
        return b;
    }
    if (c <= a && c <= a) {
        return c;
    }
}

console.log('minimum number is ', minNumber(1, 2, 4));

// - створити функцію яка приймає три числа та виводить та повертає найбільше.

function maxNumber(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }
    if (b >= a && b >= c) {
        return b;
    }
    if (c >= a && c >= a) {
        return c;
    }
}

console.log('maximum number is ', maxNumber(1, 2, 4));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше

function minMaxNumber() {
    let maxNuber = arguments[0];
    let minNuber = arguments[0];
    for (const argument of arguments) {
        if (maxNuber < argument) {
            maxNuber = argument;
        } else if (minNuber > argument) {

            minNuber = argument;
        }
    }
    console.log('maximum number is ', maxNuber);
    return minNuber;
}

console.log('minimum number is ', minMaxNumber(4, 20, 10, 3, -6, 9, 1));

// - створити функцію яка повертає найбільше число з масиву

array = [2, 3, 10, 6, 3, 5, 7, 9];

function returnMaxNumber(arr) {
    let maxNum = arr[0];
    for (const el of arr) {
        if (maxNum < el) {
            maxNum = el;
        }
    }
    return maxNum;
}

console.log('maximum number: ', returnMaxNumber(array));

// - створити функцію яка повертає найменьше число з масиву

array = [2, 3, 10, 6, -3, 5, 7, 9];

function returnMinNumber(arr) {
    let minNum = arr[0];
    for (const el of arr) {
        if (minNum > el) {
            minNum = el;
        }
    }
    return minNum;
}

console.log('minimum number: ', returnMinNumber(array));

// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
array = [2, 3, 10, 6, 13, 5, 7, 9];

function summator(arr) {
    let summ = 0;
    for (const number of arr) {
        summ = summ + number;
    }

    return summ;
}

console.log(summator(array));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

array = [2, 3, 10, 6, 13, 5, 7, 9];

function average(arr) {
    let summ = 0;
    for (const number of arr) {
        summ = summ + number;
    }
    let average = summ / arr.length;
    return average
}

console.log(average(array));

// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві  

let users = [{
        name: 'vasya',
        age: 31,
        status: false,
        skills: ['java', 'js']
    },
    {
        name: 'petya',
        age: 30,
        status: true,
        skills: ['java', 'js', 'html']
    },
    {
        name: 'kolya',
        age: 29,
        status: true,
        skills: ['mysql', 'mongo']
    },
    7,
    {
        name: 'olya',
        age: 28,
        status: false,
        skills: ['java', 'js']
    },
    'Hello',
    {
        name: 'max',
        age: 30,
        status: true,
        skills: ['mysql', 'mongo']
    }
];

function findNumbersOfObjects(arr) {
    let counter = 0;
    for (const element of arr) {
        if (typeof(element) === 'object') {
            counter++;
        }
    }
    return counter;
}

console.log(findNumbersOfObjects(users));


// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них

function findNumbersOfObjectsFilds(arr) {
    let counter = 0;
    for (const element of arr) {
        if (typeof(element) === 'object') {

            for (const i in element) {
                counter++;
            }
        }
    }
    return counter;
}

console.log(findNumbersOfObjectsFilds(users));

// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

function SumValuesElementsWithSameIndexes(arr1, arr2) {
    let newArray = [];

    for (const key in arr1) {
        newArray[key] = arr1[key];
    }
    for (const key in arr2) {

        if (typeof(newArray[key]) === 'undefined') {
            newArray.push(arr2[key]);
        } else {
            newArray[key] = newArray[key] + arr2[key];
        }

    }
    return newArray;
}

console.log(SumValuesElementsWithSameIndexes([1, 2, 3, 6], [2, 1, 8, 5, 9]));




// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// 1 2 3 4 5 6     4
let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers);

function replaceElement(arr, i) {
    let arr2 = JSON.parse(JSON.stringify(arr));

    if (i < arr.length - 1) {
        let temp = arr2[i];
        arr2[i] = arr2[i + 1];
        arr2[i + 1] = temp;
        console.log(arr2);
    } else {
        console.log('i більше за довжину масиву');
    }

}
replaceElement(numbers, 8);


// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

function moveElementsZeroToEnd(arr) {
    let emptyArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (!(arr[i] == 0)) {
            emptyArray.push(arr[i]);
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == 0) {
            emptyArray.push(arr[i]);
        }
    }

    return emptyArray;
}


console.log(moveElementsZeroToEnd([1, 0, 6, 0, 3]));
console.log(moveElementsZeroToEnd([0, 1, 2, 3, 4]));
console.log(moveElementsZeroToEnd([0, 0, 1, 0]));


// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"

function addTextBlock() {
    let div = document.createElement('div');
    div.innerText = 'Hello OWU';
    document.body.append(div);
}

addTextBlock();

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи

function addTextBlockOther(el, text) {
    let element = document.createElement(el);
    element.innerText = text;
    document.body.append(element);
}

addTextBlockOther('p', 'test');

// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
let cars = [{
    id: 1,
    model: '500L',
    producer: 'Fiat',
    tankVolume: 1.3,
    horsePower: 85
}, {
    id: 2,
    model: '500X',
    producer: 'Fiat',
    tankVolume: 2.4,
    horsePower: 180
}, {
    id: 3,
    model: 'Passat B8',
    producer: 'Volkswagen',
    tankVolume: 2,
    horsePower: 150
}, {
    id: 4,
    model: 'Touareg',
    producer: 'Volkswagen',
    tankVolume: 3,
    horsePower: 340
}, {
    id: 5,
    model: 'Malibu',
    producer: 'Chevrolet',
    tankVolume: 2.4,
    horsePower: 169
}, {
    id: 6,
    model: 'Camaro',
    producer: 'Chevrolet',
    tankVolume: 3.6,
    horsePower: 323
}, {
    id: 7,
    model: 'Octavia',
    producer: 'Skoda',
    tankVolume: 1.6,
    horsePower: 102
}, {
    id: 8,
    model: 'Superb',
    producer: 'Skoda',
    tankVolume: 1.8,
    horsePower: 160
}, {
    id: 9,
    model: 'X5',
    producer: 'BMW ',
    tankVolume: 3,
    horsePower: 400
}, {
    id: 10,
    model: '550',
    producer: 'BMW',
    tankVolume: 4.4,
    horsePower: 407
}, {
    id: 11,
    model: 'Outlander',
    producer: 'Mitsubishi',
    tankVolume: 2.4,
    horsePower: 170
}, {
    id: 12,
    model: 'Eclipse Cross',
    producer: 'Mitsubishi',
    tankVolume: 1.5,
    horsePower: 150
}, {
    id: 13,
    model: 'A4',
    producer: 'Audi',
    tankVolume: 2,
    horsePower: 190
}, {
    id: 14,
    model: 'Q5',
    producer: 'Audi',
    tankVolume: 3,
    horsePower: 272
}, {
    id: 15,
    model: 'A6',
    producer: 'Audi',
    tankVolume: 2,
    horsePower: 190
}]

function addListCar(arr, el) {
    let divId = document.getElementById(el);
    let ul = document.createElement('ul');
    let div = document.createElement('div');

    divId.append(ul);
    divId.append(div);

    for (const car of arr) {
        let li = document.createElement('li');
        let divCar = document.createElement('div');
        li.innerText = `${car.id}. ${car.producer} ${car.model}`;
        ul.append(li);

        divCar.innerText = `№${car.id}. Модель: ${car.producer} ${car.model}, об'єм двигуна: ${car.tankVolume}, ${car.horsePower} к.с.`;
        div.append(divCar);

    }
}

addListCar(cars, 'car-list')


// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

function addListCarWithDiv(arr, el) {
    let divId = document.getElementById(el);
    let ul = document.createElement('ul');
    let div = document.createElement('div');

    divId.append(ul);
    divId.append(div);

    for (const car of arr) {
        let li = document.createElement('li');
        let divCar = document.createElement('div');
        li.innerText = `${car.id}. ${car.producer} ${car.model}`;
        ul.append(li);
        div.append(divCar);
        divCar.style.display = 'flex';

        for (const key in car) {
            console.log(car[key]);
            let div = document.createElement('div');
            div.innerText = car[key];
            div.style.paddingRight = '10px'
            divCar.append(div);
        }
    }
}

addListCarWithDiv(cars, 'cars')


// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
let usersWithId = [{ id: 1, name: 'vasya', age: 31, status: false },
    { id: 2, name: 'petya', age: 30, status: true },
    { id: 3, name: 'kolya', age: 29, status: true },
    { id: 4, name: 'olya', age: 28, status: false },
];

let citiesWithId = [{ user_id: 3, country: 'USA', city: 'Portland' },
    { user_id: 1, country: 'Ukraine', city: 'Ternopil' },
    { user_id: 2, country: 'Poland', city: 'Krakow' },
    { user_id: 4, country: 'USA', city: 'Miami' },
];

function additionArray(arr1, arr2) {
    let usersWithCities = [];

    for (const key in arr1) {

        usersWithCities.push(arr1[key]);

        for (const iter in arr2) {
            if (arr1[key].id === arr2[iter].user_id) {
                usersWithCities[key].address = arr2[iter];
            }
        }
    }

    return usersWithCities;
}

console.log(additionArray(usersWithId, citiesWithId));

// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

let rules = [{
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },

];

function makeRules(arr) {
    let wrap = document.createElement('div');
    wrap.className = 'wrap';
    document.body.append(wrap);

    for (const i in arr) {
        let div = document.createElement('div');
        wrap.append(div);
        let h2 = document.createElement('h2');
        let rule = document.createElement('div');
        console.log(arr[i]);
        h2.innerText = arr[i].title;
        rule.innerText = arr[i].body;
        div.append(h2, rule);
    }
}

makeRules(rules);


// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

function powerOfTwo(number) {
    let arg = number;
    let res = 0;
    let n = 0;
    while (number >= 2) {
        number = number / 2;
        res = number;
        n++;
    }
    if (res === 1) {
        console.log(`число ${arg} = 2 в степені ${n}`);
    } else {
        console.log(`${arg} не є точною степінню`);
    }
}

powerOfTwo(512);

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

let actor = {
    named: 'Jackie Chan',
    nationality: 'Chinese',
    null: null,
    occupation: ['actor', 'stuntman', 'filmmaker', 'action choreographer', 'singer'],
    wife: {
        name: 'Joan Lin',
        occupation: ['Actress', 'singer'],
        children: {
            name: 'J Lin',
            occupation: 'singer',
            children: true
        }
    }
}


function DeepCopy(obj) {
    let emptyObject = (obj instanceof Array ? [] : {});
    for (let i in obj) {
        if (obj[i] != null && typeof(obj[i]) == 'object') {
            emptyObject[i] = DeepCopy(obj[i]);
        } else {
            emptyObject[i] = obj[i];
        }
    }
    return emptyObject;
}

let clone = DeepCopy(actor);
console.log(clone);

console.log(actor === clone);

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
//[1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]

array = [1, 3, ['Hello', 'Wordd', [9, 6, 1]],
    ['oops'], 9
];
console.log(array);

function arrayFlat(arr) {
    let res = arr.flat(2);
    return res;
}
arrayFlat(array);

//=======================
// Вирівняти багаторівневий масив в однорівневий не використовуючи Flat

function withoutFlat(arr) {
    let emptyArray = [];

    (function check(arr) {

        for (const el of arr) {
            if (Array.isArray(el) === true) {
                check(el);
            } else {
                emptyArray.push(el);
            }
        }

    })(arr);

    return emptyArray;

    console.log(withoutFlat(array));

    //=======================================================
    //=========        Практична робота      ================
    //=======================================================

    //1) создать функцию которая принимает массив и возвращает строку ([1, 2, 3, 4, 5, 6] -> "123456")

    function returnString(arr) {
        let string = '';
        for (const el of arr) {
            string = string + el;
        }
        return string;
    }

    console.log(returnString([1, 2, 3, 4, 5, 6]));


    //2) создать функцию которая принимает массив чисел и возвращает этот же массив,
    //но каждый его элемент больше на 1 ([5,2,3] -> [6,3,4])

    function changedArray(arr) {
        let emptyArray = [];
        for (let i = 0; i < arr.length; i++) {
            emptyArray[i] = arr[i] + 1;

        }
        return emptyArray;

    }

    console.log(changedArray([5, 2, 3]));


    //3) создать функцию которая принимает число n, min, max
    //и возвращает массив длиной n с случайными числами в диапазоне от min до max

    function randomLengthArray(n, min, max) {
        let emptyArray = [];
        for (let i = 0; i < n; i++) {
            emptyArray[i] = Math.round(Math.random() * (max - min)) + min;

        }
        return emptyArray;
    }

    console.log(randomLengthArray(15, 1, 40));

    //4)  создать функцию которая принимает age и массив  (массив ниже или придумайте свой)
    // и возвращает новый массив с теми юзерами которые совпадают по возрасту

    // Пример:
    // someFunc(30, users) -> [
    //     {id: 2, name: 'petya', age: 30, status: true},
    //     {id: 4, name: 'olya', age: 30, status: false},
    //     {id: 4, name: 'marta', age: 30, status: false},
    // ]

    users = [
        { id: 1, name: 'vasya', age: 31, status: false },
        { id: 2, name: 'petya', age: 30, status: true },
        { id: 3, name: 'kolya', age: 29, status: true },
        { id: 4, name: 'olya', age: 30, status: false },
        { id: 4, name: 'kira', age: 29, status: false },
        { id: 4, name: 'marta', age: 30, status: false },
    ];


    function arraySortAge(age, arr) {
        let emptyArray = [];
        for (const user of arr) {
            if (age === user.age) {
                emptyArray.push(user);
            }
        }
        return emptyArray;
    }

    console.log(arraySortAge(29, users));