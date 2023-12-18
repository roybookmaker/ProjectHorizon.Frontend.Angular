export interface CommandResult {
    IsSuccessful: boolean;
    Message: string;
    Type: string;
    ErrorCode: number;
    Payload: any;
    Errors?: any;
    title?: string;
    DocumentId?: string;
    Content?: string;
    FileName?: string;
    ContentType?: string;
  }
  
  export interface QueryResult<T> {
    IsSuccessful: boolean;
    Message: string;
    Type: string;
    ErrorCode: number;
    Payload: T;
  }
  
  export interface EditCaseSummaryCommandResult extends CommandResult {
    status?: number;
    title?: string;
    traceId?: string;
  }
  
  export interface ActionResult extends CommandResult {
    Payload: PayloadResult;
  }
  
  export interface PayloadResult {
    Result: any;
    Id: number;
    Exception: string;
    Status: number;
    IsCanceled: boolean;
    IsCompleted: boolean;
    IsCompletedSuccessfully: boolean;
    CreationOptions: number;
    AsyncState: string | number | boolean;
    IsFaulted: boolean;
  }
  
  export interface CommandResultGeneric<T> extends CommandResult {
    Payload: T;
  }
  
  export interface PayloadGeneric<T> {
    Data: T,
    TotalRecords: number
  }
  