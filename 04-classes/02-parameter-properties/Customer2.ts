class Customer2 {
    
    constructor(private _firstname: string, private _lastname: string){
        this.firstname = _firstname;
        this.lastname = _lastname;
    }
    
    get firstname() : string {
        return this._firstname;
    }
    set firstname(firstname : string ){
         this._firstname = firstname;
    }

    public get lastname(): string {
        return this._lastname;
    }
    public set lastname(value: string) {
        this._lastname = value;
    }
}
let customer2 = new Customer2("mari", "kuga");
console.log(customer2);

console.log(customer2.firstname);
console.log(customer2.lastname);
