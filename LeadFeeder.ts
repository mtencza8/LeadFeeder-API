import {Account} from "./Accounts"
import {Lead} from "./Leads"
import {Visit} from "./Visits"
import { Feed } from "./Feeds";




class LeadFeeder{
    
    private _apiKey: string;
    private _accountId: string;

    private _accountUrl: string = "https://api.leadfeeder.com/accounts";
    

    public constructor(apiKey: string, accountId: string){
        this._apiKey = apiKey;
        this._accountId = accountId;
    }
       
    /**
     * @param url: string - url to be requested
     * @returns any - response from the request
     * 
     * @description: This method is used to make requests to the LeadFeeder endpoints
     * 
     */
    
    private requestor(url: string): any{

        let headers = new Headers();
        headers.append("Authorization", "Token token=" + this._apiKey);
        headers.append("Content-Type", "application/json");

        let myInit = {
            method: "GET",
            headers: headers
        };

        let resp = fetch(url, myInit);
        return resp;
    }

    /**
     * 
     * @returns Account[]
     * 
     * Get a list of accounts under the Leadfeeder API key
     */


    public getAccounts(): Account[]{
        let url = this._accountUrl
        let resp = this.requestor(url);
        return resp.json().map((account: any) => new Account(account));
    }

    
    /**
     * @params id: string
     * @returns Account: Account
     * 
     * @description: Get all the detail of an account by its ID
     */

    public getAccountById(id: string){
        let url = "https://api.leadfeeder.com/v1/accounts"+id;
        let resp = this.requestor(url);
        return new Account(resp.json());
    }


    /**
     * @returns Feed[]
     * 
     * Lists all the custom feeds under the account
    */

    public getCustomFeeds(): Feed[]{
        let url = this._accountUrl + `/${this._accountId}/custom_feeds`;
        let resp = this.requestor(url);
        return resp.json().map((feed: any) => new Feed(feed));
    }


    /**
     * 
     * @param feedId string - ID of the custom feed
     * @returns Feed: Feed
     * 
     * @description: Get a custom feed by its Leadfeeder ID
     */

    public getCustomFeedById(feedId: string): Feed{
        let url = this._accountUrl + `/${this._accountId}/custom_feeds/${feedId}`;
        let resp = this.requestor(url);
        return new Feed(resp.json());
    }

    public getLeads(startDate: string, endDate: string): Lead[]{
        let url = this._accountUrl + `/${this._accountId}/leads?start_date=${startDate}&end_date=${endDate}`;
        let resp = this.requestor(url);
        return resp.json().map((lead: any) => new Lead(lead));
    }

    /**
     * 
     * @param startDate: string 
     * @param endDate: string
     * @param feedId: string
     * @returns Lead[]
     * 
     * @description: Get leads by feed id within a certain timeframe
     */

    public getLeadsbyFeedId(startDate: string, endDate: string, feedId: string): Lead[]{ 
        let url = this._accountUrl + `/${this._accountId}/custom_feeds/${feedId}/leads?start_date=${startDate}&end_date=${endDate}`;
        let resp = this.requestor(url);
        return resp.json().map((lead: any) => new Lead(lead));
    }



    public getLeadById(leadId: string): Lead{
        let url = this._accountUrl + `/${this._accountId}/leads/${leadId}`;
        let resp = this.requestor(url);
        return new Lead(resp.json());
    }

    public getVisits(startDate: string, endDate: string): Visit[]{
        let url = this._accountUrl + `/${this._accountId}/visits?start_date=${startDate}&end_date=${endDate}`;
        let resp = this.requestor(url); 
        return resp.json().map((visit: any) => new Visit(visit));
    }



    public getVisitsById(leadId: string, startDate: string, endDate: string): Visit[]{
        let url = this._accountUrl + `/${this._accountId}/leads/${leadId}/visits?start_date=${startDate}&end_date=${endDate}`;
        let resp = this.requestor(url);
        return resp.json().map((visit: any) => new Visit(visit));
    }

}

    




    
