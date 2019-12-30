import {Component, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {Observable} from 'rxjs';


import {ApolloQueryResult} from 'apollo-client';
import {CommentModel} from './models/comment.model';

export interface ResponseModel {
  comments: CommentModel[]
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent implements OnInit {
  data$: Observable<ApolloQueryResult<ResponseModel>>;


  constructor(private app: AppService) {

  }

  ngOnInit(): void {
    this.data$ = this.app.getComments<ResponseModel>(`{
          comments {
            body
            post {
              title
              user {
                name
                email
                id
              }
            }
          }
        }`
    );
  }
}
