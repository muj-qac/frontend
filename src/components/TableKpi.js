import { Spinner, Table } from "evergreen-ui";
import { useEffect, useState } from "react";
import KPIRow from "./KPIRow";
import api from "../api";

function TableKpi() {
  //useState for disabling roles
  const [kpis, setKpis] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchKpi = async () => {
    const res = await api.get(`/admin/kpi/get-kpis`);
    setKpis(res.data);
    setLoading(true);
    console.log(res.data);
  };
  useEffect(() => {
    fetchKpi();
  }, []);

  console.log(kpis);

  return (
    <>
      <Table>
        <Table.Head>
          <Table.TextHeaderCell flexBasis={200} flexShrink={0} flexGrow={0}>
            Title
          </Table.TextHeaderCell>
          <Table.TextHeaderCell flexBasis={100} flexShrink={0} flexGrow={0}>
            Status
          </Table.TextHeaderCell>
          <Table.TextHeaderCell>Role</Table.TextHeaderCell>
          <Table.TextHeaderCell
            flexBasis={150}
            flexShrink={0}
            flexGrow={0}
          ></Table.TextHeaderCell>
          <Table.TextHeaderCell
            flexBasis={100}
            flexShrink={0}
            flexGrow={0}
          ></Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={400}>
          {loading ? (
            kpis.map((kpi) => <KPIRow kpi={kpi} />)
          ) : (
            <Spinner marginX="auto" marginY={120} />
          )}
        </Table.Body>
      </Table>
      {/* {openRoleModal && (
        <RoleAllocModal CloseRoleAllocModal={setOpenRoleModal} />
      )} */}
    </>
  );
}

export default TableKpi;
