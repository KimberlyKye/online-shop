import { makeAutoObservable } from 'mobx'

export default class DeviceStore {
  constructor() {
    this._types = [
      { id: 1, name: 'Холодильники' },
      { id: 2, name: 'Смартфоны' },
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

  get types() {
    return this._types
  }

  get brands() {
    return this._brands
  }

  get devices() {
    return this._devices
  }
}
