import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'post',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
// const items : WeatherArray[] {

// }
export class PostComponent{
  @Output() fetch = new EventEmitter<string>();

	http = inject(HttpClient); //Fetching in ....component.ts
	posts : any = [];
  response : any = [];
  weather : any = [];
  inputField : string = "";

	fetchPosts() {
		this.http.get("https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=" + this.inputField + "&appid=")
		.subscribe((posts : any) => {
      this.inputField = "";
      this.weather = [];
      for(let i = 0; i <= 40; i++) {
        let str : string = posts.list[i].dt_txt;
        let noon : boolean = str.includes("12:00:00");
        if (noon) { 
          this.response = [];
          this.response.push(posts);
          this.weather.push(posts.list[i]);
        }
      }
		});
	} 
}

