export class Device {
  id?: number;
  name: string = '';
  ip: string = '';
  model: number = -1;
  state: string = '';

  constructor(id=undefined, name='', ip='', model=-1, state='') {
    this.id = id;
    this.name = name;
    this.ip = ip;
    this.model = model;
    this.state = state;
  }

}
