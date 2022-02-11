import {
    AppBar,
    Container,
    MenuItem,
    Select,
    Toolbar,
    Typography
} from '@material-ui/core';

import {
    createTheme,
    makeStyles,
    ThemeProvider,
} from "@material-ui/core/styles";

import { useHistory } from "react-router-dom";
import { CryptoState } from "../CryptoContext";
import React from 'react';

// style Header
const useStyles = makeStyles((theme) => ({
    title: {
        flex: 1,
        color: "gold",
        fontFamily: "Montserrat",
        fontWeight: "bold",
        cursor: "pointer",
    },
}));

const darkTheme = createTheme({
    palette: {
        primary: {
            main: "#fff",
        },
        type: "dark",
    },
});

const Header = () => {

    const classes = useStyles();

    const history = useHistory();

    const { currency, setCurrency } = CryptoState();

    return (
        <ThemeProvider theme={darkTheme}>
            <AppBar color='transparent' position='static'>
                <Container>
                    <Toolbar>
                        <Typography
                            onClick={() => history.push(`/`)}
                            variant="h6"
                            className={classes.title}
                        >
                            Coins Tracker App
                        </Typography>

                        {/* seclect price in currency (giá theo loại tiền tệ) */}
                        <Select
                            variant='outlined'
                            value={currency}
                            style={{
                                width: 100,
                                height: 40,
                                marginRight: 15,
                            }}
                            onClick={(e) => setCurrency(e.target.value)}
                        >
                            <MenuItem value={"USD"}>USD</MenuItem>
                            <MenuItem value={"INR"}>INR</MenuItem>
                            <MenuItem value={"VNĐ"}>VNĐ</MenuItem>
                        </Select>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    )
};

export default Header;
