interface Trip {
  _id: string;
  type: string;
  price: number;
  description: string;
  city: string;
  destination: string;
  date: string;
  time: string;
  arrivalDate: string;
  arrivalHour: string;
}

interface Trip_Avaible extends Trip {
  availableSeats: number;
}
