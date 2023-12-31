import { Button, Label, Wrapper } from './Phonebook.styled';
import { Component } from 'react';
import PropTypes from 'prop-types';

export class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };
  handleOnChange = ({ target }) => {
    this.setState({ [target.name]: target.value, [target.name]: target.value });
  };
  handleOnSubmit = event => {
    const { onSubmit } = this.props;
    event.preventDefault();
    onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    this.propTypes = {
      [this.props.data]: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
        })
      ),
      [this.props.onSubmit]: PropTypes.func,
    };
    return (
      <Wrapper>
        <form onSubmit={this.handleOnSubmit}>
          <Label>
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleOnChange}
            />
          </Label>
          <Label>
            <span>Number</span>
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleOnChange}
            />
          </Label>

          <Button type="submit">Add contact</Button>
        </form>
      </Wrapper>
    );
  }
}