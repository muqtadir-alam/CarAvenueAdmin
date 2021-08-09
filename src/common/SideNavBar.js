import React from 'react';
import SuperAdminSideNavBar from './SideNavBar/ForSuperAdmin'
import ForVendorSideNavBar from './SideNavBar/ForVendor';

class SideNavBar extends React.Component {

  render() {
    return (
      localStorage.getItem('loged_In_role') === "admin"
        ?
        <ForVendorSideNavBar />
        :
        <SuperAdminSideNavBar />
    );
  }
}

export default SideNavBar