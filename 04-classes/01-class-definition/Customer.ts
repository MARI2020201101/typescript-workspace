export class Customer {
    private _firstname: string;
    private _lastname: string;
    


    constructor(firstname: string, lastname: string){
        this._firstname = firstname;
        this._lastname = lastname;
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
let customer = new Customer("mari", "kuga");
console.log(customer);

console.log(customer.firstname);
console.log(customer.lastname);
