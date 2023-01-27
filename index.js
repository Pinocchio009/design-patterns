class Observable{
  constructor() {
    this.phoneNumber = []
  }
  add(fn){
    this.phoneNumber.push(fn)
  }
  remove(fn){
    this.phoneNumber = this.phoneNumber.filter(number => number !== fn)
  }
  notify(data){
    for (let i =0; i < this.phoneNumber.length; i++){
      this.phoneNumber[i](data)
    }
  }
}

const observer = new Observable();

const fn = (data) => {
  console.log( '2347023232', data)
}

observer.add(fn)

observer.notify('now dialling 2347023232')


 

