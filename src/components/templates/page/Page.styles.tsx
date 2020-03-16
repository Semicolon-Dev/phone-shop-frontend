import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    content: {
      flex: 1,
      paddingTop: 64,
      // width: `calc(100%-240px)`,
    },
  })
);
