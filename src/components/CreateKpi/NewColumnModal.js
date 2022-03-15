import React, { useState, useEffect } from "react";
import {
  Dialog,
  Text,
  Heading,
  Pane,
  IconButton,
  TickIcon,
  TextInput,
  EditIcon,
  SelectMenu,
  Button,
  Switch,
  Tooltip,
  HelpIcon,
  Checkbox,
} from "evergreen-ui";
import ColumnRules from "./ColumnRules";

const NewColumnModal = ({ data, handleSetColumnData, isShown, setIsShown }) => {
  const [isEditingHeading, setIsEditingHeading] = useState(false);
  const [newData, setNewData] = useState({ id: data.id, ...data });
  const [isRuleTicked, setIsRuleTicked] = useState(false);
  const [showHelpText, setShowHelpText] = useState(
    data.invalidHelpText ? true : false
  );

  useEffect(() => {
    setNewData({ ...data });
    setIsRuleTicked(data.rule ? true : false);
    setShowHelpText(data.invalidHelpText ? true : false);
  }, [isShown]);

  useEffect(() => {
    setNewData({ ...newData, rule: isRuleTicked });
  }, [isRuleTicked]);

  useEffect(() => {
    try {
      if (!showHelpText) {
        let { invalidHelpText, ...rest } = newData;
        setNewData({ ...rest });
      }
    } catch (e) {}
  }, [showHelpText]);

  useEffect(() => {
    setNewData({ ...newData, rule: null });
    setIsRuleTicked(false);
  }, [newData.type]);

  const options = {
    text: { label: "Text", ruleOptional: true },
    number: { label: "Number", ruleOptional: true },
    date: { label: "Date", ruleOptional: true },
    dropdown: { label: "Dropdown", ruleOptional: false },
    checkbox: { label: "Checkbox", ruleOptional: true },
  };

  const handleUpdateRule = (rule) => {
    setNewData({ ...newData, rule });
  };

  return (
    <Dialog
      isShown={isShown}
      title={<Heading size={600}>Set Validation</Heading>}
      onCloseComplete={() => setIsShown(false)}
      onConfirm={() => {
        handleSetColumnData(data.id, newData);
        setIsShown(false);
      }}
      preventBodyScrolling
      confirmLabel="Apply"
    >
      <Pane>
        <Text className="text-gray-500">Column Header *</Text>
        {isEditingHeading ? (
          <Pane alignItems="center" flexDirection="row" display="flex">
            <TextInput
              className="text-gray-500"
              fontWeight="600"
              placeholder={newData.name}
              value={newData.name}
              onChange={(e) => {
                setNewData({ ...newData, name: e.target.value });
              }}
            />
            <IconButton
              icon={TickIcon}
              appearance="minimal"
              width="30px"
              marginLeft="10px"
              onClick={() => {
                setIsEditingHeading(false);
              }}
            />
          </Pane>
        ) : (
          <Pane alignItems="center" flexDirection="row" display="flex">
            <Heading size={600} className="text-gray-500" fontWeight="600">
              {newData.name}
            </Heading>
            <IconButton
              icon={EditIcon}
              appearance="minimal"
              width="30px"
              marginLeft="10px"
              onClick={() => {
                setIsEditingHeading(true);
              }}
            />
          </Pane>
        )}
      </Pane>
      <Pane
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Pane flex={1} display="flex" flexDirection="column" paddingRight={20}>
          <Text color="gray600" marginTop={20} marginBottom={10}>
            Data Type *
          </Text>
          <SelectMenu
            hasFilter={false}
            hasTitle={false}
            options={Object.keys(options).map((option) => ({
              value: option,
              label: options[option].label,
            }))}
            selected={newData.type}
            onSelect={(item) => {
              setNewData({ ...newData, type: item.value });
            }}
          >
            <Button>{options[newData.type].label || "Select one..."}</Button>
          </SelectMenu>
        </Pane>
        <Pane
          flex={1}
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
        >
          <Pane display="flex" flexDirection="column" width="100%">
            <Text color="gray600" marginTop={20} marginBottom={10}>
              Action for invalid data *
            </Text>
            <Pane
              display="flex"
              flexDirection="row"
              justifyContent="space-around"
            >
              <Pane display="flex" flexDirection="row" alignItems="center">
                <Checkbox
                  checked={
                    newData.invalidAction
                      ? newData.invalidAction === "reject"
                        ? true
                        : false
                      : false
                  }
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      invalidAction: e.target.checked ? "reject" : "warn",
                    });
                  }}
                  size={16}
                  name="invalidAction"
                  label="Reject"
                />
                <Tooltip content="This option will not let the user to enter values of incorrect data type.">
                  <HelpIcon color="gray600" marginLeft={10} size={14} />
                </Tooltip>
              </Pane>
              <Pane display="flex" flexDirection="row" alignItems="center">
                <Checkbox
                  checked={
                    newData.invalidAction
                      ? newData.invalidAction === "warn"
                        ? true
                        : false
                      : false
                  }
                  onChange={(e) => {
                    setNewData({
                      ...newData,
                      invalidAction: e.target.checked ? "warn" : "reject",
                    });
                  }}
                  size={16}
                  name="invalidAction"
                  label="Warn"
                />
                <Tooltip content="This option will only warn the user if they put values of incorrect data type.">
                  <HelpIcon color="gray600" marginLeft={10} size={14} />
                </Tooltip>
              </Pane>
            </Pane>
          </Pane>
        </Pane>
      </Pane>

      {options[newData.type].ruleOptional ? (
        // Optional Rules
        <Pane display="flex" flexDirection="column" flex={3}>
          <Pane
            display="flex"
            flexDirection="row"
            marginTop={20}
            marginBottom={10}
          >
            <Text color="gray600">Rule (optional)</Text>
            {isRuleTicked && (
              <Switch
                marginLeft={10}
                checked={isRuleTicked}
                onChange={(e) => setIsRuleTicked(e.target.checked)}
              />
            )}
          </Pane>
          {!isRuleTicked ? (
            <Switch
              marginLeft={10}
              checked={isRuleTicked}
              onChange={(e) => setIsRuleTicked(e.target.checked)}
            />
          ) : (
            <ColumnRules
              type={newData.type}
              rule={newData.rule}
              handleUpdateRule={handleUpdateRule}
            />
          )}
        </Pane>
      ) : (
        // Required Rules
        <Pane display="flex" flexDirection="column" flex={3}>
          <Pane
            display="flex"
            flexDirection="row"
            marginTop={20}
            marginBottom={10}
          >
            <Text color="gray600">Rule *</Text>
          </Pane>
          <ColumnRules
            type={newData.type}
            rule={newData.rule}
            handleUpdateRule={handleUpdateRule}
          />
        </Pane>
      )}

      <Pane
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
      >
        <Pane display="flex" flexDirection="column" flex={1} paddingRight={20}>
          <Pane
            display="flex"
            flexDirection="row"
            marginTop={20}
            marginBottom={10}
          >
            <Text color="gray600">Show Help Text? (optional)</Text>
            {showHelpText && (
              <Switch
                marginLeft={10}
                checked={showHelpText}
                onChange={(e) => setShowHelpText(e.target.checked)}
              />
            )}
          </Pane>
          <Pane
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            {!showHelpText ? (
              <Switch
                marginLeft={10}
                checked={showHelpText}
                onChange={(e) => {
                  setShowHelpText(e.target.checked);
                }}
              />
            ) : (
              <TextInput
                color="gray700"
                placeholder={"Enter validation help text..."}
                value={newData.invalidHelpText}
                onChange={(e) => {
                  setNewData({ ...newData, invalidHelpText: e.target.value });
                }}
              />
            )}
          </Pane>
        </Pane>
      </Pane>
    </Dialog>
  );
};

export default NewColumnModal;
