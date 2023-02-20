class AccountAttributes{
    private readonly _name: string;
    private readonly _subscription: string;
    private readonly _timezone: string;

    public constructor(attributes: any){
        this._name = attributes.name;
        this._subscription = attributes.subscription;
        this._timezone = attributes.timezone;
    }

    public get name(): string{
        return this._name;
    }

    public get subscription(): string {
        return this._subscription;
    }

    public get timezone(): string{
        return this._timezone;
    }

}


export class Account {
    private _attributes: AccountAttributes;
    private _id: string;
    private _type: string

    public constructor(account: any){

        this._attributes = account.data['attributes'];
        this._id = account.data["id"];
        this._type = account.date['type'];

    }


    public get id(): string{
        return this._id;
    }

    public get type(): string {
        return this._type;
    }

    public get attributes(): AccountAttributes {
        return this._attributes;
    }


}