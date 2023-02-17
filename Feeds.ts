class FeedCriteria{
    private readonly _searchValue: string;
    private readonly _excluded: boolean;
    private readonly _criterionType: string;
    private readonly _displayValue: string;


    constructor(criteria: any) {
        this._searchValue = criteria.searchValue;
        this._excluded = criteria.excluded;
        this._criterionType = criteria.criterionType;
        this._displayValue = criteria.displayValue;
    };

    public get setValue(): string{
        return this._searchValue;
    }

    public get displayValue(): string{
        return this._displayValue;
    }

    public get excluded(): boolean{
        return this._excluded;
    }

    public get criterionType(): string{
        return this._criterionType;
    }

}


class FeedAttributes{
    private readonly _name: string;
    private readonly _criteria: Array<FeedCriteria> = []

    constructor(attributes: any) {
        this._name = attributes.name;
        this._criteria = attributes.criteria
    };

    public get name(): string {
        return this._name;
    };

    public get criteria(): Array<FeedCriteria> {
        return this._criteria;
    }

}

class Feed{

    private readonly _id: string;
    private readonly _type: string;
    private readonly _attributes: FeedAttributes;

    public constructor(feed: any) {

        this._id = feed.id;
        this._type = feed.type
        this._attributes = new FeedAttributes(feed.attributes)
    };


    public get id(): string{
        return this._id;
    }

    public get type(): string{
        return this._type;
    }

    public get attributes(): FeedAttributes{
        return this._attributes;
    }
    
}