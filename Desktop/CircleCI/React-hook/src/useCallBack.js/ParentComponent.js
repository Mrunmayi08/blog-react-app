import React, { useCallback, useState } from "react";
import Button from "./Button";
import Count from "./Count";
import Title from "./Title";

const ParentComponent = () => {
  const [age, setAgevalue] = useState(25);
  const [salary, setSalary] = useState(5000);
  const [reset, setReset] = useState(0);
  const setAge = useCallback(() => {
    setAgevalue(age + 1);
  }, [age]);

  const setsalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  const handleReset = useCallback(() => {
    setAgevalue(25);
    setSalary(5000);
  }, [reset]);
  return (
    <div>
      <Title />
      <Count text="Age" count={age} />
      <Button onclick={setAge} text="Age Button" />
      <Count text="salary" count={salary} />
      <Button onclick={setsalary} text="salary button" />
      <Button onclick={handleReset} text="reset button" />
    </div>
  );
};

export default ParentComponent;
