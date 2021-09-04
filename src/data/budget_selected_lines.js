import { mim } from "../vendors/mim/data";
import { meliasitges} from "../vendors/melia_sitges/data";
import {
  airport29,
  disposal5h29,
  disposal6h29,
  airport29dep,
} from "./transfers";
import { useSelector } from "react-redux";
import { selectHotel } from "../features/HotelSlice";
import { aiguadolçbeachbar } from "../vendors/aiguadolç_beachbar/data";
import { scavengerhuntsitges } from "../vendors/scavenger_hunt_sitges/data";
import { mimskybar } from "../vendors/mim_sky_bar/data";
import { meetingroom } from "../vendors/meetingroom/data";
import { picnic } from "../vendors/picnic/data";
import { kayakexcursion } from "../vendors/kayak_excursion/data";

export const useBudgetRows = () => {
  const hotel = useSelector(selectHotel);
  const budgetRows = [
    {
      event: "accommodation",
      hotelOptions: [mim, meliasitges],
      selected: hotel,
    },
    { event: "50-seater Airport Transfer to Hotel", selected: airport29 },
    { event: "Tapas Lunch at Aguadolç Beach Bar", selected: aiguadolçbeachbar },
    { event: "Scavengers Hunt Activity", selected: scavengerhuntsitges },
    { event: "Dinner at MiM's Skybar", selected: mimskybar },
    { event: "Meetings room rental and coffee break", selected: meetingroom },
    { event: "Lunch at PicNic restaurant", selected: picnic },
    { event: "Kayak excursion", selected: kayakexcursion},
  
  
  ];

  return [budgetRows];
};
