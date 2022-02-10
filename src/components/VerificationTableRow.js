import {
  Button,
  CircleArrowDownIcon,
  EyeOnIcon,
  EyeOpenIcon,
  Pane,
  Pill,
  Table,
  Tooltip,
} from "evergreen-ui";
import { useEffect, useState } from "react";
import KpiReceiveModal from "./modals/KpiReceiveModal";
import { users } from "../data/UserData";
import KpiVerifiedModal from "./modals/KpiVerifiedModal";

function VerificationTableRow({ kpi }) {
  const [title, setTitle] = useState("");
  const [isShown, setIsShown] = useState(false);
  const [isShown2, setIsShown2] = useState(false);
  const [counter1, setCounter1] = useState("");
  const [counter2, setCounter2] = useState("");
  const counterPill1 = () => {
    var count = Object.keys(users).length;
    setCounter1(`${count}`);
    console.log(counter1);
  };
  const counterPill2 = () => {
    var count = Object.keys(users).length;
    setCounter2(`${count}`);
    console.log(counter1);
  };
  useEffect(() => {
    counterPill1();
    counterPill2();
  }, []);
  return (
    <Pane>
      <Table.Row key={kpi.kpi_data_id} isSelectable>
        <Table.TextCell appearance="default">
          {kpi.kpi_data_name}
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Verify Incoming Data">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={EyeOpenIcon}
              color="orange"
              onClick={() => {
                setIsShown(true);
                counterPill1();
              }}
            >
              Verify Data
            </Button>
          </Tooltip>
          {}
        </Table.TextCell>
        <Table.TextCell>
          <Tooltip content="Verified Data">
            <Button
              marginY={8}
              marginRight={12}
              iconBefore={EyeOnIcon}
              color="green"
              onClick={() => {
                setIsShown2(true);
              }}
            >
              Verified Data
            </Button>
          </Tooltip>
        </Table.TextCell>
      </Table.Row>
      <KpiReceiveModal
        setIsShown={setIsShown}
        isShown={isShown}
        title={kpi.kpi_data_name}
      />
      <KpiVerifiedModal
        setIsShown={setIsShown2}
        isShown={isShown2}
        title={kpi.kpi_data_name}
      />
    </Pane>
  );
}

export default VerificationTableRow;
