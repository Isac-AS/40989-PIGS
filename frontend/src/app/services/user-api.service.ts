import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http'
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs";
import { API_URL } from "../env";
import { User } from "../models/user.model";
//import * as shajs from 'sha.js';

@Injectable()
export class UserApiService {
    constructor(private http: HttpClient) {}

    // GET list of users
    getUsers(): Observable<User[]> {
        return new Observable()
        return this.http.get<User[]>(`${API_URL}/users`).pipe(
            catchError(error => {
                return throwError(() => new Error(error.message))
            }))
    }

    // POST to get answer on whether the password is correct
    verifyPassword(mail: string, password: string): Observable<any>{
        return new Observable()
        return this.http.post<string>(`${API_URL}/users/login`, {'mail': mail, 'password': password})
    }

    // POST action
    addUser(user: User): Observable<any> {
        return new Observable()
        return this.http.post(`${API_URL}/users`, user);
    }
/*
    hash(string: string) {
        return shajs('sha256').update(string).digest('hex')
    }*/
}
