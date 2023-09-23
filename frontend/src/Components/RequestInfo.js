import { CssBaseline } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import { useEffect, useState } from "react";
import ReactSelect from "react-select";
import axiosInstance from "../axios";

const RequestInfo = () => {
  useEffect(() => {
    axiosInstance
      .get("/api/request-params")
      .then((response) => {
        if (response.data) {
          const formatted = [];
          for (const key in response.data) {
            formatted.push({
              label: key,
              value: response.data[key],
            });
          }
          setInformationList(formatted);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const [informationList, setInformationList] = useState([]);
  const [selected, setSelected] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const cards = [
    {
      title: "Personal Information",
      description:
        "Obtain personal information such as your Passport details, Driver's details and others.",
      params:
        "uinfin+passportnumber+passportexpirydate+hanyupinyinname+email+birthcountry+race+sex+drivinglicense+residentialstatus+marriedname+dialect",
    },
    {
      title: "Finance",
      description: "Retrieve your CPF contribution history or Medisave.",
      params:
        "cpfmedishieldlife+cpfemployers+cpfbalances+cpfcontributions+cpfmonthlypayouts",
    },
    {
      title: "Family",
      description:
        "View dependents' information, marriage certificate or request for your family member's information.",
      params: "marital+childrenbirthrecords",
    },
    {
      title: "Properties and Vehicles",
      description:
        "Check property information or data regarding your vehicle(s).",
      params: "edulevel+ltavocationallicences+vehicles",
    },
    {
      title: "Education",
      description: "View your academic records from official examinations.",
      params: "academicqualifications+edulevel",
    },
    {
      title: "Career",
      description: "View past and present working .",
      params: "occupation+cpfemployers",
    },
  ];

  const handleMouseOver = (e) => {
    e.currentTarget.style.transform = "scale(1.05)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
  };

  const handleRetrieveInfo = () => {
    if (selected === undefined || selected.length === 0) {
      setErrorMessage("Please select data to retrieve");
    } else {
      const queryParams = selected.map((each) => each.value);
      const callback_uri = `/request-info/success/scope?=${queryParams.join(
        "+",
      )}`;
      window.location.href = `/authorise?callback_uri=${callback_uri}`;
    }
  };
  return (
    <>
      <CssBaseline>
        <main>
          <Container maxWidth="sm">
            <Typography
              variant="h4"
              align="center"
              color="text.primary"
              gutterBottom
            >
              What information would you like to retrieve?
            </Typography>
            <Typography
              variant="h8"
              align="center"
              color="text.secondary"
              paragraph
            >
              Search, select and add particular queries below or click on a
              preset
            </Typography>
            <Typography variant="h8" align="center" color="red" paragraph>
              {errorMessage}
            </Typography>

            <ReactSelect
              options={informationList}
              isMulti
              onChange={(val) => {
                setSelected(val);
              }}
            ></ReactSelect>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained" onClick={handleRetrieveInfo}>
                Retrieve
              </Button>

              <Button
                variant="outlined"
                onClick={() => {
                  window.open(
                    "https://www.pdpc.gov.sg/Overview-of-PDPA/The-Legislation/Personal-Data-Protection-Act",
                  );
                }}
              >
                PDPA Guidelines
              </Button>
            </Stack>
          </Container>

          <Container sx={{ py: 8 }} maxWidth="lg">
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card.title} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      boxShadow: 2,
                      cursor: "pointer",
                    }}
                    onMouseOver={handleMouseOver}
                    onMouseLeave={handleMouseLeave}
                  >
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {card.title}
                      </Typography>
                      <Typography>{card.description}</Typography>
                    </CardContent>
                    <CardActions>
                      <Button size="small">About</Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </CssBaseline>
    </>
  );
};

export default RequestInfo;
