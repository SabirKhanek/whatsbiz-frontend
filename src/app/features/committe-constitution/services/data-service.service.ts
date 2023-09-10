import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  private sharedData: any;
  private sharedApprove: any;


  constructor() { }

  setSharedData(data: any) {
    this.sharedData = data;
  }

  getSharedData(): any {
    return this.sharedData;
  }

  setApproveData(data: any) {
    this.sharedApprove = data;
  }

  getApproveData(): any {
    return this.sharedApprove;
  }
}
