class VisitAttributes{

    private readonly _source : string | null;
    private readonly _medium : string | null;
    private readonly _campaign : string | null;
    private readonly _referringUrl : string | null;
    private readonly _countryCode : string | null;
    private readonly _pageDepth : number | null;
    private readonly _visitRoute : VisitRoute[];
    private readonly _keyboard : string | null;
    private readonly _queryTerm : string | null;
    private readonly _visitLength : number | null;
    private readonly _startedAt: Date | null;
    private readonly _date: Date | null;
    private readonly _hour: number | null;
    private readonly _leadId: string | null;
    private readonly _ifClientId: string | null;
    private readonly _googleClientIds: string[] | null;
    private readonly _adobeCookies: string[] | null;
    private readonly _deviceType: string | null;


    public constructor(visitAttributes: any){
        this._source = visitAttributes['source'];
        this._medium = visitAttributes['medium'];
        this._campaign = visitAttributes['campaign'];
        this._referringUrl = visitAttributes['referring_url'];
        this._countryCode = visitAttributes['country_code'];
        this._pageDepth = visitAttributes['page_depth'];
        this._keyboard = visitAttributes['keyboard'];
        this._queryTerm = visitAttributes['query_term'];
        this._visitLength = visitAttributes['visit_length'];
        this._startedAt = visitAttributes['started_at'];
        this._date = visitAttributes['date'];
        this._hour = visitAttributes['hour'];
        this._leadId = visitAttributes['lead_id'];
        this._ifClientId = visitAttributes['if_client_id'];
        this._googleClientIds = visitAttributes['google_client_ids'];
        this._adobeCookies = visitAttributes['adobe_cookies'];
        this._deviceType = visitAttributes['device_type'];
        this._visitRoute.forEach(item => 
            this._visitRoute.push(new VisitRoute(item))
        );


    }

    public get source(): string | null{
        return this._source;
    }

    public get medium(): string | null{
        return this._medium;
    }

    public get campaign(): string | null{
        return this._campaign;
    }

    public get referringUrl(): string | null{
        return this._referringUrl;
    }

    public get countryCode(): string | null{
        return this._countryCode;
    }

    public get pageDepth(): number | null{
        return this._pageDepth;
    }

    public get visitRoute(): VisitRoute[] | null{
        return this._visitRoute;
    }

    public get keyboard(): string | null{
        return this._keyboard;
    }

    public get queryTerm(): string | null{
        return this._queryTerm;
    }

    public get visitLength(): number | null{
        return this._visitLength;
    }

    public get startedAt(): Date | null{
        return this._startedAt;
    }

    public get date(): Date | null{
        return this._date;
    }

    public get hour(): number | null{
        return this._hour;
    }

    public get leadId(): string | null{
        return this._leadId;
    }

    public get ifClientId(): string | null{
        return this._ifClientId;
    }

    public get googleClientIds(): string[] | null{
        return this._googleClientIds;
    }

    public get adobeCookies(): string[] | null{
        return this._adobeCookies;
    }

    public get deviveType(): string | null{
        return this._deviceType;
    }

 

    

}

class VisitRoute{

    private readonly _hostname: string | null;
    private readonly _pagePath: string | null;
    private readonly _previousPagePath: string | null;
    private readonly _timeOnPage: number | null;
    private readonly _pageTitle: string | null;
    private readonly _displayPageName: string | null;

    public constructor(visitRoute: any){
        this._hostname = visitRoute['hostname'];
        this._pagePath = visitRoute['page_path'];
        this._previousPagePath = visitRoute['previous_page_path'];
        this._timeOnPage = visitRoute['time_on_page'];
        this._pageTitle = visitRoute['page_title'];
        this._displayPageName = visitRoute['display_page_name'];
    }

    public get hostname(): string | null{   
        return this._hostname;
    }

    public get pagePath(): string | null{
        return this._pagePath;
    }

    public get previousPagePath(): string | null{
        return this._previousPagePath;
    }

    public get timeOnPage(): number | null{
        return this._timeOnPage;
    }

    public get pageTitle(): string | null{
        return this._pageTitle;
    }

    public get displayPageName(): string | null{
        return this._displayPageName;
    }



}


class VisitLocation{

    private readonly _id: string;
    private readonly _type: string;
    private readonly _attributes: VisitLocationAttributes;

    public constructor(visitLocation: any){
        this._id = visitLocation['id'];
        this._type = visitLocation['type'];
        this._attributes = new VisitLocationAttributes(visitLocation['attributes']);
    }

    public get id(): string{
        return this._id;
    }

    public get type(): string{
        return this._type;
    }

    public get attributes(): VisitLocationAttributes{
        return this._attributes;
    }


}



class VisitLocationAttributes{

    private readonly _country: string | null;
    private readonly _countryCode: string | null;
    private readonly _region: string | null;
    private readonly _city: string | null;
    private readonly _stateCode: number | null;

    public constructor(visitLocation: any){
        this._country = visitLocation['country'];
        this._countryCode = visitLocation['country_code'];
        this._region = visitLocation['region'];
        this._city = visitLocation['city'];
        this._stateCode = visitLocation['state_code'];
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

    public get stateCode(): number | null{
        return this._stateCode;
    }

    
}

export class Visit{

    private readonly _id: string;
    private readonly _type: string;
    private readonly _attributes: VisitAttributes;
    private readonly _locations: VisitLocation | null;
   

    public constructor(visit: any){
        this._id = visit.data['id'];
        this._type = visit.data['type'];
        this._attributes = new VisitAttributes(visit.data['attributes']);
        this._locations = new VisitLocation(visit["included"]);
    }

    public get id(): string{
        return this._id;
    }

    public get type(): string{
        return this._type;
    }

    public get attributes(): VisitAttributes{
        return this._attributes;
    }

    public get relationships(): VisitLocation | null{
        return this._locations;
    }




}   

