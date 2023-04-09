window.addEventListener('load', function () {
    let tg = window.Telegram.WebApp;
    tg.MainButton.text = "Changed Text"; //изменяем текст кнопки
    tg.expand();
    alert(tg.initData)
    // const DetailForm = document.getElementById('DetailForm');
    // const OrderForm = document.getElementById('OrderForm');
    // const ContactData = document.getElementById('ContactData');
    // const KPForm = document.getElementById('KPForm');
    //
    // DetailForm.classList.toggle('active');
    //
    // button1.addEventListener('click', () => {
    //     tg.sendData("DetailForm")
    // });
    // button2.addEventListener('click', () => {
    //     button2.classList.toggle('active');
    //     if (button1.classList.toggle('active'))
    //         button1.classList.toggle('active')
    //     if (button3.classList.toggle('active'))
    //         button3.classList.toggle('active')
    //     chosenSymbol = button2.textContent;
    //     UpdateAfterCurrencyChange();
    // });
    // button3.addEventListener('click', () => {
    //     button3.classList.toggle('active');
    //     if (button2.classList.toggle('active'))
    //         button2.classList.toggle('active')
    //     if (button1.classList.toggle('active'))
    //         button1.classList.toggle('active')
    //     chosenSymbol = button3.textContent;
    //     UpdateAfterCurrencyChange();
    // });
}
