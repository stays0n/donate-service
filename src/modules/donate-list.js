import { Settings as settings } from '../core/constants/settings';
import * as utils from '../core/utils/index';

export class DonateList {
  #donates;
  #donatesContainerDonates;
  constructor(donates) {
    this.#donates = donates;
    this.#donatesContainerDonates = document.createElement('div');
    this.#donatesContainerDonates.className = 'donates-container__donates';
  }

  #createDonateItems(arrDonate) {
    const donateItems = arrDonate.map((donate) => {
      const donateItem = document.createElement('div');
      donateItem.className = 'donate-item';
      donateItem.innerHTML = `${utils.getFormattedTime(donate.date)} - <b>${donate.amount}${settings.currency}</b>`;

      return donateItem;
    });

    return donateItems;
  }

  #appendDonateItems(arrDonateHTML) {
    arrDonateHTML.forEach((item) => {
      this.#donatesContainerDonates.append(item);
    });
  }

  render() {
    const donatesContainer = document.createElement('div');
    donatesContainer.className = 'donates-container';
    const donatesContainerTitle = document.createElement('h2');
    donatesContainerTitle.className = 'donates-container__title';
    donatesContainerTitle.textContent = 'Список донатов';
    const donateItems = this.#createDonateItems(this.#donates);

    donatesContainer.append(donatesContainerTitle, this.#donatesContainerDonates);
    this.#appendDonateItems(donateItems);

    return donatesContainer;
  }

  updateDonates(updatedDonates) {
    this.#donatesContainerDonates.textContent = '';
    const newDonateItems = this.#createDonateItems(updatedDonates);
    this.#appendDonateItems(newDonateItems);
  }
}
