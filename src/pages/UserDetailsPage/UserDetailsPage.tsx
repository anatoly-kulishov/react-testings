import React from 'react';
import { useParams } from "react-router-dom";

const UserDetailsPage = () => {
  const params = useParams();
  return (
    <div data-testid="user-page">
      USER DETAILS PAGE #{params?.id}
    </div>
  );
};

export default UserDetailsPage;
