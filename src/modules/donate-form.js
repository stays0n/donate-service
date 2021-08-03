import { Settings as settings } from '../core/constants/settings';

export class DonateForm {
  #totalAmount;
  #donateFormHTML;
  #totalAmountHTML;
  constructor(totalAmount, createNewDonate) {
    this.#totalAmount = totalAmount;
    this.createNewDonate = createNewDonate;
    this.#donateFormHTML = document.createElement('form');
    this.#donateFormHTML.className = 'donate-form';
    this.#donateFormHTML.addEventListener('submit', (event) => {
      event.preventDefault();
      const { target } = event;
      createNewDonate({ amount: target.amount.value, date: new Date() });

      target.amount.value = '';
    });
    this.#totalAmountHTML = document.createElement('h1');
    this.#totalAmountHTML.id = 'total-amount';
  }

  updateTotalAmount(newAmount = this.#totalAmount) {
    this.#totalAmountHTML.textContent = `${newAmount}${settings.currency}`;
  }

  render() {
    this.updateTotalAmount();
    const donateFormInputLabel = document.createElement('label');
    donateFormInputLabel.className = 'donate-form__input-label';
    const donateFormDonateInput = document.createElement('input');
    donateFormDonateInput.className = 'donate-form__donate-input';
    donateFormDonateInput.name = 'amount';
    donateFormDonateInput.type = 'number';
    donateFormDonateInput.max = '100';
    donateFormDonateInput.min = '0';
    donateFormDonateInput.setAttribute('required', '');
    const donateFormSubmitButton = document.createElement('button');
    donateFormSubmitButton.className = 'donate-form__submit-button';
    donateFormSubmitButton.type = 'submit';
    donateFormSubmitButton.textContent = 'Задонатить';

    this.#donateFormHTML.append(this.#totalAmountHTML, donateFormInputLabel, donateFormSubmitButton);
    donateFormInputLabel.append(donateFormDonateInput);

    return this.#donateFormHTML;
  }
}
