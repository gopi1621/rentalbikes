import { Injectable } from '@angular/core';
import { vehicle } from './vehicle';
import { of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

  export class VehicleService {
  vehicles: vehicle[] = [
    //cars
    {
      vehicleId: 1,
      vehicleName: "swift",
      vehicleCompany: "maruthi suzuki",
      vehiclePrice: 1200,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://tse3.mm.bing.net/th?id=OIP.jN7e8te0lQo-Bi9kp1sDOgHaEK&pid=Api&P=0&h=220",
      vehicleRating: 4.5,
    },
    {
      vehicleId: 2,
      vehicleName: "Thar",
      vehicleCompany: "Mahindra",
      vehiclePrice: 2500,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://images.livemint.com/img/2022/09/24/1600x900/Mahindrathar_1664005874494_1664005874760_1664005874760.jpg",
      vehicleRating: 4,
    },
    {
      vehicleId: 3,
      vehicleName: "Sonet",
      vehicleCompany: "KIA",
      vehiclePrice: 1600,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://tse4.mm.bing.net/th?id=OIP.9vY9gZ7jdu0Wrt-FWWHMDAHaEK&pid=Api&P=0&h=220",
      vehicleRating: 3.9,
    },
    {
      vehicleId: 4,
      vehicleName: "Baleno",
      vehicleCompany: "martuthi suzuki",
      vehiclePrice: 1200,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://cms.haymarketindia.net/model/uploads/modelimages/Maruti-Suzuki-Baleno-040320222001.jpg",
      vehicleRating: 4.6,
    },
    {
      vehicleId: 5,
      vehicleName: "Haarier",
      vehicleCompany: "Tata",
      vehiclePrice: 1600,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://tse1.mm.bing.net/th?id=OIP.-fzU50s-JRfXVYXdgXKG1QHaEK&pid=Api&P=0&h=220",
      vehicleRating: 5,
    },
    {
      vehicleId: 6,
      vehicleName: "BRV",
      vehicleCompany: "Honda",
      vehiclePrice: 3000,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "Disel",
      seatingCapacity: 5,
      vehicleType: "car",
      vehicleImage: "https://tse2.mm.bing.net/th?id=OIP.9WZzCU3kqpqRWZZN4L4wigHaEK&pid=Api&P=0&h=220",
      vehicleRating: 4.4,
    },
    //bikes
    {
      vehicleId: 7,
      vehicleName: "Acess 125",
      vehicleCompany: "suzuki",
      vehiclePrice: 300,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 1,
      vehicleType: "bike",
      vehicleImage: "https://bd.gaadicdn.com/processedimages/suzuki/suzuki-access-125/source/m_access-125_11540279833.jpg",
      vehicleRating: 4,
    },
    {
      vehicleId: 8,
      vehicleName: "r15",
      vehicleCompany: "yamaha",
      vehiclePrice: 600,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 1,
      vehicleType: "bike",
      vehicleImage: "https://tse3.mm.bing.net/th?id=OIP.JaWJsbQjszWiB3ObLo9ppwHaFu&pid=Api&P=0&h=220",
      vehicleRating: 4,
    },
    {
      vehicleId: 9,
      vehicleName: "Duke390",
      vehicleCompany: "ktm",
      vehiclePrice: 800,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 1,
      vehicleType: "bike",
      vehicleImage: "https://bd.gaadicdn.com/processedimages/ktm/ktm-duke-390/source/v_duke-390-std1528454016.jpg",
      vehicleRating: 4,
    },
    {
      vehicleId: 9,
      vehicleName: "Rc150",
      vehicleCompany: "ktm",
      vehiclePrice: 700,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 1,
      vehicleType: "bike",
      vehicleImage: "https://compare.pricesofindia.com/src/wallpapers/ktm/ktm-rc-150/KTM-RC-150-HD-Wallpapers-PricesOfIndia-2.jpg",
      vehicleRating: 4,
    },
    {
      vehicleId: 10,
      vehicleName: "Destine 125",
      vehicleCompany: "Hero",
      vehiclePrice: 200,
      availabilityTime: "9:00AM-6:00PM",
      fuelType: "pertol",
      seatingCapacity: 1,
      vehicleType: "bike",
      vehicleImage: "https://tse4.mm.bing.net/th?id=OIP.DTRphDyPeMoUAFfgzTJ61QAAAA&pid=Api&P=0&h=220",
      vehicleRating: 4.2,
    }




  ];

  getallvehicles() {
    return of(this.getallvehicles);
  }
  addvehicle(newvehicle: any) {
    this.vehicles.push(newvehicle);
    return "added";
  }
  getvehicleById(id: any) {
    return this.vehicles.find(vehicle => vehicle.vehicleId == id);
  }
  deletevehicleById(id:any) {
    let index = this.vehicles.findIndex(vehicle => vehicle.vehicleId == id);
  }
  getbikes() {
    return of(this.vehicles.filter(vehicle => vehicle.vehicleType == "bike"));
  }
  getcars() {
    return of(this.vehicles.filter(vehicle => vehicle.vehicleType == "car"));
  }
  updatevehicle(id: any, newvehicle: any) {
    let index = this.vehicles.findIndex(vehicle => vehicle.vehicleId == id);
    this.vehicles.splice(index, 1, newvehicle);
    return "updated"
  }
}


   