import { Container, makeStyles, Typography } from "@material-ui/core";
import React from 'react'
import Carousel from "./Carousel";


const useStyles = makeStyles((theme) => ({
    banner: {
        backgroundImage: "url(../../banner2.jpg)",
    },
    bannerContent: { // style nội dung banner
        height: 400,
        display: "flex",
        flexDirection: "column",
        paddingTop: 25,
        justifyContent: "space-around",
    },
    tagline: {
        display: "flex",
        height: "40%",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
    },
    carousel: { // slide ảnh tiền điện tử
        height: "50%",
        display: "flex",
        alignItems: "center",
    },
}));

const Banner = () => {
    const classes = useStyles();
    return (
        <div className={classes.banner}>
            <Container className={classes.bannerContent}>
                <div className={classes.tagline}>
                    <Typography
                        variant="h2"
                        style={{
                            fontWeight: "bold",
                            marginBottom: 15,
                            fontFamily: "Montserrat",
                        }}
                    >
                        TIỀN ĐIỆN TỬ
                    </Typography>
                    <Typography
                        variant="subtitle2"
                        style={{
                            color: "darkgrey",
                            textTransform: "capitalize",
                            fontFamily: "Montserrat",
                        }}
                    >
                        Tại đây, nhận tất cả thông tin liên quan đến tiền tử yêu thích của bạn
                    </Typography>
                </div>
                <Carousel />
            </Container>
        </div>
    )
}

export default Banner