export class Guid {
  constructor(count) {
    this.count = count;
  }

  getNewGuidList() {
    const ret = [];
    for (let i = 0; i < this.count;i++) {
      ret.push(crypto.randomUUID());
    }
    return ret;
  }
}
