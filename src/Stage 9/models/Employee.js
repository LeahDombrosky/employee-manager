export default class Employee {
  constructor(id, name, phone, title) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  
  // updateName
  updateName(name) {
    this.name = name;
  }

  // updatePhone
  updatePhone(phone) {
    this.phone = phone;
  }

   // updateTitle
   pdateTitle(title) {
    this.title = title;
  }
}