import { MyServiceService } from './my-service.service';
import { ChangeDetectorRef, Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, Subject } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: MyServiceService) {
    this.majorGenre = this.myService.majorGenre;
    this.minorGenre = this.myService.minorGenre;
    this.language = this.myService.language;
    this.subMinorGenre = this.myService.subMinorGenre;
    this.genres = this.myService.genres;
  }

  /** Declarations and initializing variables */
  selected = ''
  majorGenre;
  language;
  genres;
  minorGenre;
  subMinorGenre
  genreType = ''

  minorSelection = '';
  majorSelection = ''
  subSelection = ''

  filePicked = false
  biblefileNames: string[] = []
  screenfileNames: string[] = []
  screenfileAr: File[] = []
  type = '';
  genre = 'webfilm';

  biblefileAr: File[] = []
  movieForm!: FormGroup;

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


  }

  changeGenre(eve: string) {
    /** returns the major genre type */
    console.log(eve);
    if (eve === 'Web Film') {
      this.genreType = 'webfilm'
    }
    else if (eve === 'Web Series') {
      this.genreType = 'series'
    }
  }

  get f() {
    /**returns the form credentials */
    return this.movieForm.controls;
  }


  submitForm(form: []) {
    //called when submiting the form
    console.log(form);

    /**contains the file information for both */
    // console.log(this.biblefileAr);
    // console.log(this.screenfileAr);

  }


  addFile(type: string) {
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
      const types = [
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

      if (this.type === 'bible') {
        if (this.biblefileNames.length > 1) {
          alert('You cannot upload more than 2 files at once');
          return
        }
        this.biblefileAr.push(file[io]);
        this.biblefileNames.push(file[io].name)
      }
      else if (this.type === 'screen') {
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
