import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    main: {
        display: 'grid',
        gridTemplateRows: 'auto 1fr',
        height: '100vh'
    },
    root: {
        width: '100%',
        fontSize: 'large',
        display: 'flex',
        padding: '20px 0',
        flex: '1 0 auto',
        justifyContent: 'space-between'
    },
    container: {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        paddingTop: '120px'
    },
    h1: {
        fontSize: '64px',
        fontWeight: 'bolder'
    }
});

export default useStyles;
