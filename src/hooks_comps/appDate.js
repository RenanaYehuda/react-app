import React, { useState } from "react";
import DateInput from "./dateInput";
import DateView from "./dateView";

const AppDate = () => {
  const [deadLine, setDeadLine] = useState("2024-01-01");
  return (
    <div>
      <DateView deadLine={deadLine} />
      <DateInput setDeadLine={setDeadLine} />
    </div>
  );
};

export default AppDate;
