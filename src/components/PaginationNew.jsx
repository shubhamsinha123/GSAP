import React, { useState } from "react";
import { Pagination } from "@material-ui/lab";
import { Grid, Paper } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import styled from "styled-components";
import { useTheme } from "@mui/material/styles";
const PaginationNew = () => {
  const images = [
    {
      id: 1,
      url: "https://source.unsplash.com/random/400x500/?img=1",
      title: "Image 1",
    },
    {
      id: 2,
      url: "https://source.unsplash.com/random/400x500/?img=2",
      title: "Image 2",
    },
    {
      id: 3,
      url: "https://source.unsplash.com/random/400x500/?img=3",
      title: "Image 3",
    },
    {
      id: 4,
      url: "https://source.unsplash.com/random/400x500/?img=4",
      title: "Image 4",
    },
    {
      id: 5,
      url: "https://source.unsplash.com/random/400x500/?img=5",
      title: "Image 5",
    },
    {
      id: 6,
      url: "https://source.unsplash.com/random/400x500/?img=6",
      title: "Image 6",
    },
    {
      id: 7,
      url: "https://source.unsplash.com/random/400x500/?img=7",
      title: "Image 7",
    },
    {
      id: 8,
      url: "https://source.unsplash.com/random/400x500/?img=8",
      title: "Image 8",
    },
    {
      id: 9,
      url: "https://source.unsplash.com/random/400x500/?img=9",
      title: "Image 9",
    },
  ];

  const PAGE_SIZE = 3;
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const styles = {
    containers: {
      marginLeft: isSmallScreen ? null : "40%",
    },
  };
  const [page, setPage] = useState(1);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE;
  const paginatedImages = images.slice(startIndex, endIndex);
  return (
    <Section>
      <Grid container spacing={3}>
        {paginatedImages.map((image) => (
          <Grid item key={image.id} xs={12} sm={6} md={4}>
            <Paper>
              <img src={image.url} alt={image.title} />
            </Paper>
          </Grid>
        ))}
      </Grid>
      <Pagination
        style={styles.containers}
        page={page}
        count={Math.ceil(images.length / PAGE_SIZE)}
        onChange={handlePageChange}
        color="primary"
      />
    </Section>
  );
};

const Section = styled.section`
  img {
    min-height: 500px;
  }
`;
export default PaginationNew;
