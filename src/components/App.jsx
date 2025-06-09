import React, { Component } from 'react'
import Container from './Container'
import contacts from './contacts.json'
import Modal from './Modal';

export class App extends Component {
  state = {
    contacts: contacts,
    showModal: true,
  };
  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const nextContacts = this.state.contacts;
    const prevContacts = prevState.contacts;
 if (nextContacts !== prevContacts) {
      console.log('Обновилось поле contacts, записываю contacts в хранилище');
      localStorage.setItem('contacts', JSON.stringify(nextContacts ));
    }

    if (nextContacts.length > prevContacts.length && prevContacts.length !== 0) {
      this.toggleModal();
    }
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { contacts, showModal } = this.state;
    return (
      <Container>
                {showModal && (
          <Modal onClose={this.toggleModal}>
            Children
          </Modal>
        )}
      </Container>
    )
  }
}

export default App
