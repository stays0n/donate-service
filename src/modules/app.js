import { DonateForm } from './donate-form';
import { DonateList } from './donate-list';
import * as utils from '../core/utils/index';

export default class App {
  #state;
  #donateForm;
  #donateList;

  constructor() {
    this.#state = {
      donates: mockDonates, // []
      totalAmount: initialSumOfDonates, // 0
    };
    this.#donateForm = new DonateForm(this.#state.totalAmount, this.createNewDonate.bind(this));
    this.#donateList = new DonateList(this.#state.donates);
  }

  run() {
    const donateFormHTML = this.#donateForm.render();
    document.body.append(donateFormHTML);
    const donateListHTML = this.#donateList.render();
    document.body.append(donateListHTML);
  }

  createNewDonate(newDonate) {
    this.#state.donates.push(newDonate);
    const totalSumOfDonates = this.#state.donates.reduce((acc, donate) => {
      return (acc += Number(donate.amount));
    }, 0);
    this.#state.totalAmount = totalSumOfDonates;
    this.#donateForm.updateTotalAmount(totalSumOfDonates);
    this.#donateList.updateDonates(this.#state.donates);
  }
}

const mockDonates = [
  { amount: 4, date: new Date() },
  { amount: 20, date: new Date() },
  { amount: 3, date: new Date() },
  { amount: 1, date: new Date() },
];

const initialSumOfDonates = utils.calculateSumOfNumbers(mockDonates);
