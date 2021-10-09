import React, { ReactElement } from "react";
import Text from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import Link from "@/ui/Link";
import Header from "@/sections/Header";
import BodyContainer from "@/sections/BodyContainer"

const Spacer = () => (
  <Grid item xs={2} lg={3} display={{ xs: "none", md: "block" }}></Grid>
);

export default function QPhase21(): ReactElement {
  return (
    <BodyContainer>
      <Header />
      <Text variant="h3" component="h1">
        Q-Phase
      </Text>
      <Text variant="h5" component="div">
        Queere Orientierungsphase in Karlsruhe
      </Text>
      <Text variant="h5" component="div">
        26. bis 28. November 2021
      </Text>
      <Box
        sx={{
          my: { xs: 3, sm: 5 },
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            pb: { xs: 0, sm: 1 },
            pt: { xs: 2, sm: 2 },
            borderTop: "2px solid",
            borderBottom: "2px solid",
            display: "flex",
            justifyContent: "center",
            alignItems: "baseline",
            flexWrap: "wrap",
            color: "secondary.main",
          }}
        >
          <Text
            variant="h3"
            component="div"
            gutterBottom={false}
            sx={{ fontWeight: "bold", whiteSpace: "nowrap", mx: 1 }}
          >
            F*ck last year,
          </Text>

          <Text
            variant="h2"
            color="primary"
            component="div"
            gutterBottom={false}
            sx={{
              fontFamily: "Hello",
              p: 1,
              whiteSpace: "nowrap",
              mx: 1,
            }}
          >
            let&apos;s be queer!
          </Text>
        </Box>
      </Box>
      <Text variant="body1" paragraph sx={{ mt: { xs: 3, sm: 5 } }}>
        Mit diesem Motto startet dieses Jahr unsere queere Orientierungsphase,
        die &rdquo;Q-Phase&rdquo;, endlich wieder in Person!
        <br />
        Los geht es mit einem{" "}
        <b>
          Kennenlern-Treffen am Fr. den 26.11. 19:30 im{" "}
          <Link href="https://goo.gl/maps/JCHnMXudYRPwoiGu7">Z10</Link>
        </b>
        .<br />
        Wenn du Lust hast mitzumachen, dann melde dich am besten gleich über den
        Button unten an. Wegen Corona kann es sein, dass wir nur begrenzte
        Plätze haben werden, weshalb eine frühzeitige Anmeldung wichtig ist.
        <br />
        Speichere dir auch diese Seite ab, da es hier in nächster Zeit weitere
        Infos zum Programm und co. geben wird.
      </Text>
      <Grid container spacing={2} my={{ xs: 1, sm: 3 }} pt={0}>
        <Spacer />
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ width: "100%" }}
            href="https://rebrand.ly/q-phase-21-anmeldung"
            target="_blank"
          >
            Zur Q-Phase anmelden
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ width: "100%" }}
            href="/Q-Phase_Kennenlern-Treffen.ics"
            target="_blank"
          >
            Im Kalender abspeichern
          </Button>
        </Grid>
        <Spacer />
        <Spacer />
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ width: "100%" }}
            href="https://go.rocket.chat/invite?host=chat.queerbeet.org&path=invite%2Fu5kgtj"
            target="_blank"
          >
            Chat-Server beitreten
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <Button
            variant="outlined"
            color="secondary"
            size="large"
            sx={{ width: "100%" }}
            href="https://www.lists.kit.edu/sympa/subscribe/queerbeet"
            target="_blank"
          >
            E-Mail Verteiler beitreten
          </Button>
        </Grid>
        <Spacer />
      </Grid>
    </BodyContainer>
  );
}
