import { Button, Tooltip } from "@chakra-ui/react";
import React from "react";

const Tool = ({icon,setState,label,update, state, condition}) => {

  return (
    <Tooltip  label={label} hasArrow>
      <Button disabled={state == condition} onClick={() => setState(update)}>
        {icon}
      </Button>
    </Tooltip>
  );
};

export default Tool;
