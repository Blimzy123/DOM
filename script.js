const totalPriceElement = document.querySelector('.total');
const productCards = document.querySelectorAll('.card');

productCards.forEach((card) => {
  const quantityElement = card.parentElement.querySelector('.quantity');
  const unitPriceElement = card.querySelector('.unit-price');
  const actionButtons = card.querySelectorAll('[data-action]');
  const price = Number(unitPriceElement.dataset.price);

  let quantity = 0;

  const updateTotal = () => {
    const total = [...productCards].reduce((sum, item) => {
      const qty = Number(item.parentElement.querySelector('.quantity').textContent);
      const unit = Number(item.querySelector('.unit-price').dataset.price);
      return sum + qty * unit;
    }, 0);

    totalPriceElement.textContent = `${total} $`;
  };

  const updateQuantityDisplay = () => {
    quantityElement.textContent = quantity;
    updateTotal();
  };

  actionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const action = button.dataset.action;

      if (action === 'increase') {
        quantity += 1;
      }

      if (action === 'decrease') {
        quantity = Math.max(0, quantity - 1);
      }

      if (action === 'remove') {
        quantity = 0;
      }

      if (action === 'favorite') {
        button.classList.toggle('text-danger');
      }

      updateQuantityDisplay();
    });
  });

  updateQuantityDisplay();
});
