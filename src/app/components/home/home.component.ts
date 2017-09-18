import { Component } from '@angular/core';

@Component({
  selector: 'home-content',
  templateUrl: './app/components/home/home.component.html',
  styleUrls: ['./app/components/home/home.component.css']
})
export class HomeComponent {


// var myIndex = 0;


carousel() {
  let myIndex: number = 0;
  console.log("test");
    // let i: number;
    let slides = document.getElementsByClassName("mySlides");
    console.log(slides);

    for (let slide in slides) {
      console.log(slide);
      // slide.style.display = "none";
    }
    // for (i = 0; i < x.length; i++) {
    //    x[i].style.display = "none";
    // }
    // myIndex++;
    // if (myIndex > x.length) {myIndex = 1}
    // x[myIndex-1].style.display = "block";
    // setTimeout(carousel, 9000);
}
carousel();
}
