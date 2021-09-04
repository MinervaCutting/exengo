import { mim } from "../vendors/mim/data";
import { meliasitges} from "../vendors/melia_sitges/data";
import {
  group1arrival,
  group2arrival,
  disposaldinner6,
  disposalactivity7,
  disposaldinner7,
  departure8,
} from "./transfers";
import { useSelector } from "react-redux";
import { selectHotel } from "../features/HotelSlice";
import { aiguadolçbeachbar } from "../vendors/aiguadolç_beachbar/data";
import { scavengerhuntsitges } from "../vendors/scavenger_hunt_sitges/data";
import { mimskybar } from "../vendors/mim_sky_bar/data";
import { meetingroom } from "../vendors/meetingroom/data";
import { picnic } from "../vendors/picnic/data";
import { kayakexcursion } from "../vendors/kayak_excursion/data";
import { tabernadelport } from "../vendors/taberna_del_port/data";
import { trekking } from "../vendors/trekking/data";
import { ladaurada } from "../vendors/la_daurada/data";

export const useBudgetRows = () => {
  const hotel = useSelector(selectHotel);
  const budgetRows = [
    {
      event: "accommodation",
      hotelOptions: [mim, meliasitges],
      selected: hotel,
    },
    { event: "50 seater Bus at disposal (pick up the group at the airport, transfer to Aiguadolç beach bar and to the hotel after lunch", selected: group1arrival },
    { event: "Tapas Lunch at Aguadolç Beach Bar", selected: aiguadolçbeachbar },
    { event: "Oneway Transfer Airport to hotel MiM, 50-seater coach", selected: group2arrival },
    { event: "Scavengers Hunt Activity", selected: scavengerhuntsitges },
    { event: "Dinner at MiM's Skybar", selected: mimskybar },
    { event: "Meetings room rental and coffee break", selected: meetingroom },
    { event: "Lunch at PicNic restaurant", selected: picnic },
    { event: "Kayak excursion", selected: kayakexcursion },
    { event: "Dinner at Restaurant Taberna del Puerto", selected: tabernadelport },
    { event: "55 seater bus at disposal for dinner", selected: disposaldinner6 },
    { event: "55 seater bus at disposal for the activity and lunch", selected: disposalactivity7 },
    { event: "Trekking activity including packed lunch", selected: trekking },
    { event: "55 seater bus at disposal for dinner", selected: disposaldinner7 },
    { event: "Welcome + Dinner at La Daurada", selected: ladaurada },
    { event: "70 seater bus transfer from hotel MiM to Barcelona's Airport", selected: departure8 },

    
  
  
  
  ];

  return [budgetRows];
};
