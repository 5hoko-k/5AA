const DisplayAnimeProgress = (props) => {
  const isEnglish = useContext(TitleIsEnglish);

  return (
    <Grid container mx={{ sm: 5, lg: 10 }}>
      {
        props.entries.map(({ id, progress, media, mediaId }) => (
          <>
            <Grid item key={id} xs={6} sm={4} md={3} lg={2} px={1} py={1}>
              <Card sx={{ maxWidth: 345, height: "100%" }}>
              <Link to={`/library/${mediaId}`}>
                <CardMedia
                  component="img"
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
                  <Typography gutterBottom variant="body1" component="div" noWrap>
                    {isEnglish
                      ? media.title.english
                        ? media.title.english
                        : media.title.romaji
                      : media.title.romaji}
                  </Typography>
                  <Typography variant="caption" color="text.secondary">
                    <em>Progess: </em>
                    {progress}/<span>{media.episodes}</span>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        ))
      }
    </Grid>
  )
};

export default DisplayAnimeProgress;