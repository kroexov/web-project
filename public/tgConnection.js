window.addEventListener('load', function () {
    let tg = window.Telegram.WebApp;
    tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
    tg.expand();
    alert(tg.initDataUnsafe.start_param)


    const DetailForm = document.getElementById('DetailForm');
    const OrderForm = document.getElementById('OrderForm');
    const ContactData = document.getElementById('ContactData');
    const KPForm = document.getElementById('KPForm');
    const mainText = document.getElementById('mainText');
    
    mainText.innerText = tg.initDataUnsafe.start_param

    DetailForm.classList.toggle('active');

    DetailForm.addEventListener('click', () => {
        tg.sendData("DetailForm")
    });
    OrderForm.addEventListener('click', () => {
        tg.sendData("OrderForm")
    });
    ContactData.addEventListener('click', () => {
        tg.sendData("ContactData")
    });
    KPForm.addEventListener('click', () => {
        tg.sendData("KPForm")
    });
})
