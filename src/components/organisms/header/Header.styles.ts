import { makeStyles, Theme, createStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      '& > *': {
        display: 'flex',
        alignItems: 'center',
      }
    },
    searchBar: {
      flex: 1,
    }
  }),
  { name: "Header" }
);