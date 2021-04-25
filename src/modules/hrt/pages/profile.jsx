import React from "react";
import { PageWrapper, Form } from "../../components/wrappers";
import { CssGrid } from "../../../commons/components/css-grid";
import Typography from "@material-ui/core/Typography";

const Profile = () => {
  return (
    <PageWrapper>
      <CssGrid placeItems="center" gap={1}>
        {/*<img src="/img/logo.png" alt="Logo" />*/}
        <Typography variant="h5">Profile</Typography>
      </CssGrid>
      <Form>
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
      </Form>
    </PageWrapper>
  );
};

export default Profile;
