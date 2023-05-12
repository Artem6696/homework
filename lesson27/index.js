// Проверьте, что этот объект не пустой и что в нем есть ключ age.
const user = {
    name: "John",
    age: 30
};

let checkProp = function (obj) {
    let flag = true;
    if (Object.keys(obj).length === 0) {
        flag = false
    }
    obj.hasOwnProperty('age') ? flag = true : flag = false
    return flag
}
console.log(checkProp(user));

// function isThere(obj){
// if( obj.age === undefined){
//     return false
// }
// return true
// }
// console.log(isThere(user));



// Получите из этого массива объект, где name === "Kolya" и сохраните это в какой-либо переменной.
const users = [{
    name: "Vasya",
    age: 27
}, {
    name: "Kolya",
    age: 30
}, {
    name: "Anna",
    age: 17
}]
const userKolya = users[1]
console.log(userKolya);



// Напишите функцию, которая принимает на вход объект с зарплатами сотрудников и возвращает их сумму  
const salaries = {
    Ivan: 10,
    Mila: 40,
    Egor: 5,
    Alisher: 20
}
const solutionOption = {
    classic: function (obj) {
        let res = 0;
        let values = Object.values(obj);
        for (let i = 0; i < values.length; i++) {
            res += values[i]
        }
        return res
    },
    alternative: function (obj) {
        let res = 0;
        let values = Object.values(obj)
        for (let value in values) {
            res += values[value]
        }
        return res
    },
    alternative2: function (obj) {
        let total = 0;
        let toArr_pair = Object.entries(obj)
        for (let [key, value] of toArr_pair) {
            total += value
        }
        return total
    },
    reduce: function (obj) {
        return Object.values(obj).reduce((acc, elem) => acc + elem, 0)
    },

}
console.log(solutionOption.classic(salaries));
console.log(solutionOption.alternative(salaries));
console.log(solutionOption.reduce(salaries));
console.log(solutionOption.alternative2(salaries));




// Напишите функцию, которая умножает все числовые свойства объекта на 2
const menu = {
    width: 100,
    height: 300,
    title: 'menu'
}
//  { width: 200, height: 600, title: 'menu'}


const multiplySolution = {
    variable: function (obj) {
        let entries = Object.entries(obj)
        let arr = []
        for (let [key, value] of entries) {
            if (typeof value === 'number') {
                arr.push([key, value * 2])
            } else {
                arr.push([key, value])
            }
        }
        let object = Object.fromEntries(arr)
        return object
    },
    map: function (obj) {
        let entries = Object.entries(obj)
        let newArr = entries.map(function (item) {
            if (typeof item[1] === 'number') {
                return [item[0], item[1] * 2]
            } else {
                return [item[0], item[1]]
            }
        })
        let toObject = Object.fromEntries(newArr)
        return toObject
    }
}
console.log(multiplySolution.variable(menu));
console.log(multiplySolution.map(menu));




// Напишите функцию, которая удаляет свойство, если его значение является объектом
const client = {
    name: 'Ivan',
    married: true,
    age: 27,
    friends: ['Igor', 'Kolya'],
    company: {
        name: 'JustCode',
        salary: 1
    }
}
const deleteObjects = (obj) => {
   for(let prop in obj){
    if(typeof obj[prop] === 'object' && !Array.isArray(obj[prop])){
        delete obj[prop]
    }
    
   }
   return obj
}
console.log(deleteObjects(client) );// { name: 'Ivan', married: true, age: 27, friends:[ 'Igor', 'Kolya' ]}