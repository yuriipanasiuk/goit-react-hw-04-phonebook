import PropTypes from 'prop-types';
import { HiPhone } from 'react-icons/hi';
import Box from 'components/Box';
import {
  Item,
  List,
  PhoneName,
  PhoneNumber,
  Button,
} from './ContactList.styled';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => (
        <Item key={id}>
          <HiPhone style={{ color: '#337ab7' }} />
          <PhoneName>{name}</PhoneName>

          <Box display="flex" ml="auto" width="250px">
            <PhoneNumber>{number}</PhoneNumber>
            <Button type="button" onClick={() => onDelete(id)}>
              Delete
            </Button>
          </Box>
        </Item>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
