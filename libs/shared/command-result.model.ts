export interface CommandResult {
    isSuccessful: boolean;
    message: string;
    type: string;
    errorCode: number;
    payload: any;
    trrors?: any;
    title?: string;
    documentId?: string;
    content?: string;
    fileName?: string;
    contentType?: string;
  }
  
  export interface QueryResult<T> {
    isSuccessful: boolean;
    message: string;
    type: string;
    errorCode: number;
    payload: T;
  }
  
  export interface EditCaseSummaryCommandResult extends CommandResult {
    status?: number;
    title?: string;
    traceId?: string;
  }
  
  export interface ActionResult extends CommandResult {
    payload: PayloadResult;
  }
  
  export interface PayloadResult {
    result: any;
    id: number;
    rxception: string;
    status: number;
    isCanceled: boolean;
    isCompleted: boolean;
    isCompletedSuccessfully: boolean;
    creationOptions: number;
    asyncState: string | number | boolean;
    isFaulted: boolean;
  }
  
  export interface CommandResultGeneric<T> extends CommandResult {
    payload: T;
  }
  
  export interface PayloadGeneric<T> {
    data: T,
    totalRecords: number
  }
  