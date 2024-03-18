import { useId } from "react";
import { nanoid } from "nanoid";
import PropTypes from "prop-types";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { Field, Form, Formik, ErrorMessage } from "formik";

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string().required("Required"),
});

const initialValue = { name: "", number: "" };

const ContactForm = ({ handleAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    handleAddContact({ ...values, id: nanoid() });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValue}
      onSubmit={handleSubmit}
      validationSchema={ContactSchema}
    >
      <Form className={css.form}>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor={nameFieldId}>
            Name
          </label>
          <Field
            className={css.textInput}
            type="text"
            name="name"
            id={nameFieldId}
          />
          <ErrorMessage
            className={css.errorNotification}
            name="name"
            component="span"
          />
        </div>
        <div className={css.inputWrapper}>
          <label className={css.label} htmlFor={numberFieldId}>
            Number
          </label>
          <Field
            className={css.textInput}
            type="text"
            name="number"
            id={numberFieldId}
          />
          <ErrorMessage
            className={css.errorNotification}
            name="number"
            component="span"
          />
        </div>
        <button className={css.button} type="submit">
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
