/**
 * Created by MZ - cdkmoza850 on 12/30/2019.
 */


export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Comment = {
  __typename?: 'Comment',
  id: Scalars['ID'],
  body: Scalars['String'],
  created_at: Scalars['String'],
  updated_at: Scalars['String'],
  post: Post,
};

export type Post = {
  __typename?: 'Post',
  id: Scalars['ID'],
  title: Scalars['String'],
  body: Scalars['String'],
  created_at: Scalars['String'],
  updated_at: Scalars['String'],
  user: User,
  comments: Array<Comment>,
};

export type User = {
  __typename?: 'User',
  id: Scalars['ID'],
  name: Scalars['String'],
  email: Scalars['String'],
  created_at: Scalars['String'],
  updated_at: Scalars['String'],
  posts: Array<Post>,
};
