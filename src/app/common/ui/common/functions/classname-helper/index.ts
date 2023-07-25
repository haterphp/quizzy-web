import { Injectable } from "@angular/core";

class ClassnameEntity {
  private _values: string[]

  constructor() {
    this._values = []
  }

  add(className: string): ClassnameEntity {
    this._values.push(className)
    return this
  }

  resolve(): string {
    return this._values.join(' ')
  }
}

@Injectable({ providedIn: 'root' })
export class ClassnameHelper {

  public make(): ClassnameEntity {
    return new ClassnameEntity();
  }

}
