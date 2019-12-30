/**
 * Created by MZ - cdkmoza850 on 12/30/2019.
 */
import {Injectable} from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import {User} from './types/user.type';
import {ApolloQueryResult} from 'apollo-client';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private apollo: Apollo) {
  }

  getComments<T>(model: string): Observable<ApolloQueryResult<T>> {
    return this.apollo
    .watchQuery<T>({
      query: gql`${model}`,

    }).valueChanges;
  }
}
