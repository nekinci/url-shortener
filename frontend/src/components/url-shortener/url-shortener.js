import React from "react";
import TextField from "@material-ui/core/TextField";
import {Button, Icon, IconButton, Typography} from "@material-ui/core";
import useStyles from "./url-shortener.styles";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import CopyIcon from '@material-ui/icons/FileCopy'
import Tooltip from "@material-ui/core/Tooltip";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import CircularProgress from "@material-ui/core/CircularProgress";

const UrlShortener = () => {

    const classes = useStyles();
    const [result, setResult] = React.useState(null);
    const [copy, setCopy] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(false);
    const [baseUrl, setBaseUrl] = React.useState('');

    const copyURL = () => {
        const resultTextField = document.querySelector('result-textfield');
        resultTextField.focus();
        resultTextField.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Oops, unable to copy');
        }
        setCopy(true);
        setTimeout(() => {
            setCopy(false);
        }, 1100);
    }

    const getResult = () => {
        setResult(null);
        setLoading(true);
        fetch('generate', {
            method: 'POST',
            body: baseUrl
        }).then(res => res.text()).then(res => {
            const host = window.location.href;
            setResult(host + res);
            setLoading(false);
        }).catch(err => {
            setError('Error: Try again');
            setLoading(false);
        });
    }

    return (
        <div className={classes.root}>
            <TextField
                id="outlined-full-width"
                placeholder="URL"
                margin="none"
                autoComplete="off"
                onKeyUp={(e) => e.key === 'Enter' && getResult()}
                onChange={(event) => setBaseUrl(event.target.value)}
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
            <Button disabled={baseUrl.length === 0} size="small" onClick={() => getResult()} variant="contained" color="primary" disableElevation>Get URL</Button>
            {loading && (
                <Paper variant="outlined" color="primary" className={classes.loading}>
                    <div><Icon><CircularProgress/></Icon></div>
                </Paper>
            )}
            {error && <span>{error}</span>}
            {result !== null && ( <Paper variant="outlined" color="primary" className={classes.result}>

                    <React.Fragment>
                        <Typography variant="h6">Result: </Typography>
                        <div className={classes.container}>
                            <TextField id="result-textfield" size="small" label="Short URL" fullWidth variant="standard" margin="normal" autoComplete="off" value={result}></TextField>
                            <ClickAwayListener onClickAway={() => setCopy(false)} >
                                <Tooltip PopperProps={{disablePortal: true}} disableFocusListener disableHoverListener disableTouchListener open={copy} onClose={() => setCopy(false)} title="Copied!">
                                    <IconButton onClick={() => copyURL()} color="secondary" size="small" className={classes.iconButton}>
                                        <CopyIcon/>
                                    </IconButton>
                                </Tooltip>
                            </ClickAwayListener>
                        </div>
                    </React.Fragment>
            </Paper>
            )}

        </div>
    )
}

export default UrlShortener;
