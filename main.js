// let str1 = 'hello world'
// let str2 = 'lorem ipsum'
// let str3 = 'javascript is cool'
// let allStr = 'hello world lorem ipsum javascript is cool'
//
// console.log(str1.length);
// console.log(str2.length);
// console.log(str3.length);
// console.log(allStr.length);


{
    function arrItemsLength(array) {
        for (const itemLength of array) {
            console.log(itemLength.length);
        }
    }

    let arr = [
        'hello world',
        'lorem ipsum',
        'javascript is cool',
    ];
    arrItemsLength(arr);
}

{
    let arr = [
        'hello world',
        'lorem ipsum',
        'javascript is cool',
    ];

    function ItemsToUpperCase(array) {
        for (const itemLength of array) {
            console.log(itemLength.toUpperCase());
        }
    }

    ItemsToUpperCase(arr);
}

{
    let arr = [
        'HELLO WORLD',
        'LOREM IPSUM',
        'JAVASCRIPT IS COOL',
    ];

    function ItemsToLowerCase(array) {
        for (const itemLength of array) {
            console.log(itemLength.toLowerCase());
        }
    }

    ItemsToLowerCase(arr);
}

{
    let str = ' dirty string   ' //чомусь команда str.join в мене не відображалась (інтеллідж не хотів її сприймати, тому довелося робити способом для калік, головне що працює хахахха)
    let result = str.replace('   ', '');
    result = result.replace(' ', '');
    console.log(result);
}


{//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.

    // let str = 'Ревуть воли як ясла повні';
    // console.log(str.split(' '))

    let str = 'Ревуть воли як ясла повні';
    let stringToArray = (str) => console.log(str.split(' '));
    stringToArray(str);
}
{
    let arr = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let result = (item) => {
        console.log(JSON.stringify(item));
    }
    result(arr);

}

{
    //- створити функцію sortNums(array,direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    // let nums = [11,21,3];
    // let ascendingArray = nums.sort((a,b) => a-b);
    // console.log(ascendingArray);
    // let descendingArray = nums.sort((a,b) => b-a);
    // console.log(ascendingArray);

    let nums = [11, 21, 3]; //не знаю як правильно, я зміг видавити з себе 2 способи, але думаю є ще якийсь альтернативніший.
    function sortNumsDescAsc(numbers, choice) {
        if (choice === 'ascending') {
            console.log(numbers.sort((a, b) => a - b));
        } else if (choice === 'descending') {
            console.log(numbers.sort((a, b) => b - a));
        } else {
            console.log(numbers.sort((a, b) => a - b));
        }
    }

    sortNumsDescAsc(nums, 'descending');
}
{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];

    //-- відсортувати його за спаданням за monthDuration
    let descArray = coursesAndDurationArray.sort((a, b) => {
        return b.monthDuration - a.monthDuration;
    })
    console.log(descArray);

    //-- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
    let arrMonth = [];
    for (const itemsOfArray of coursesAndDurationArray) {
        if (itemsOfArray.monthDuration > 5) {
            arrMonth.push(itemsOfArray);
        }
    }
    console.log(arrMonth)
    {
        // -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
        let coursesAndDurationArray = [
            {title: 'JavaScript Complex', monthDuration: 5},
            {title: 'Java Complex', monthDuration: 6},
            {title: 'Python Complex', monthDuration: 6},
            {title: 'QA Complex', monthDuration: 4},
            {title: 'FullStack', monthDuration: 7},
            {title: 'Frontend', monthDuration: 4}
        ];
        let addId = coursesAndDurationArray.map((user, index) => {
            user.id = index + 1;
            return user;
        })
        console.log(addId)
    }
}
{
    const suits = ['spade', 'diamond', 'heart', 'club'];
    const values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];

    let cards = [];
    for (const suit of suits) {
        for (const value of values) {
            let card = ({value: value, suit: suit});
            if (suit === 'heart' || suit === 'diamond') {
                card.color = 'red';
            } else {
                card.color = 'black';
            }
            cards.push(card);
        }
    }
    console.log(cards);
    //- знайти піковий туз;
    console.log(cards.find(card => (card.value === 'ace' && card.suit === 'spade')));
    // - всі шістки
    console.log(cards.filter(card => (card.value === '6')));
    // - всі червоні карти
    console.log(cards.filter(card => (card.color === 'red')));
    //- всі буби
    console.log(cards.filter(card => (card.suit === 'diamond')));
    //- всі трефи від 9 та більше
    console.log(cards.filter(card => card.suit === 'club' && (card.value !== '6' && card.value !== '7' && card.value !== '8')));

    //Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
    console.log(cards)
    const reduce = cards.reduce((acc, card) => {
        switch (card.suit) {
            case 'spade':
                acc.spades.push(card);
                break;
            case 'diamonds':
                acc.spades.push(card);
                break;
            case 'hearts':
                acc.spades.push(card);
                break;
            case 'clubs':
                acc.spades.push(card);
                break;
        }
        return acc;
    }, {
        spades: [],
        diamonds: [],
        hearts: [],
        clubs: []
    })
    console.log(reduce)
}
{
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    console.log(coursesArray.filter(module => {
        return module.modules.includes('sass');
    }));
    console.log(coursesArray.filter(module => {
        return module.modules.includes('docker');
    }));


}


