let pai = "arr";
let mae = "arr2";

let obj1 = {
  foo: true,
  bar: 10,
  _place: false,
  parent: false,
  place() {
    for (let i = 0; i < 2; i++) {
      if (this == arr[i]) {
        this.parent = arr[2];
        break;
      }

      if (this == arr2[i]) {
        this.parent = arr[2];
        break;
      }
    }

    this._place = this.parent.indexOf(this);

    console.log(this._place, this.parent);
  },
};

let obj2 = {
  foo: true,
  bar: 10,
  _place: false,
  parent: false,
  place() {
    for (let i = 0; i < 2; i++) {
      if (this == arr[i]) {
        this.parent = arr;
        break;
      }

      if (this == arr2[i]) {
        this.parent = arr2;
        break;
      }
    }

    this._place = this.parent.indexOf(this);

    console.log(this._place, this.parent);
  },
};

let obj3 = {
  foo: true,
  bar: pai,
  _place: false,
  parent: false,
  place() {
    for (let i = 0; i < 2; i++) {
      if (this == arr[i]) {
        this.parent = arr[2];
        break;
      }

      if (this == arr2[i]) {
        this.parent = arr[2];
        break;
      }
    }

    this._place = this.parent.indexOf(this);

    console.log(this._place, this.parent);
  },
};

let obj4 = {
  foo: true,
  bar: 10,
  _place: false,
  parent: false,
  place() {
    for (let i = 0; i < 2; i++) {
      if (this == arr[i]) {
        this.parent = arr[2];
        break;
      }

      if (this == arr2[i]) {
        this.parent = arr[2];
        break;
      }
    }

    this._place = this.parent.indexOf(this);

    console.log(this._place, this.parent);
  },
};

let arr2 = [obj3, obj4, pai];

let arr = [obj1, obj2, mae];

arr[1].place();

