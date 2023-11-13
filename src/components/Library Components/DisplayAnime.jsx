import { TitleIsEnglish } from '../../App'
import { Link } from "react-router-dom";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import { Badge } from "@mui/material";
import { useContext } from "react";
import Grid from "@mui/material/Grid";

const DisplayAnime = (props) => {
    const isEnglish = useContext(TitleIsEnglish);
  
    const filteredEntries = props.entries.filter((entry) => {
      let matched = true;
  
      if (props.genre && entry.media.genres.indexOf(props.genre) === -1) {
        matched = false;
      }
      if (props.format && entry.media.format !== props.format) {
        matched = false;
      }
      if (props.status && entry.status !== props.status) {
        matched = false;
      }
      return matched;
    });
  
    const statusColor = (status) => {
      if (status === "CURRENT") {
        return "#118AB2";
      } else if (status === "COMPLETED") {
        return "#06D6A0";
      } else if (status === "PLANNING") {
        return "#073B4C";
      } else if (status === "DROPPED") {
        return "#c1121f";
      } else if (status === "PAUSED") {
        return "#FFD166";
      }
    };
  
    return (
      <Grid container mx={{ sm: 5, lg: 10 }}>
        {filteredEntries.map(({ mediaId, media, progress, status }) => (
            <Grid item key={mediaId} xs={6} sm={4} md={3} lg={2} px={1} py={1}>
                <Badge
                color="primary"
                badgeContent=""
                sx={{
                    height: "100%",
                    "& .MuiBadge-badge": {
                    backgroundColor: statusColor(status),
                    },
                }}
                >
                <Card>
                    <Link to={`/library/${mediaId}`}>
                    <CardMedia
                        component="img"
                        key={mediaId}
                        alt={
                        isEnglish
                            ? media.title.english
                            ? media.title.english
                            : media.title.romaji
                            : media.title.romaji
                        }
                        image={media.coverImage.extraLarge}
                    />
                    </Link>
                    <CardContent>
                    <Typography gutterBottom key={mediaId} variant="body1" component="div">
                        {isEnglish
                        ? media.title.english
                            ? media.title.english
                            : media.title.romaji
                        : media.title.romaji}
                    </Typography>
                    {status === "CURRENT" && (
                        <Typography variant="caption" color="text.secondary">
                        <em>Progess: </em>
                        {progress}/<span>{media.episodes}</span>
                        </Typography>
                    )}
                    </CardContent>
                </Card>
                </Badge>
            </Grid>
        ))}
      </Grid>
    );
  };

  export default DisplayAnime;