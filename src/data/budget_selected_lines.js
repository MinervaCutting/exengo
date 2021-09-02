import { mim } from "../vendors/mim/data";
import { bcnlapedrera } from "../vendors/la_pedrera/data";
import { meliasitges} from "../vendors/melia_sitges/data";
import { fabricamoritz } from "../vendors/fabrica_moritz/data";
import { elarenal } from "../vendors/el_arenal/data";
import { corcaliu } from "../vendors/cor_caliu/data";
import { nuria } from "../vendors/nuria/data";
import { elglop } from "../vendors/el_glop/data";
import { monchos } from "../vendors/marina_monchos/data";
import { mana75 } from "../vendors/mana_75/data";
import { tapastour } from "../vendors/tapas_tour/data";
import { walkingtour } from "../vendors/walking_tour/data";
import {
  airport29,
  disposal5h29,
  disposal6h29,
  airport29dep,
} from "./transfers";
import { beertasting, footballtickets } from "./activities";
import { fcbexperience } from "../vendors/fcbcn_experience/data";
import { useSelector } from "react-redux";
import {
  selectDay1Dinner,
  selectDay2Dinner,
} from "../features/RestaurantSlice";
import { selectActivity1 } from "../features/ActivitySlice";
import { selectHotel } from "../features/HotelSlice";

export const useBudgetRows = () => {
  const hotel = useSelector(selectHotel);
  const day1Dinner = useSelector(selectDay1Dinner);
  const day2Dinner = useSelector(selectDay2Dinner);
  const activity1 = useSelector(selectActivity1);
  const budgetRows = [
    {
      event: "accommodation",
      hotelOptions: [mim, meliasitges],
      selected: hotel,
    },
    { event: "29-seater Airport Transfer to Hotel", selected: airport29 },
    {
      event: "activity1",
      options: [tapastour, walkingtour],
      selected: activity1,
    },
    { event: "Fabrica Moritz beer tasting", selected: beertasting },
    { event: "Dinner at Fabrica Moritz", selected: fabricamoritz },
    {
      event: "29-Seater bus at disposal for up to 6hours",
      selected: disposal6h29,
    },
    {
      event: "FCBarcelona Experience Museum & Stadium",
      selected: fcbexperience,
    },
    {
      event: "Lunch at the Beach - El Arenal",
      selected: elarenal,
    },
    { event: "day1Dinner", options: [nuria, elglop], selected: day1Dinner },
    { event: "Lunch at Cor Caliu", selected: corcaliu },
    {
      event: "Bus at disposal to Stadium and Dinner",
      selected: disposal5h29,
    },
    {
      event: "Football tickets 3rd Stand Central",
      selected: footballtickets,
    },
    { event: "day2Dinner", options: [monchos, mana75], selected: day2Dinner },
    { event: "Transfer to Airport", selected: airport29dep },
  ];

  return [budgetRows];
};
