import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { CssGrid } from '../../../commons/components/css-grid';
import { Form, PageWrapper } from '../components/wrappers';
import { authApi } from '../api';

const Register = () => {
  const history = useHistory();
  const [data, setData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setData(() => {
      data[e.target.name] = e.target.value;
      return data;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    (async () => {
      try {
        const response = await authApi.doRegister(data);
        if (response.status === 200) {
          history.push({
            pathname: '/auth/verify',
            state: { detail: data.email },
          });
        }
      } catch (err) {
        document.write('failed to register');
      }
    })();
  };

  return (
    <PageWrapper>
      <CssGrid placeItems="center" gap={1}>
        {/*<img src="/img/logo.png" alt="Logo" />*/}
        <Typography variant="h5">Register</Typography>
      </CssGrid>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label="Email Address"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Full Name"
          name="name"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          name="password"
          label="Password"
          type="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Register
        </Button>
      </Form>
      <CssGrid>
        <CssGrid autoFlow="column" justifyContent="space-between">
          <Link link to="/auth/login" variant="body2">
            Have an Account, Login
          </Link>
        </CssGrid>
      </CssGrid>
    </PageWrapper>
  );
};

export default Register;
