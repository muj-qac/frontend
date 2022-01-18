import { Table } from 'evergreen-ui';
import { verified } from '../data/VerifiedData';
import KpiVerifiedRow from './KpiVerifiedRow';

function KpiVerifiedTable() {
  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell>Users</Table.TextHeaderCell>
          <Table.TextHeaderCell>Download</Table.TextHeaderCell>
          <Table.TextHeaderCell>Status</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={300}>
          {verified.map((verify) => (
            <KpiVerifiedRow verify={verify} />
          ))}
        </Table.Body>
      </Table>
    </>
  );
}

export default KpiVerifiedTable;
