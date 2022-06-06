import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Телевизоры' },
      { id: 2, name: 'Ноутбуки' },
      { id: 3, name: 'Смартфоны' },
      { id: 4, name: 'Планшеты' },
      { id: 5, name: 'Аксессуары' },
      { id: 6, name: 'Холодильники' },
      { id: 7, name: 'Вентиляторы' },
      { id: 8, name: 'Очистители воздуха' },
      { id: 9, name: 'Мелкая бытовая техника' },
      { id: 10, name: 'Крупная бытовая техника' },
    ]
    this._brands = [
      { id: 1, name: 'Samsung' },
      { id: 2, name: 'Apple' },
    ]
    this._devices = [
      {
        id: 1,
        name: 'iPhone 13 Pro',
        price: 120000,
        rating: 5,
        img: `https://avatars.mds.yandex.net/get-mpic/5313128/img_id8729390340339016423.jpeg/orig`,
      },
      {
        id: 2,
        name: 'iPhone SE',
        price: 70000,
        rating: 5,
        img: `https://avatars.mds.yandex.net/get-mpic/5344223/img_id8818921449517379348.png/orig`,
      },
      {
        id: 3,
        name: 'Samsung Galaxy S22 Ultra',
        price: 120000,
        rating: 5,
        img: `https://avatars.mds.yandex.net/get-mpic/5297750/img_id7441222126342037488.png/orig`,
      },
      {
        id: 4,
        name: 'Samsung Galaxy A52',
        price: 30000,
        rating: 5,
        img: `https://avatars.mds.yandex.net/get-mpic/5366650/img_id5150216314890197601.png/orig`,
      },
    ]

    this._selectedType = {}

    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }
  setBrands(brands) {
    this._brands = brands
  }
  setDevices(devices) {
    this._devices = devices
  }
  setSelectedType(type) {
    this._selectedType = type
  }

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }

  get selectedType() {
    return this._selectedType
  }
}
