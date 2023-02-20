class LeadAttributes {
    private _name: string | null;
    private _industry:string | null;
    private _firstVisitDate: Date | null;
    private _status: string | null;
    private _lastVisitDate: Date | null;
    private _websiteUrl: string | null;
    private _phone: string | null;
    private linkedinUrl: string | null;
    private twitterHandle: string | null;
    private _facebookUrl: string | null;
    private _employeeCount: number | null;
    private _employeeRange: EmployeeRange | null;
    private _crmLeadId: number | null;
    private _crmOrganizationId: number | null;
    private _tags: string[] | null;
    private _logoUrl: string | null;
    private _assignee: string | null;
    private _businessId: string | null;
    private _revenue: string | null;
    private _emailedTo: string | null;
    private _leadfeederUrl: string | null;
    private _visits: number | null;
    private _quality: number | null;

    public constructor(attributes: any){
        this._name = attributes.name;
        this._industry = attributes.industry;
        this._firstVisitDate = attributes.firstVisitDate;
        this._status = attributes.status;
        this._lastVisitDate = attributes.lastVisitDate;
        this._websiteUrl = attributes.websiteUrl;
        this._phone = attributes.phone;
        this.linkedinUrl = attributes.linkedinUrl;
        this.twitterHandle = attributes.twitterHandle;
        this._facebookUrl = attributes.facebookUrl;
        this._employeeCount = attributes.employeeCount;
        this._employeeRange = attributes.employeeRange;
        this._crmLeadId = attributes.crmLeadId;
        this._crmOrganizationId = attributes.crmOrganizationId;
        this._tags = attributes.tags;
        this._logoUrl = attributes.logoUrl;
        this._assignee = attributes.assignee;
        this._businessId = attributes.businessId;
        this._revenue = attributes.revenue;
        this._emailedTo = attributes.emailedTo;
        this._leadfeederUrl = attributes.leadfeederUrl;
        this._visits = attributes.visits;
        this._quality = attributes.quality;
    }

    public get name(): string | null{
        if(this._name != null){
        return this._name;
        }
        return null;
    }

    public get industry(): string | null{
        if(this._industry != null){
            return this._name;
            }
        return this._industry;
    }

    public get firstVisitDate(): Date | null{      
        return this._firstVisitDate;
    }

    public get status(): string | null{
        return this._status;
    }

    public get lastVisitDate(): Date  | null{
        return this._lastVisitDate;
    }

    public get websiteUrl(): string | null{
        return this._websiteUrl;
    }

    public get phone(): string | null{
        return this._phone;
    }

    public get facebookUrl(): string | null{
        return this._facebookUrl;
    }

    public get employeeCount(): number | null{
        return this._employeeCount;
    }

    public get employeeRange(): EmployeeRange | null{
        return this._employeeRange;
    }

    public get crmLeadId(): number | null{
        return this._crmLeadId;
    }

    public get crmOrganizationId(): number | null{
        return this._crmOrganizationId;
    }

    public get tags(): string[] | null{
        return this._tags;
    }

    public get logoUrl(): string | null{
        return this._logoUrl;
    }

    public get assignee(): string | null{
        return this._assignee;
    }

    public get businessId(): string | null{
        return this._businessId;
    }

    public get revenue(): string | null{
        return this._revenue;
    }

    public get emailedTo(): string | null{
        return this._emailedTo;
    }

    public get leadfeederUrl(): string | null{
        return this._leadfeederUrl;
    }

    public get visits(): number | null{
        return this._visits;
    }

    public get quality(): number | null{
        return this._quality;
    }

}



class LeadLocation{

    private readonly _id: string | null;
    private readonly _type: string | null;
    private readonly _attributes: LeadLocationAttributes;

    public constructor(location: any){
        this._id = location.id;
        this._type = location.type;
        this._attributes = new LeadLocationAttributes(location.attributes);
    }

    public get id(): string | null{
        return this._id;
    }

    public get type(): string | null{
        return this._type;
    }

    public get attributes(): LeadLocationAttributes{
        return this._attributes;
    }



    

}

class LeadLocationAttributes{
    private readonly _country: string | null;
    private readonly _countryCode: string | null;
    private readonly _region: string | null;
    private readonly _city: string | null;
    private readonly _stateCode: string | null;

    public constructor(attributes: any){
        this._country = attributes.country;
        this._countryCode = attributes.countryCode;
        this._region = attributes.region;
        this._city = attributes.city;
        this._stateCode = attributes.stateCode;
    }

    public get country(): string | null{
        return this._country;
    }

    public get countryCode(): string | null{
        return this._countryCode;
    }

    public get region(): string | null{
        return this._region;
    }

    public get city(): string | null{
        return this._city;
    }

    public get stateCode(): string | null{
        return this._stateCode;
    }
}




class EmployeeRange{
    private _min: number | null;
    private _max: number | null;

    public constructor(min: number | null, max: number | null){
        this._min = min;
        this._max = max;
    }

    public get min(): number | null{
        return this._min;
    }

    public get max(): number | null{
        return this._max;
    }
}

export class Lead{
    private _attributes: LeadAttributes | null;
    private _id: string | null;
    private _type: string | null;
    private _location: LeadLocation[] | null;

    public constructor(lead: any){
        this._attributes = new LeadAttributes(lead.data['attributes']);
        this._id = lead.data['id'];
        this._type = lead.data['type'];
 
        this._location?.forEach(item => {
            new LeadLocation(item);
        });
    }

    public get attributes(): LeadAttributes | null{
        return this._attributes;
    }

    public get id(): string | null{
        return this._id;
    }

    public get type(): string | null{
        return this._type;
    }


    public get location(): LeadLocation[]  | null{
        return this._location;
    }

}