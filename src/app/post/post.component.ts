import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { WeatherArray } from '../../shared/modules/weatherArray';

@Component({
  selector: 'post',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.scss'
})
export class PostComponent{
  @Output() fetch = new EventEmitter<string>();

	http = inject(HttpClient); //Fetching in ....component.ts
	posts : any = [];
  inputField = "";
	fetchPosts() {
		this.http.get("https://api.openweathermap.org/data/2.5/forecast?&units=metric&q=" + this.inputField + "&appid=")
		.subscribe((posts : any) => {
			console.log(posts);
      this.inputField = "";
		});
	} 
}

