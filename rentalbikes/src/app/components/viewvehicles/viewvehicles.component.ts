import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehicleService } from '../../services/vehicles.service';

@Component({
  selector: 'app-viewvehicles',
  templateUrl: './viewvehicles.component.html',
  styleUrl: './viewvehicles.component.css'
})
export class ViewvehiclesComponent {
  vid:any;
  vehicle:any;
  constructor(private route:ActivatedRoute,private service:VehicleService){}
  ngOnInit()
  {
    this.vid=this.route.snapshot.params['id'];
    console.log(this.vid);
    if(this.vid!==null)
    {
      this.vehicle=this.service.deletevehicleById(this.vid);
    }

  }
  
  



}
