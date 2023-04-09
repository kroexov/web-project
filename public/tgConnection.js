let tg = window.Telegram.WebApp;
tg.MainButton.text = "Changed Text"; //изменяем текст кнопки 
tg.expand();
tg.sendData("Hello")