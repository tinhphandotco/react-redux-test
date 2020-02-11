import React, { Component, useState, useEffect } from "react";
import { createSelector } from "reselect";
import { connect } from "react-redux";

function Header() {
  return <div>Header</div>;
}
function HeaderareEqual(prevProps, nextProps) {
  if (prevProps.num.value === nextProps.num.value) {
    return true;
  }
  return false;
  /* Trả về true nếu nextProps bằng prevProps, ngược lại trả về false */
}
const HeaderX = React.memo(Header, HeaderareEqual);

function Counter(props) {
  console.log('Counter RENDER', props);

  useEffect(() => {
    setTimeout(() => {
      props.dispatch({
        type: 'TANG_LEN_SO_3'
      })
    }, 2000);
  }, [])

  return (
    <div>Counter</div>
  )
}

const CounterContainer = connect(
  (store) => {
    return {
      countClick: store.counters.countClick
    }
  }
)(Counter);

function CountType(props) {
  console.log('CountType RENDER', props);

  return (
    <div>
      CountType: {props.countType.value}
      <div>
        {
          props.usersWithStatus.map(user => (
            <p key={user.name}>Name: {user.name}</p>
          ))
        }
      </div>
    </div>
  )
}

const getUserWithStatusSelector = createSelector(
  store => store.counters.users,
  (users) => users,
  // (users, userStatus) => users.filter(user => user.status === userStatus)
)

const CountTypeContainer = connect(
  (store) => {
    return {
      usersWithStatus: getUserWithStatusSelector(store),
      countType: store.counters.countType
    }
  }
)(CountType);

function Test(props) {
  const [num] = useState({
    value: 2,
    type: "number"
  });

  useEffect(() => {}, []);

  return (
    <div>
      {/* <h1>Test</h1> */}

      {/* <HeaderX num={num} /> */}

      <CounterContainer />
      <CountTypeContainer />
    </div>
  );
}

export default Test;
