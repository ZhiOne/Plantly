import React from 'react';
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import CheckoutPayments from './CheckoutPayment/CheckoutPayment';
import Button from '@material-ui/core/Button';
import useStyles from "./useStyles";

const CheckoutOrder = ({ user , isAuthenticated , handleChange }) => {
const classes = useStyles();

  return (
   isAuthenticated ? (
     <>
     <p className={classes.infoForUser}>
       <span>{user.firstName}</span
       > , Fill in this form, please.</p>
       <ValidatorForm
         noValidate={false}
         autoComplete="off"
         className={classes.form}
         // onsubmit={handleSubmit}
       >
         <TextValidator
           label="First Name"
           variant="outlined"
           name="firstName"
           value={user.firstName}
           onChange={e => handleChange(e)}
           className={classes.textField}
           validators={[
             "required",
             "matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$",
           ]}
           errorMessages={[
             "this field is required",
             "Your name must be more then 2 characters, including only latin letters",
           ]}
         />
         <TextValidator
           label="Email"
           variant="outlined"
           name="email"
           value={user.email}
           onChange={e => handleChange(e)}
           className={classes.textField}
           validators={["required", "isEmail"]}
           errorMessages={["this field is required", "email is not valid"]}
         />
         <TextValidator
           label="Telephone"
           variant="outlined"
           name="telephone"
           value={user.telephone === undefined ? "" : user.telephone}
           onChange={handleChange}
           className={classes.textField}
           validators={["required", "matchRegexp:^[0-9-+\\s()]{13}$"]}
           errorMessages={[
             "this field is required",
             "phone is not valid, need +380... format",
           ]}
         />
         <TextValidator
           label="Delivery address"
           variant="outlined"
           name="address"
           value={user.address === undefined ? "" : user.address}
           onChange={e => handleChange(e)}
           className={classes.textField}
         />
         <CheckoutPayments />
         <Button className={classes.submitBtn}>Checkout</Button>
       </ValidatorForm>
     </>
   ) : (
     <>
     <p className={classes.infoForUser}>You are new User.</p>
     <p className={classes.infoForUser}>Fill in this form, please.</p>
     <ValidatorForm
       noValidate={false}
       autoComplete="off"
       className={classes.form}
     >
       <TextValidator
         label="First Name"
         variant="outlined"
         name="firstName"
         // value={newUserData.firstName}
         // onChange={handleChange}
         className={classes.textField}
         validators={[
           "required",
           "matchRegexp:^[`'\"()A-Za-zd.s_-]{2,50}$",
         ]}
         errorMessages={[
           "this field is required",
           "Your name must be more then 2 characters, including only latin letters",
         ]}
       />
       <TextValidator
         label="Email"
         variant="outlined"
         name="email"
         // value={newUserData.email}
         // onChange={handleChange}
         className={classes.textField}
         validators={["required", "isEmail"]}
         errorMessages={["this field is required", "email is not valid"]}
       />
       <TextValidator
         label="Telephone"
         variant="outlined"
         name="telephone"
         // value={newUserData.telephone}
         // onChange={handleChange}
         className={classes.textField}
       />
       <TextValidator
         label="Delivery address"
         variant="outlined"
         name="address"
         // value={newUserData.address}
         // onChange={handleChange}
         className={classes.textField}
       />
       <CheckoutPayments />
       <Button className={classes.submitBtn}>Checkout</Button>
     </ValidatorForm>
       </>
   )
  )
};



export default CheckoutOrder;
