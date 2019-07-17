import React, {Component} from 'react';
import Button from '@material-ui/core/Button';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: 'input',
        elemntConfig: {
          type: 'email',
          placeholder: 'Mail Address'
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },

      password: {
        elementType: 'input',
        elemntConfig: {
          type: 'password',
          placeholder: 'Password'
        },
        value: '',
        validation: {
          required: true,
          minLenth: 6
        },
        valid: false,
        touched: false
      }
    }
  };

  render() {
    const formElementsArray = [];
    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key];
      });
    }

    const form = formElementsArray.map(formElemnent => (
      <Input
        key={formElemnt.id}
        />
    ));

    return (
      <div>
        <form>
        </form>
      </div>
    );
  }
}
