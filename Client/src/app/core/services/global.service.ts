import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {

  constructor() { }

  massageHandler(data: any, is_error: boolean = false, message: any = 'Successful!'): massageHandler {
    return {
      "message": message,
      "is_error": is_error,
      "data": data
    };
  }

}

interface massageHandler {
  message: string;
  is_error: boolean;
  data: any;
}
