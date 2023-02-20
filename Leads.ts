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

    public get firstVisitDate(): Date{      
        return this._firstVisitDate;
    }

    public get status(): string{
        return this._status;
    }

    public get lastVisitDate(): Date{
        return this._lastVisitDate;
    }

    public get websiteUrl(): string{
        return this._websiteUrl;
    }

    public get phone(): string{
        return this._phone;
    }

    public get facebookUrl(): string{
        return this._facebookUrl;
    }

    public get employeeCount(): number{
        return this._employeeCount;
    }

    public get employeeRange(): EmployeeRange{
        return this._employeeRange;
    }

    public get crmLeadId(): number{
        return this._crmLeadId;
    }

    public get crmOrganizationId(): number{
        return this._crmOrganizationId;
    }

    public get tags(): string[]{
        return this._tags;
    }

    public get logoUrl(): string{
        return this._logoUrl;
    }

    public get assignee(): string{
        return this._assignee;
    }

    public get businessId(): string{
        return this._businessId;
    }

    public get revenue(): string{
        return this._revenue;
    }

    public get emailedTo(): string{
        return this._emailedTo;
    }

    public get leadfeederUrl(): string{
        return this._leadfeederUrl;
    }

    public get visits(): number{
        return this._visits;
    }

    public get quality(): number{
        return this._quality;
    }

}

class LeadRelationship{ | null

}

class LeadLocation{

}

class EmployeeRange{
    private _min: number;
    private _max: number;

    public constructor(min: number, max: number){
        this._min = min;
        this._max = max;
    }
}

class Lead{
    private _attributes: LeadAttributes | null;
    private _id: string | null;
    private _type: string | null;
    private _relationships: LeadRelationship | null;
    private _location: LeadLocation | null;

    public constructor(lead: any){
        this._attributes = lead.data['attributes'];
        this._id = lead.data['id'];
        this._type = lead.data['type'];
        this._relationships = lead.data['relationships'];
        this._location = lead.data['location'];
    }

    public get attributes(): LeadAttributes{
        if(this._attributes == null){
            return null;
        }
        return this._attributes;
    }

    public get id(): string{
        return this._id;
    }

    public get type(): string{
        return this._type;
    }

    public get relationships(): LeadRelationship{
        return this._relationships;
    }

    public get location(): LeadLocation{
        return this._location;
    }

}