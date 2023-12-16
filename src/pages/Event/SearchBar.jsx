import React from 'react';
import { Button, Form, FormControl } from 'react-bootstrap';

const SearchBar = () => {
  return (
    <Form style={{ display: 'flex' ,marginInline: '2vh', height:'2vh'}}>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button style={{background:'#1250A2'}}>Selesai & Upload</Button>
      <Button variant="primary" className="ml-sm-2">Search</Button>
    </Form>
  );
};

export default SearchBar;
