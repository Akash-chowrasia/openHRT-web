import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React, { useEffect, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import axios from 'axios';
import { CssGrid } from '../../../commons/components/css-grid';
import { Form, PageWrapper } from '../components/wrappers';

const Verify = (props) => {
  const history = useHistory();
  const [data, setData] = useState({ verification_code: '', email: '' });

  const handleChange = (e) => {
    setData(() => {
      data[e.target.name] = e.target.value;
      return data;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = (props.location && props.location.state) || {};

    console.log('**************', res);
    (async () => {
      // try {
      //   const config = {
      //     'Access-Control-Allow-Origin': '*',
      //   };
      //   const responce = await axios.post(
      //     'http://localhost:8080/auth/verify-user',
      //     data,
      //     config
      //   );
      //   if (responce.status === 200) {
      //     history.push('/auth/login');
      //   }
      // } catch (err) {
      //   document.write('failed to verify');
      // }
    })();
  };

  return (
    <PageWrapper>
      <CssGrid placeItems="center" gap={1}>
        {/*<img src="/img/logo.png" alt="Logo" />*/}
        <Typography variant="h5">Verify Email</Typography>
      </CssGrid>

      <Form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          label="Email Address"
          name="email"
          onChange={(e) => handleChange(e)}
        />
        <TextField
          label="Verification Code"
          type="password"
          name="verification_code"
          onChange={(e) => handleChange(e)}
        />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Verify
        </Button>
      </Form>

      <CssGrid>
        <CssGrid autoFlow="column" justifyContent="space-between">
          <Link link to="/auth/register" variant="body2">
            Don&apos;t have an account? Sign Up
          </Link>
        </CssGrid>
      </CssGrid>
    </PageWrapper>
  );
};

export default Verify;
