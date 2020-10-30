let counter = 0;

window.onload = () => {

    const titles = [

        "il-hua",

        "обнаружен ☠вирус☠",

        "когда бд",

        "опять упал",

        "скоро открытие",
    ];

    setInterval(() => {

        counter++;

        document.title = titles[counter % titles.length];

        if (counter == titles.length) counter = 0;

    }, 500);

};