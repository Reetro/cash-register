class Guid {
  constructor() {
    this.id = this.Guid()
  }
  guid() {
    return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
  }
}

export default Guid
