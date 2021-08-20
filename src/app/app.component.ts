import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  /** Declarations and initializing variables */
  selected = ''
  genres = ['Web Film', 'Web Series'];

  genreType = 'uhgi'
  movieForm = new FormGroup({
    filmname: new FormControl(),
    episode: new FormControl('0'),
    logline: new FormControl(),
    duration: new FormControl(),
    major: new FormControl(),
    minor: new FormControl(),
    sub: new FormControl(),
    seriesname: new FormControl(),
    genre: new FormControl()

  });
  minorSelection = '';
  majorSelection = ''
  subSelection = ''

  majorGenre = ['Crime',
    'Comedy',
    'Drama',
    'Fantasy',
    'Kids',
    'Talk Show',
    'Game Show',
    'Reality Show',
    'Sci-Fi']
  language = ['English', 'Hindi', 'Telugu']
  minorGenre = [
    'Original Series',
    'Original Film',
    'Original Non Fiction',
    'Original Docu Fiction',
    'Acquired Film Theatrical',
    'Acquired Film Digital',
    'Acquired Film Dubbed',
    'Acquired Web series'];
  subMinorGenre = [' abc', 'def', 'ghi', 'jkl']

  filePicked = false
  biblefileNames: string[] = []
  screenfileNames: string[] = []
  screenfileAr: File[] = []
  type = '';
  genre = 'webfilm';

  biblefileAr: File[] = []

  ngOnInit() {

    /**Validators for reactive forms*/
    this.movieForm = this.fb.group({
      filmname: ['', Validators.required],
      episode: ['', Validators.required],
      logline: ['', Validators.required],
      duration: ['', Validators.required],
      major: ['', Validators.required],
      minor: ['', Validators.required],
      sub: ['', Validators.required],
      seriesname: ['', Validators.required],
      genre: ['', Validators.required],
      checkbox: ['', Validators.required],
    })

    // console.log(this.movieForm.get('filmname'))

  }

  changeGenre(eve: any) {
    /** returns the major genre type */
    console.log(eve);
    if (eve == 'Web Film') {
      this.genreType = 'webfilm'
    }
    else if (eve == 'Web Series') {
      this.genreType = 'series'
    }
  }

  get f() {
    /**returns the form credentials */
    return this.movieForm.controls;
  }


  submitForm(form: any) {
    //called when submiting the form
    console.log(form);

    /**contains the file information for both */
    // console.log(this.biblefileAr);
    // console.log(this.screenfileAr);

  }


  addFile(type: any) {
    /** called each when a file is added */
    // console.log(type);
    this.type = type;
    let element: HTMLElement = document.getElementById("myFile1") as HTMLElement;
    element.click();
  }

  onFilePicked(event: Event) {
    console.log(event);

    var file = (event.target as HTMLInputElement).files;
    console.log(file?.[0])


    if (file) {
      // extensions for documents support
      let types = [
        ".pdf",
        ".doc",
        ".docx",
        ".docm",
        ".xlsx",
        ".xls",
        ".xlsb",
        ".xlsm",
        ".ppt",
        ".pptx",
        ".pptm",
        ".txt",
      ];
      var io = 0
      // console.log(file[0].arrayBuffer.toString());
      // console.log(file[0].name);


      //checking the size of file
      if (file[io].size / 1048576 > 5) {
        alert("File size cannot exceed 5MB");
        return;
      }

      //getting the format
      var bl = file[io].name.slice(file[io].name.lastIndexOf("."));

      if (!types.includes(bl)) {
        alert('Format Not supported')
      }

      if (this.type == 'bible') {
        if (this.biblefileNames.length > 1) {
          alert('You cannot upload more than 2 files at once');
          return
        }
        this.biblefileAr.push(file[io]);
        this.biblefileNames.push(file[io].name)
      }
      else if (this.type == 'screen') {
        if (this.screenfileNames.length > 1) {
          alert('You cannot upload more than 2 files at once');
          return
        }
        this.screenfileAr.push(file[io]);
        this.screenfileNames.push(file[io].name)
      }

      // console.log(this.biblefileNames.length);
      // console.log(this.screenfileNames.length);
    }
  }

}
