import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    root: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        gap: '8px'
    },
    result: {
        width: '100%',
        padding: '20px',
        boxSizing: 'border-box'
    },
    container: {
        position: 'relative'
    },
    iconButton: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        marginBottom: '12px',
        marginRight: '4px'
    },
    loading: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default useStyles;
