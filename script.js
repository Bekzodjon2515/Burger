const foods = {
    plainBurger: {
        name: "GAMBURGER",
        price: 10000,
        amount: 0,
        kcall: 400,
        get calcSum () {
            return this.amount * this.price
        },
        get kcallSum () {
            return this.amount * this.kcall
        }


        

    },

    freshBurger: {
        name: "GAMBURGER",
        price: 20500,
        amount: 0,
        kcall: 400,
        get calcSum () {
            return this.amount * this.price
        },
        get kcallSum () {
            return this.amount * this.kcall
        }

    },

    freshCombo: {
        name: "FRESH COMBO",
        price: 31900,
        amount: 0,
        kcall: 800,
        get calcSum () {
            return this.amount * this.price
        },
        get kcallSum () {
            return this.amount * this.kcall
        }

    }
}

    console.log(foods["plainBurger"].amount)
    const btn = [...document.querySelectorAll('.main__product-btn')]

    for (let i = 0; i < btn.length; i++) {
        btn[i].addEventListener('click',function (){
            prepare(this)
            
        })
    }

        function prepare(elBtn) {
            let parent = elBtn.closest(".main__product")
            let parentId =parent.getAttribute('id')
            let num = parent.querySelector(".main__product-num")
            let price =parent.querySelector('.main__product-price span')
            let kcall =parent.querySelector('.main__product-kcall span')


            let sym  =elBtn.getAttribute('data-symbol')

            let count = foods[parentId].amount
            if (sym == "+") {
                count ++
            }else if (sym == "-" && count > 0){
                count --
            }

            foods[parentId].amount = count
            num.innerHTML =count

            price.innerHTML =foods[parentId].calcSum
            kcall.innerHTML =foods[parentId].kcallSum
        
        
    }


    let count = document.querySelector('.header__timer-extra')

    let stop;

    function lvl() {
        count.innerHTML++

        if (count.innerHTML <= 70) {
            stop = setTimeout (() => {
                lvl()
            },  10);
        }else if (count.innerHTML <= 90){
            stop =setTimeout(() => {
                lvl()
            },100);
        }else if (count.innerHTML <= 100){
            stop =setTimeout(() => {
                lvl()
            },500);
        
    }

    if (count.innerHTML == 100){
        clearInterval(stop);
    }

    
    }
    lvl();

    // DELEVIRY

    let receipt =document.querySelector('.receipt')
    let receiptWindow = document.querySelector('.receipt__window')
    let receiptWindowOut =document.querySelector('.receipt__window-out')
    let addCart =document.querySelector('.addCart')
    let receiptWindowBtn  =document.querySelector('.receipt__window-btn')

    addCart.addEventListener('click', function (){
        receipt.style.display ="block"
        

        setTimeout(() => {
            receipt.style.opacity = "1"
            receiptWindow.style.top= "25%"
        }, 200);

        let menu = "Sizning chekinggiz: \n\n"
        let totalPrice =0;
        let totalKcall =0;

        for (const key in foods){
            if (foods[key].amount){
                menu += `${foods[key].name} ${foods[key].amount}x ${foods[key].price} = ${foods[key].calcSum}\n\n`
                totalPrice += foods[key].calcSum
                totalKcall += foods[key].kcallSum
            }
        }

        receiptWindowOut.innerHTML =`<b>${menu} \n Jami Kalloriya: ${totalKcall}kalloriya \n jami summa: ${totalPrice}sum/b>`
    })

    receiptWindowBtn.addEventListener('click',function (event){
        // location = "https //  /kun uz "
        if (event.target == event.currentTarget){
            receiptWindow.style.top = "-100%"
            setTimeout(() => {
                receipt.style.opacity = 0
                receipt.style.display ="none"
                location.reload()
            }, 200);
        }
    })

    let mainProductInfo = [...document.querySelectorAll('.main__product-info')]

    for (let i = 0; i < mainProductInfo.length; i++) {
        
        mainProductInfo[i].addEventListener('click', function (){

        })
    }

        function showImage (viewImage){
            let parent = viewImage.closest('.main__product')
            let proImage = parent.querySelector(".main__product img")
            console.log(proImage)
            let view =document.querySelector('.view')
            let showViewImage =document.querySelector('.view img')
            console.log(showViewImage)
            let viewClose =document.querySelector('.view__close')

            view.classList.add('active')
            let srcData = proImage.getAttribute('src')
            console.log(srcData)


            if(proImage.hasAttribute('src')){
                showViewImage.setAttribute('src',srcData)
            }

            view.addEventListener('click',function (event){
                if (event.target == event.currentTarget){
                    view.classList.remove('active')
                }
            })
            viewClose.addEventListener('click',function (){
                view.classList.remove('active')
            })
        }
    