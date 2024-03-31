import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Divider,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import { Heart, MapPin, Star } from "@phosphor-icons/react";
import React from "react";
import { useTheme, alpha } from "@mui/material/styles";
const images = [
  "https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=",
  "https://cdn.britannica.com/96/115096-050-5AFDAF5D/Bellagio-Hotel-Casino-Las-Vegas.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgMw9w8wI31iV_W0XJtTOI_XqPDtflxnU_TZVeEB-vTJh2Q0BbYHSuzgYRGDS8_MnqA28&usqp=CAU",
  "https://etimg.etb2bimg.com/thumb/msid-86905660,width-1200,height-900,resizemode-4/.jpg",
  "https://b.zmtcdn.com/data/pictures/9/10719/9696ff3c77c2400b77f86319be01b668.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMYGuaBEkCS9NP9dLi0Cv6bVj5en5GLf1FhkzbrHd5Tet6IxYGJo-Kf6i4bd7ttKHFOKw&usqp=CAU",
  "https://r2imghtlak.mmtcdn.com/r2-mmt-htl-image/flyfish/raw/NH70165244257434/QS1042/QS1042-Q1/IMG-0009.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6MrksbkxAPMhY9YsdhQczPAfHJZZZqs6DbA&usqp=CAU",
  "https://media.gettyimages.com/id/1448506100/photo/male-hotel-receptionist-assisting-female-guest.jpg?s=612x612&w=gi&k=20&c=A4p3ofkK0Sixxet1UPYr5xycukL1ESWBxl0WyNUOhDM=",
  "https://www.shutterstock.com/image-illustration/hotel-sign-stars-3d-illustration-260nw-195879770.jpg",
];

function Properties() {
  const theme = useTheme();
  return (
    <div>
      <Box>
        <Grid container maxWidth={"md"} spacing={2}>
          {[...Array(10)].map((elm, index) => (
            <Grid item md={6} xs={12} key={index}>
              {/* card */}
              <Card>
                <Box sx={{ position: "relative" }}>
                  <CardMedia
                    sx={{ height: 320 }}
                    title="Villa"
                    image={images[index]}
                  />
                  <Chip
                    sx={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      color: theme.palette.common.white,
                      bgcolor: alpha(theme.palette.common.black, 0.4),
                    }}
                    label="4.5"
                    icon={
                      <Star
                        size={20}
                        weight="fill"
                        style={{ color: theme.palette.warning.dark }}
                      />
                    }
                  />
                  <IconButton sx={{ position: "absolute", top: 10, right: 10 }}>
                    <Heart
                      size={20}
                      style={{ color: theme.palette.error.main }}
                    />
                  </IconButton>
                </Box>
                <CardContent>
                  <Stack spacing={1}>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems={"center"}
                    >
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: "text.secondary",
                        }}
                      >
                        Place to stay
                      </Typography>

                      <Stack direction="row" spacing={1} alignItems={"center"}>
                        <Typography
                          variant="subtitle2"
                          sx={{
                            fontWeight: 600,
                            fontSize: 16,
                            color: "text.secondary",
                            textDecoration: "line-through",
                          }}
                        >
                          $120
                        </Typography>
                        <Stack direction="row" alignItems={"center"}>
                          <Typography
                            variant="subtitle2"
                            sx={{
                              fontWeight: 600,
                              fontSize: 16,
                              color: "text.white",
                            }}
                          >
                            $100
                          </Typography>
                          <Typography
                            variant="caption"
                            sx={{
                              fontWeight: 600,
                              fontSize: 14,
                              color: "text.secondary",
                            }}
                          >
                            /night
                          </Typography>
                        </Stack>
                        <Divider orientation="vertical" sx={{ height: 20 }} />
                        <Typography
                          variant="subtitle1"
                          sx={{
                            fontWeight: 600,
                            fontSize: 14,
                          }}
                        >
                          $110 Total
                        </Typography>
                      </Stack>
                    </Stack>

                    <Stack direction="row" spacing={1} alignItems={"center"}>
                      <MapPin size={20} weight="bold" />
                      <Typography
                        variant="subtitle2"
                        sx={{
                          fontWeight: 600,
                          fontSize: 16,
                          color: "text.primary",
                        }}
                      >
                        Canada
                      </Typography>
                    </Stack>

                    <Divider />

                    <Stack direction="row" spacing={1} alignItems={"center"}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, fontSize: 16, color: "text.secondary" }}>Amenities</Typography>
                        <Chip label="Wifi" />
                        <Chip label="Parking" />
                        <Chip label="Pool" />
                        <Chip label="Gym" />
                        </Stack>

                  </Stack>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}

export default Properties;
