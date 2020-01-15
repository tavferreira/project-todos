import React from "react";
import { useDispatch } from "react-redux";
import { tasks } from "../reducers/tasks";
import styled from "styled-components";

export const Task = props => {
  const dispatch = useDispatch();

  const handleCheckboxClick = () => {
    dispatch(tasks.actions.markComplete(props.task.id));
  };

  return (
    <Item>
      <label>
        <Check
          type="checkbox"
          checked={props.task.complete}
          onChange={handleCheckboxClick}
        />
      </label>
      {props.task.text}
    </Item>
  );
};

const Item = styled.li`
  height: 85px;
  list-style: none;
  width: 100%;
  background-color: #fdfdfd;
  margin-bottom: 2px;
  border-bottom: 2px solid #f0f0f0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 20px;
`;

const Check = styled.input`
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  vertical-align: middle;
  border: 1px solid #5071f2;
  outline: none;
  margin: 0px 20px;

  &:checked {
    background-color: #5071f2;
    color: #fff;
  }
`;
