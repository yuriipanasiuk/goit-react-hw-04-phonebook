import { Component } from 'react';
import { Button } from './AddContact/AddContact.styled';
import { FormStyled, Input, InputLabel, LabelName } from './ContactForm.styled';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  render() {
    return (
      <>
        <FormStyled>
          <InputLabel>
            <LabelName>Name</LabelName>
            <Input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </InputLabel>
          <InputLabel>
            <LabelName>Number</LabelName>
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </InputLabel>
          <Button children="Add contact" />
        </FormStyled>
      </>
    );
  }
}

export default ContactForm;
