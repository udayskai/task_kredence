import React, { Component } from "react";
import InfoPage from './InfoPage';
import { FormControl, NativeSelect, Grid, makeStyles } from '@material-ui/core'



let useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: "250px",
        backgroundColor: "white",
        border: "2px solid black",
        outline: "none"
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

const Dropdown = (props) => {
    const classes = useStyles();

    //on Click handler
    let onClickMethod = (e) => {
        props.onChange(e)
    }

    return (
        <Grid xs={4} >
            <FormControl className={classes.formControl}>
                <NativeSelect
                    className={classes.selectEmpty}
                    value={props.value}
                    name="age"
                    onChange={onClickMethod}
                >
                    <option value="">Dropdown </option>
                    <option value=" Lorem ipsum dolor sit amet consectetur adipisicing elit. ">Ten</option>
                    <option value="Nemo explicabo nesciunt numquam facilis corporis?">Twenty</option>
                    <option value="perferendis ipsam consequatur excepturi eius!">Thirty</option>
                </NativeSelect>
            </FormControl>
        </Grid>
    );
}

export default Dropdown;
