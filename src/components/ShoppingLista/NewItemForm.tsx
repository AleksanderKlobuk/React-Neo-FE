import React, {useState} from "react";
import {
    Button,
    Container,
    createStyles,
    FormGroup,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    TextField,
    Theme
} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import {Product} from "../../models/Product";
import {useInput} from "../Hooks/UseInput";

export const NewItemForm = ({addProductFn}: { addProductFn: Function }) => {

    const [item, setItem, itemFormParams] = useInput('');
    const [quantity, setQuantity, quantityFormParams] = useInput('');
    const [unit, setUnit, unitFormParams] = useInput('item');
    const [errors, setErrors] = useState<String[]>([]);


    const handleSubmit = (e: any) => {
        e.preventDefault();
        const tmpErrors: String[] = [];



        const qty = Number(quantity);
        if (isNaN(qty)) {
            tmpErrors.push('Quantity must be a number');
        } else if (qty <= 0) {
            tmpErrors.push('Quantity must be a positive number');
        }

        setErrors(tmpErrors);
        if (tmpErrors.length === 0) {
            const newProduct = new Product(item, qty, unit);
            addProductFn(newProduct);
            setItem('');
            setQuantity('');
        }

    }


    const styles = makeStyles((theme: Theme) =>
        createStyles({
            form: {
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',

            },
            field: {
                margin: "10px 20px",

            
            },
            unitSelect: {
                minWidth: "100px"
            }
        })
    );
    const classes = styles();

    /*let errorsJsx = null;
    if (errors.length > 0) {
        errorsJsx = errors.map((err: String, index: number) => <Alert key={index} severity={"error"}>{err}</Alert>)
    }*/
    return (
        <Paper square elevation={3}>
            <Container maxWidth={"md"}>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <FormGroup className={classes.field}>
                        <InputLabel>Item</InputLabel>
                        <TextField {...itemFormParams}/>
                    </FormGroup>
                    <FormGroup className={classes.field}>
                        <InputLabel>Quantity</InputLabel>
                        <TextField {...quantityFormParams}/>
                    </FormGroup>
                    <FormGroup className={classes.field}>
                        <InputLabel>Unit</InputLabel>
                        <Select className={classes.unitSelect} {...unitFormParams}>
                            <MenuItem value={"g"}>grams</MenuItem>
                            <MenuItem value={"kg"}>kilograms</MenuItem>
                            <MenuItem value={"item"}>Item(s)</MenuItem>
                        </Select>
                    </FormGroup>
                    <Button type={"submit"} variant="contained" color="primary">Add</Button>
                </form>
            </Container>
        </Paper>
    );
}
