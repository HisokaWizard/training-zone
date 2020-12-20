import { makeStyles } from '@material-ui/core';
import React, { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';

const useStyles = makeStyles({
  page: {
    color: 'red',
  }
});

export const WebSocketComponent = () => {
  const classes = useStyles();
  const [statusConnection, setStatusConnection] = useState((): string => '');
  const [statusDisconnection, setStatusDisconnection] = useState((): string => '');
  const [statusData, setStatusData] = useState((): string => '');
  const [statusError, setStatusError] = useState((): string => '');
  const [name, setName] = useState((): string => '');
  const [text, setText] = useState((): string => '');
  const [inProgress, setInProgress] = useState((): boolean => false);

  const bigArray = useMemo(() => {
    const bigArr = [];
    for (let index = 0; index < 1000000; index++) {
      bigArr.push(index);
    }
    return bigArr;
  }, []);

  const socket = useMemo(() => {
    return new WebSocket('ws://echo.websocket.org');
  }, []);

  useEffect(() => {
    socket.onopen = (event: Event) => {
      setStatusConnection('Connection success');
    };
    socket.close = (code: number, reason: string) => {
      setStatusDisconnection(`Connection closed: ${code}, reason: ${reason}`);
    };
    socket.onmessage = (event: MessageEvent) => {
      setStatusData(event.data);
    };
    socket.onerror = (event: Event) => {
      setStatusError(event.type + ' some error...');
    };
  }, [])

  const customOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    socket.send(`Name: ${name}; Text: ${text}; `);
  }

  const closeSocket = () => {
    socket.close();
  }

  const onInputTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    switch(event.target.name) {
      case 'name': 
        return setName(event.target.value);
      case 'text': 
        return setText(event.target.value);
      default:
        return;
    }
  }

  const hugeSocketDataDump = () => {
    setInProgress(true);
    if (inProgress) {
      return;
    }
    let message = '';
    for (let index = 0; index < bigArray.length; index++) {
      message = `${String(bigArray[index])} `;
      socket.send(String(message));
    }
  }

  return (
    <div>
      <button onClick={hugeSocketDataDump} disabled={inProgress}>Start sending big data</button>
      <form action='' onSubmit={customOnSubmit}>
        <div>Name: <input type='text' name='name' onChange={onInputTextChange}/></div>
        <div>Text: <input type='text' name='text' onChange={onInputTextChange}/></div>
        <div><input type='submit'/></div>
      </form>
      <div>Connection: {statusConnection}</div>
      <div>Disconnection: {statusDisconnection}</div>
      <div>Data: {statusData}</div>
      <div>Error: {statusError}</div>
      <button onClick={closeSocket}>Close web socket</button>
    </div>
  )
}