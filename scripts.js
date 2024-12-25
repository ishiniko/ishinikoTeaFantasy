document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.section-title');
  
  window.addEventListener('scroll', () => {
      let scrollPosition = window.scrollY || window.pageYOffset;
      
      if (scrollPosition > 50 && scrollPosition < 100) { 

          let fontSize = 48 + (scrollPosition / 12);
          title.style.fontSize = `${fontSize}px`;
      } else if (scrollPosition >= 300) {
          title.style.fontSize = '64px'; 
      } else {
          title.style.fontSize = '48px'; 
      }
  });
});

document.querySelectorAll('.product-card button').forEach(button => {
  button.addEventListener('click', () => {
      alert('Товар добавлен в корзину! Для дальнейшего оформления просим связаться по телефону +7 915-390-12-30');
  });
});

function handleFormSubmit(event) {
    event.preventDefault(); 

    const form = event.target;
    const data = new FormData(form);
    
    const userName = data.get("text");
    const email = data.get("email");
    const phoneNumber = data.get("number");

    alert(`Ваши данные записаны:\nИмя: ${userName}\nEmail: ${email}\nТелефон: ${phoneNumber}\nВ течении 15 минут Вам поступит звонок от нашего менеджера для продолжения оформления заказа`);

    form.reset();
}