import React from 'react';
import styled from 'styled-components';

const Dashboard = () => {
  const data = [
    { month: 'Jan', lastYear: 5000, thisYear: 6000 },
    { month: 'Feb', lastYear: 10000, thisYear: 2000 },
    { month: 'Mar', lastYear: 20000, thisYear: 40000 },
    { month: 'Apr', lastYear: 32000, thisYear: 21000 },
    { month: 'May', lastYear: 12000, thisYear: 9200 },
    { month: 'Jun', lastYear: 13000, thisYear: 8700 },
  ];

  return (
    <Container>
      <Sidebar>
        <NavItem>Salesway</NavItem>
        <NavItem>Settings</NavItem>
        <NavItem>Team</NavItem>
        <NavItem>Dashboard</NavItem>
        <NavItem>Campaigns</NavItem>
        <NavItem>Flows</NavItem>
        <NavItem>Integrations</NavItem>
        <NavItem>Customers</NavItem>
      </Sidebar>
      <Content>
        <Title>Dashboard</Title>
        <Table>
          <thead>
            <tr>
              <th>Month</th>
              <th>Last Year</th>
              <th>This Year</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td>{row.month}</td>
                <td>{row.lastYear}</td>
                <td>{row.thisYear}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Content>
    </Container>
  );
};

export default Dashboard;

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Sidebar = styled.div`
  width: 200px;
  background: #2c3e50;
  padding: 20px;
  color: white;
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

const NavItem = styled.div`
  margin: 10px 0;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }

  th {
    background: #f4f4f4;
  }

  @media (max-width: 768px) {
    th, td {
      padding: 4px;
    }
  }
`;
