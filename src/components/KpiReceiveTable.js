import { Table } from 'evergreen-ui';
import { users } from '../data/UserData';
import KpiReceiveRow from './KpiReceiveRow';

function KpiReceiveTable() {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Users</Table.TextHeaderCell>
          <Table.TextHeaderCell>Download</Table.TextHeaderCell>
          <Table.TextHeaderCell>Verification</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={300}>
          {users.map((user) => (
            <KpiReceiveRow user={user} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default KpiReceiveTable;
