import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor() { }

  readonly majorGenre = ['Crime',
    'Comedy',
    'Drama',
    'Fantasy',
    'Kids',
    'Talk Show',
    'Game Show',
    'Reality Show',
    'Sci-Fi']

  readonly minorGenre = [
    'Original Series',
    'Original Film',
    'Original Non Fiction',
    'Original Docu Fiction',
    'Acquired Film Theatrical',
    'Acquired Film Digital',
    'Acquired Film Dubbed',
    'Acquired Web series'];

  readonly language = ['English', 'Hindi', 'Telugu'];

  readonly subMinorGenre = [' abc', 'def', 'ghi', 'jkl'];
  readonly genres = ['Web Film', 'Web Series'];



}
