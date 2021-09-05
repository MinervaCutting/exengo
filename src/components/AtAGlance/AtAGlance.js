import { makeStyles, withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import WbSunnyTwoToneIcon from "@material-ui/icons/WbSunnyTwoTone";
import LocalDiningTwoToneIcon from "@material-ui/icons/LocalDiningTwoTone";
import Brightness4TwoToneIcon from "@material-ui/icons/Brightness4TwoTone";

const rows = [
  {
    icon: <WbSunnyTwoToneIcon />,
    time: "Morning",
    data: [
      "Group 1: Arrival",
      "Meeting",
      "Trekking Activity",
      "Departures",
    ],
  },
  {
    icon: <LocalDiningTwoToneIcon />,
    time: "Lunch",
    data: ["Aiguadolç Beach Bar", "Restaurant PicNic", "Packed lunch", ""],
  },
  {
    icon: <Brightness4TwoToneIcon />,
    time: "Afternoon",
    data: [
      "Group 2 - Arrival // Group 1 & 2 - Scavengers Hunt",
      "Kayak Excursion",
      "Free time",
      "",
    ],
  },
  {
    icon: <LocalDiningTwoToneIcon />,
    time: "Dinner",
    data: [
      "Dinner at the hotel Rooftop",
      "Restaurant La Taberna del Puerto",
      "Restaurant La Daurada",
      "",
    ],
  },
];

export default function AtAGlance() {
  const classes = useStyles();

  return (
    <>
      <TableContainer
        component={Paper}
        className={classes.table_container}
        elevation={0}
      >
        <Table className={classes.table} size='small'>
          <TableHead>
            <StyledTableRow>
              <StyledTableCell>May 5th-8th, 2022</StyledTableCell>
              <StyledTableCell>Thursday</StyledTableCell>
              <StyledTableCell>Friday</StyledTableCell>
              <StyledTableCell>Saturday</StyledTableCell>
              <StyledTableCell>Sunday</StyledTableCell>
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow>
                <StyledTableCell
                  component='th'
                  scope='row'
                  className={classes.column_header}
                >
                  {row.time}
                  <span className={classes.icon}>{row.icon}</span>
                </StyledTableCell>
                {row.data.map((item, i) => (
                  <StyledTableCell key={i}>{item}</StyledTableCell>
                ))}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

const useStyles = makeStyles((theme) => ({
  table_container: {
    marginBottom: theme.spacing(4),
  },
  table: {
    minWidth: 650,
  },
  column_header: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  icon: {
    color: "#ea5933",
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#7f847a",
    color: theme.palette.common.white,
    fontSize: 20,
  },
  body: {
    fontSize: 17,
    fontStyle: "italic",
    "&:first-child": {
      fontSize: 20,
      fontStyle: "normal",
    },
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(even)": {
      backgroundColor: theme.palette.type === "light" ? "#f5f1e9" : "#333",
    },
  },
}))(TableRow);
