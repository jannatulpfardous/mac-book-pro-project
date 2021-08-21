const gb16Memory = document.getElementById('gb16memory')
const gb8Memory = document.getElementById('gb8memory')


const gb256 = document.getElementById('gb256')

const gb512 = document.getElementById('gb512')
const gb1Tb = document.getElementById('gb1tb')
const delivary20 = document.getElementById('delivary20')
const delivary0 = document.getElementById('delivary0')

const bestPrice = document.getElementById('bestprice')
const memory = document.getElementById('memory')
const storage = document.getElementById('storage')
const charge = document.getElementById('charge')
const totalPrice = document.getElementById('totalprice')
const totalPrice2 = document.getElementById('totalprice2')
const promo = document.getElementById('promo')
const button_value = document.getElementById('button_value')





function myFunction() {


    const promo_code = promo.value
    const newValue = promo_code == "stevekaku"
    if (newValue) {
        const m = Number(totalPrice.innerText)
        const vag = Math.ceil((m * 20) / 100)

        const biyog = m - vag


        totalPrice.innerText = biyog
        totalPrice2.innerText = biyog


        button_value.disabled = true


    } else {

        alert("Your Promo Code not matching, Try again")
        document.formdata.reset()
        location.reload();


    }
}





function updateValue() {
    const bestValueNum = Number(bestprice.innerText);
    const memoryNum = Number(memory.innerText);
    const storageNum = Number(storage.innerText);
    const chargeNum = Number(charge.innerText);

    const totalPriceNum = bestValueNum +memoryNum + storageNum + chargeNum

    totalPrice.innerText = totalPriceNum
    totalPrice2.innerText = totalPriceNum


}




gb8Memory.addEventListener('click', function () {
    let n = Number(gb8Memory.value)
    memory.innerText = n

    updateValue()
})



//first start
gb16Memory.addEventListener('click', function () {
    let n = Number(gb16Memory.value)
    memory.innerText = n
    updateValue()

})


//first end





//secend start


gb256.addEventListener('click', function () {
    let n = Number(gb256.value)
    storage.innerText = n
    updateValue()

})


gb512.addEventListener('click', function () {
    let n = Number(gb512.value)
    storage.innerText = n
    updateValue()

})

gb1Tb.addEventListener('click', function () {
    let n = Number(gb1Tb.value)
    storage.innerText = n
    updateValue()

})

//secend end


//third start

delivary20.addEventListener('click', function () {
    let n = Number(delivary20.value)
    charge.innerText = n
    updateValue()

})

delivary0.addEventListener('click', function () {
    let n = Number(delivary0.value)
    charge.innerText = n
    updateValue()

})
//third end