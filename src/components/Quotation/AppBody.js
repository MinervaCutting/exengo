import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import VendorOptionsTab from "../../utils/TabPanel";
import MiM from "../../vendors/mim/MiM";
import ScavengersHuntSitges from "../../vendors/scavenger_hunt_sitges/ScavengersHuntSitges";
import Budget from "../Budget/Budget";
import AiguadolçBeachbar from "../../vendors/aiguadolç_beachbar/AiguadolçBeachbar";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Footer from "../StickyFooter/Footer";
import MeliaSitges from "../../vendors/melia_sitges/MeliaSitges";
import MimSkyBar from "../../vendors/mim_sky_bar/MimSkyBar";
import MeetingRoom from "../../vendors/meetingroom/MeetingRoom";
import Picnic from "../../vendors/picnic/Picnic";
import KayakExcursion from "../../vendors/kayak_excursion/KayakExcursion";



export default function AppBody() {
  const classes = useStyles();
  const budgetRef = useRef();

  const pageStyle = `
  @media all {
    .page-break {
      display: none;
    }
  }
  
  @media print {
    html, body {
      height: initial !important;
      overflow: auto !important;
      -webkit-print-color-adjust: exact;
    }
  }
  
  @media print {
    .page-break {
      margin-top: 1rem;
      display: block;
      page-break-before: auto;
    }
  }
  
  @page {
    size: landscape;
    margin: 20mm;
   
  }
`;

  return (
    <Paper elevation={2} className={classes.bodyContainer}>
      <Typography variant='h4' gutterBottom>
        Quotation for the group <strong>Exengo</strong>
      </Typography>
      <Typography variant='h6' gutterBottom>
        Cutting Edge Events - September 3rd, 2021
      </Typography>

      <Typography variant='h6' gutterBottom>
        Dear <strong>Frowald</strong>. We have prepared this offer with your group
        in mind. We have designed a program that will help your group have a
        terrific time in Sitges. 
      </Typography>

      <Typography variant='h6' gutterBottom>
      Our guests will be able to enjoy the beach, the shopping areas in the centre of the village, located in the narrow streets, beautiful and full of history, and the nightlife of this small but very active village.
      </Typography>

      <Typography variant='h4' gutterBottom id='accommodation'>
        <strong>Accommodation</strong>
      </Typography>
      <VendorOptionsTab name1='MiM' name2='Melià Sitges'>
        <MiM />
        <MeliaSitges />
      </VendorOptionsTab>
      <Typography variant='h4' gutterBottom id='day_one'>
        <strong>Thursday, May 5th - Arrival Day</strong>
      </Typography>
      <Typography variant='h6' paragraph>
        First group of 25 guests will arrive in Barcelona's Airport at 11.15h, so we calculate that they will be in Sitges at 12.30h. They will have lunch at  <strong>Aiguadolç Beachbar</strong>, while the bus is waiting for them with the luggage inside.
      </Typography>
      <Typography variant='h4' gutterBottom id='day_one_1'>
        Aiguadolç Beach Bar
      </Typography>
       <AiguadolçBeachbar />
      <Typography variant='h6' paragraph>
        Between 14.30h and 15.00h guests from the first group will arrive from the restaurant and they will do the check-ing. The Second group will arrive in Barcelona's Airport at 13.50h, so we calculate that they will be at the hotel at 15.00h to do the check-in too.
      </Typography>
      <Typography variant='h6' paragraph>
        After check-in, our guests will have free time to relax.
        Then, at 16.30h we propose them an activity that will allow them to know Sitges and have a very funny time. 
      </Typography>
      <Typography variant='h4' gutterBottom id='day_one_2'>
        Rally gimkhana scavenger hunt in Sitges
      </Typography>
      <ScavengersHuntSitges />

      <Typography variant='h6' paragraph>
        The activity will end at the hotel, They will have a few minutes to refresh and then they will go to the Skybar at the 7th floor to enjoy a welcome drink and a very nice dinner.
      </Typography>
      <Typography variant='h4' gutterBottom id='day_one_3'>
       MiM Skybar
      </Typography>
      <MimSkyBar />
    
      <Typography variant='h4' gutterBottom id='day_two'>
        <strong>Friday, May 6th </strong>
      </Typography>
      <Typography variant='h4' gutterBottom id='day_two_1'>
        Meeting
      </Typography>
      <MeetingRoom />

      <Typography variant='h6' paragraph>
        After the meeting they will go walking to restaurant Picnic for lunch
      </Typography>
       <Picnic />
      <Typography variant='h6' paragraph>
      After lunch, guests will walk for about 15 minutes to Terramar beach, where they will start a beautiful kayak trip along the coast.
      </Typography>
      <Typography variant='h4' gutterBottom id='day_two_3'>
       Kayak Excursion
      </Typography>
      <KayakExcursion />
      <Typography variant='h6' paragraph>
      Once finished the activity guests will enjoy some free time. They have the option to return to the hotel, walking around 15 to 20 minutes or enjoy the beach, go shopping... 
      </Typography>
      <Typography variant='h6' paragraph>
      At 20.00h guests will meet at the hotel lobby to pick up a coach that will transfer them to the restaurant for dinner
      </Typography>
      <Typography variant='h4' gutterBottom id='day_two_4'>
       Restaurant La Taberna del Port
      </Typography>
      <Typography variant='h4' >
        *FICHA*
      </Typography>

      <Typography variant='h4' gutterBottom id='day_three'>
        <strong>Saturday, May 7th </strong>
      </Typography>
      <Typography variant='h4' gutterBottom id='day_three_1'>
      Trekking Activity
      </Typography>
      <Typography variant='h4' >
        *FICHA*
      </Typography>
      <Typography variant='h6' paragraph>
      In the morning, before leaving the hotel, each guest will be given a bag with two medium sandwiches, a piece of fruit, a chocolate bar and a bottle of water.
This packed lunch is provided so that they can make a stop during the activity to have lunch.
      </Typography>
      <Typography variant='h6' paragraph>
      At the end of the activity, the bus will take them back to the hotel where they will enjoy some free time until dinner.
      </Typography>
      <Typography variant='h6' paragraph>
      At 20.00h guests will be transferred to the restaurant for dinner
      </Typography>
      <Typography variant='h4' gutterBottom id='day_three_2'>
        La Daurada
      </Typography>
      <Typography variant='h4' >
        *FICHA*
      </Typography>


      <Typography variant='h4' gutterBottom id='day_four'>
        <strong>Sunday, May 8th </strong>
      </Typography>
      <Typography variant='h6' >
        We will end the programme with a transfer to the airport by bus
      </Typography>
      <Typography variant='h4' gutterBottom>
        <strong>Budget</strong>
      </Typography>
      <Typography variant='h6' gutterBottom>
        <em>All quoted menus include 2x glasses of wine per person and coffee</em>
      </Typography>

      <div>
        <ReactToPrint
          trigger={() => (
            <Button variant='contained' color='secondary'>
              Print PDF
            </Button>
          )}
          content={() => budgetRef.current}
          pageStyle={pageStyle}
          documentTitle='Budget Printout'
        />
        <Budget ref={budgetRef} />
        <Footer />
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  bodyContainer: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    margin: "auto",
    width: "100%",
  },
}));
