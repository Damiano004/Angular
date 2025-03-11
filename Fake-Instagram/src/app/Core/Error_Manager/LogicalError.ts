export class LogicalError implements Error{
  name = "LogicalError";
  message: string;
  stack?: string | undefined;
  cause?: unknown;

  constructor(message: string, cause: unknown){
    this.message = message;
    this.cause = cause;
  }

  toString(){
    return  this.name + ": " + this.message + "\n\n Cause: "+this.cause
  }
}