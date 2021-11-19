const products = [
    {
        title: 'Сумка RED',
        id: 1,
        prise: 2000,
        img: './img/ma_3.svg'
    },
    {
        title: 'Куртка RED',
        id: 2,
        prise: 6000,
        img: './img/ma_1.svg'
    },
    {
        title: 'Пальто RED',
        id: 3,
        prise: 2400,
        img: './img/ma_2.svg'
    },
    {
        title: 'Сапоги RED',
        id: 4,
        prise: 5300,
        img: './img/ma_0.svg'
    },
    {
        title: 'Платье RED',
        id: 5,
        prise: 2780,
        img: './img/ma_3.svg'
    },
    {
        title: 'Сумка чак',
        id: 6,
        prise: 2110,
        img: './img/ma_0.svg'
    },
    {
        title: 'Платье !!',
        id: 7,
        prise: 10780,
        img: './img/ma_0.svg'
    },
    {
        title: 'Шуба RED',
        id: 8,
        prise: 25780,
        img: './img/ma_1.svg'
    }
];


window.addEventListener('load', function () {

    const shope = this.document.querySelector('.shope');

    function displayProductsItems(products) {
        let displayProducts = products.map(function (item) {
            return ` <div class="katalog">
                        <div class="card" id="${item.id}">
                            <h4 class="title">${item.title}</h4>
                            <div class="images"><img src="${item.img}" alt=""></div>
                            <p class="price"><span>${item.prise}</span> рублей</p>
                            <button class="buy">Купить</button>
                        </div>
                    </div>`;
        });
        displayProducts = displayProducts.join("");
        shope.innerHTML = displayProducts;


        const button = this.document.querySelectorAll('button');
        const basketItems = this.document.querySelector('.basket_items');
        const priceAll = this.document.querySelector('.priceAll');
        let summa = 0;
        priceAll.innerHTML = summa;

        button.forEach(element => {
            element.addEventListener('click', (e) => {
                const btnAdd = e.target.closest('.card');
                const id = btnAdd.id;
                console.log(id);

                products.map(function (it) {
                    if (id == it.id) {
                        summa += it.prise;
                        console.log(summa);
                        basketItems.innerHTML += `
                        <div class="buyItem">
                            <h4 class="buyTitle">${it.title}</h4>
                            <p class="buyPrice">${it.prise}</p>
                            <p class="count"></p>
                        </div>
                        `
                    }
                });

            })
        });

    }




    displayProductsItems(products);

})