import {Component, OnInit} from '@angular/core';



@Component({
  selector: 'app-countries-manage-card',
  template: `
    <div class="bg-white shadow-lg rounded-lg overflow-hidden">
      <div class="bg-gray-800 h-40 flex justify-center items-center">
        <h2 class="text-xl text-white font-bold uppercase">{{ title }}</h2>
      </div>
      <div class="px-4 py-2">
        <img [src]="imageUrl" alt="Flag of {{ title }}" class="w-full object-cover h-48">
        <div class="mt-4">
          <p><span class="font-bold">Population:</span> {{ population }}</p>
          <p><span class="font-bold">Capital:</span> {{ capital }}</p>
          <p><span class="font-bold">Currency:</span> {{ currency }}</p>
        </div>
      </div>
    </div>
  `,
})
export class CountriesManageCardComponent implements  OnInit{
   title!: string;
   imageUrl!: string;
   population!: string;
   capital!: string;
   currency!: string;



  ngOnInit(): void {

    this.title = 'Country';
    this.imageUrl = 'https://via.placeholder.com/500x300?text=Flag+of+Country';
    this.population = '10 million';
    this.capital = 'City';
    this.currency = 'Dollar';
  }
}
