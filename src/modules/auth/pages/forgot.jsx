import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import React from 'react';
import { CssGrid } from '../../../commons/components/css-grid';
import { Form, PageWrapper } from '../components/wrappers';

const Forgot = () => {
  return (
    <PageWrapper>
      <CssGrid placeItems="center" gap={1}>
        {/*<img src="/img/logo.png" alt="Logo" />*/}
        <Typography variant="h5">Forgot Password</Typography>
      </CssGrid>
      <Form>
        <TextField label="Email Address" name="email" />
        <Button type="submit" fullWidth variant="contained" color="primary">
          Submit
        </Button>
      </Form>
    </PageWrapper>
  );
};

export default Forgot;
