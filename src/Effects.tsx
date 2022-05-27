import { subscribe, unsubscribe } from './resources/API';
import { useState, useEffect } from 'react';

export function Effects(props: { sourceId: string }) {
    const [lastMessage, setLastMessage] = useState(-1);

    const messageHandler = (message: number) => setLastMessage(message);

    useEffect(() => {
        subscribe(props.sourceId, messageHandler);
        return () => {
            unsubscribe(props.sourceId, messageHandler);
            setLastMessage(-1);
        };
    }, [props.sourceId]);

    return (
        <div>
            <h1>
                {props.sourceId}: {lastMessage}
            </h1>
        </div>
    );
}
