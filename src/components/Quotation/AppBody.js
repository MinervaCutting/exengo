import { Paper, makeStyles, Typography, Button } from "@material-ui/core";
import VendorOptionsTab from "../../utils/TabPanel";
import LaPedrera from "../../vendors/la_pedrera/LaPedrera";
import Montblanc from "../../vendors/melia_sitges/MeliaSitges";
import MiM from "../../vendors/mim/MiM";
import ElGlop from "../../vendors/el_glop/ElGlop";
import FabricaMoritz from "../../vendors/fabrica_moritz/FabricaMoritz";
import BcnExperience from "../../vendors/fcbcn_experience/BcnExperience";
import TapasTour from "../../vendors/tapas_tour/TapasTour";
import Budget from "../Budget/Budget";
import ElArenal from "../../vendors/el_arenal/ElArenal";
import Nuria from "../../vendors/nuria/Nuria";
import WalkingTour from "../../vendors/walking_tour/WalkingTour";
import CorCaliu from "../../vendors/cor_caliu/CorCaliu";
import Mana75 from "../../vendors/mana_75/Mana75";
import MarinaMonchos from "../../vendors/marina_monchos/MarinaMonchos";
import { useRef } from "react";
import ReactToPrint from "react-to-print";
import Footer from "../StickyFooter/Footer";
import MeliaSitges from "../../vendors/melia_sitges/MeliaSitges";


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
        Quotation for the group <strong>Generali</strong>
      </Typography>
      <Typography variant='h6' gutterBottom>
        Cutting Edge Events - July 22nd, 2021
      </Typography>

      <Typography variant='h6' gutterBottom>
        Dear <strong>Pavla</strong>. We have prepared this offer with your group
        in mind. We have designed a program that will help your group have a
        terrific time in Barcelona - discover all its hidden corners, eat
        delicious mediterranean food with views of the Mediterranean, or prime
        locations in the city, and all in all, enjoy their visit to the full.
      </Typography>

      <Typography variant='h6' gutterBottom>
        If you choose <strong>Hotel HCC Montblanc</strong>, they have offered a
        supplement for half board of €24p.p for dinner - so you can skip some
        dinners with this half board if you really need to adjust to a tight
        budget.
      </Typography>

      <Typography variant='h4' gutterBottom id='accommodation'>
        <strong>Accommodation</strong>
      </Typography>
      <VendorOptionsTab name1='MiM' name2='Melià Sitges'>
        <MiM />
        <MeliaSitges />
      </VendorOptionsTab>
      <Typography variant='h4' gutterBottom id='day_one'>
        <strong>Friday, May 20th - Arrival Day</strong>
      </Typography>
      <Typography variant='h6' paragraph>
        As your plane lands, we will meet you at the airport, and transfer the
        group to the Hotel. This will be our starting point for the tapas tour
      </Typography>
      <Typography variant='h4' gutterBottom id='day_one_1'>
        Tapas Tour
      </Typography>
      <TapasTour />
      <Typography variant='h4' gutterBottom id='day_one_2'>
        Pre-dinner activity at Fabrica Moritz
      </Typography>
      <Typography variant='h6' paragraph>
        Tonight we are going to enjoy dinner at the legendary
        <strong>Fabrica Moritz</strong>, which is a very famous local beer
        brewery. We will take a tour of the brewery en enjoy 4 x different beer
        tasting, in an activity that will take around 25 minutes, and will lead
        to dinner.
      </Typography>
      <FabricaMoritz />
      <Typography variant='h4' gutterBottom id='day_two'>
        <strong>Saturday, May 21st </strong>
      </Typography>
      <Typography variant='h4' gutterBottom id='day_two_1'>
        FC Barcelona Experience
      </Typography>
      <BcnExperience />
      <Typography variant='h4' gutterBottom>
        Lunch at the Beach
      </Typography>
      <ElArenal />
      <Typography variant='h5' gutterBottom>
        After lunch, we will give the group a free afternoon, so that they can
        enjoy the Port and the beach
      </Typography>
      <Typography variant='h4' gutterBottom id='day_two_3'>
        Dinner options for Saturday
      </Typography>
      <div id='d2d0' />
      <div id='d2d1' />
      <VendorOptionsTab name1='Cafeteria Nuria' name2='Braseria El Glop'>
        <Nuria />
        <ElGlop />
      </VendorOptionsTab>
      <Typography variant='h4' gutterBottom id='day_three'>
        <strong>Sunday, May 22nd </strong>
      </Typography>
      <Typography variant='h4' gutterBottom id='day_three_1'>
        Morning walking tour of the <strong>Eixample</strong> district
      </Typography>
      <WalkingTour />
      <Typography variant='h4' gutterBottom id='day_three_2'>
        For lunch, we offer the following option ...
      </Typography>
      <CorCaliu />
      <Typography variant='h6' gutterBottom id='day_three_3'>
        In the later afternoon, the group will be coached to the Stadium for a
        vibrating game of FCBarcelona. We will guide the group to the Stadium,
        and wait for them. On our way back, we will drop the group in the final
        restaurant for dinner
      </Typography>
      <div id='d3d0' />
      <div id='d3d1' />
      <VendorOptionsTab name1='Mana 75' name2='Marina Monchos'>
        <Mana75 />
        <MarinaMonchos />
      </VendorOptionsTab>
      <Typography variant='h4' gutterBottom id='day_four'>
        <strong>Monday, May 23rd </strong>
      </Typography>
      <Typography variant='h6' gutterBottom id='day_four_1'>
        We will end the programme with a transfer to the airport by bus
      </Typography>
      <Typography variant='h4' gutterBottom>
        <strong>Budget</strong>
      </Typography>
      <Typography variant='h6' gutterBottom>
        All quoted menus include 2x glasses of wine per.person except{" "}
        <strong>Fabrica Moritz</strong>, which is a beer brewery and has a
        supplement for wines. Spanish restaurants always quote 2x glasses per
        person.
      </Typography>
      <Typography variant='h6' gutterBottom>
        The menu cost detailed at <strong>El Arenal</strong> includes the
        supplement that the property charges for dining in the terrace. Should
        the group wish to dine inside, there is a discount of EUR 3 p.person on
        the chosen menu.
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
