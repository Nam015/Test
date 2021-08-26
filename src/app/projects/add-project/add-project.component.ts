import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { MyServiceService } from 'src/app/my-service.service';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  constructor(private fb: FormBuilder, private myService: MyServiceService,
    private domSanitizer: DomSanitizer) {
    this.majorGenre = this.myService.majorGenre;
    this.minorGenre = this.myService.minorGenre;
    this.language = this.myService.language;
    this.subMinorGenre = this.myService.subMinorGenre;
    this.genres = this.myService.genres;
  }

  /** Declarations and initializing variables */
  selected = ''
  majorGenre;
  ifrm = document.getElementById('ifrm');
  language;
  genres;
  minorGenre;
  subMinorGenre
  genreType = ''

  minorSelection = '';
  majorSelection = ''
  previewUrl: any;
  subSelection = ''

  fileNameArr: string[] = []

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
    // console.log(eve);
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


  submitForm(form: FormGroup) {
    //called when submiting the form
    // console.log(form);

    /**contains the file information for both */
    // console.log(this.biblefileAr);
    // this.pdfSource = this.biblefileAr[0].arrayBuffer;
    // console.log(this.screenfileAr);

  }


  addFile(type: string) {
    /** called each when a file is added */
    // console.log(type);
    this.type = type;
    let element: HTMLElement;
    if (type === 'bible') {
      element = document.getElementById("myFile1") as HTMLElement;
      // console.log(element);
      element.click();
    }
    else if (type === 'screen') {
      let element: HTMLElement = document.getElementById("myFile2") as HTMLElement;
      // console.log(element);
      element.click();
    }
  }
  tempArray!: File[];

  pdfOpened = false;

  removeFile(type: string, pdfName: string) {
    // console.log('in remove');
    // console.log(type);
    // console.log(pdfName);


    // console.log(this.biblefileAr.values);
    // console.log(this.screenfileAr);
    // console.log(JSON.parse(JSON.stringify(this.biblefileAr[0])));


    if (type === 'bible') {
      this.tempArray = this.biblefileAr;
      this.fileNameArr = this.biblefileNames;
    }
    else if (type === 'screen') {
      this.tempArray = this.screenfileAr;
      this.fileNameArr = this.screenfileNames;

    }
    // console.log(this.tempArray);
    for (let i = 0; i < this.tempArray.length; i++) {
      if (pdfName === this.tempArray[i].name) {
        this.tempArray.splice(i, 1);
        // console.log(this.biblefileNames);

        for (let j = 0; j < this.fileNameArr.length; j++) {
          if (pdfName === this.fileNameArr[j]) {
            this.fileNameArr.splice(j, 1)
          }
        }
        // console.log(this.biblefileNames);

      }
    }
    // console.log(this.tempArray);
  }


  openPdf(type: string, pdfString: string) {
    // console.log('in open pdf');
    this.pdfOpened = false;

    if (type === 'bible') {
      this.tempArray = this.biblefileAr;
    }
    else if (type === 'screen') {
      this.tempArray = this.screenfileAr;
    }
    for (let i = 0; i < this.tempArray.length; i++) {
      // console.log(pdfString);
      // console.log(this.tempArray[i].name);
      if (pdfString === this.tempArray[i].name) {
        var reader = new FileReader();
        reader.readAsDataURL(this.tempArray[i]);
        reader.onload = (_event) => {
          // console.log(_event);
          // console.log(reader);

          this.previewUrl = (this.domSanitizer.bypassSecurityTrustResourceUrl(JSON.parse(JSON.stringify(reader.result))) as any).changingThisBreaksApplicationSecurity;
          // console.log(this.previewUrl);


          document.getElementById('ifrm')!.setAttribute("src", this.previewUrl);

          // console.log(reader.result);
        }
        this.pdfOpened = true
        return
      }
    }
  }

  canDeleteNow = false

  onFilePicked(event: Event) {
    // console.log(event);

    var file = (event.target as HTMLInputElement).files;
    // console.log(file?.[0])


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

      this.canDeleteNow = true;

      // console.log(this.biblefileAr);
      // console.log(this.screenfileAr);
    }
  }
}
