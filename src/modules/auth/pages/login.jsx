import React, { useState } from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from 'react-router-dom';
import { Form, PageWrapper } from '../components/wrappers';
import { CssGrid } from '../../../commons/components/css-grid';
import { authApi } from '../api';

const Login = () => {
  const history = useHistory();
  const [data, setData] = useState({ password: '', email: '' });

  const handleChange = (e) => {
    setData(() => {
      data[e.target.name] = e.target.value;
      return data;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    (async () => {
      try {
        const response = await authApi.doLogin(data);
        if (response.status === 200) {
          // history.push('/dashboard');
          document.write('dashboard');
        }
      } catch (err) {
        document.write('failed to login');
      }
    })();
  };

  return (
    <PageWrapper>
      <CssGrid placeItems="center" gap={1}>
        {/*<img src="/img/logo.png" alt="Logo" />*/}
        <Typography variant="h5">Sign in</Typography>
      </CssGrid>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label="Email Address"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Password"
          type="password"
          name="password"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Signin
        </Button>
      </Form>

      <CssGrid>
        <CssGrid autoFlow="column" justifyContent="space-between">
          <Link link to="/auth/forgot" variant="body2">
            Forgot password?
          </Link>
          <Link link to="/auth/register" variant="body2">
            Don&apos;t have an account? Sign Up
          </Link>
        </CssGrid>
      </CssGrid>
    </PageWrapper>
  );
};

export default Login;
