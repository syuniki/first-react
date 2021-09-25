import React, { useEffect, useRef, useState } from 'react';   // インポート

const Counter: React.FC<{}> = () => {
    const initialValue: any = 0;
    const [value, setValue] = useState<number>(initialValue);

    const increment = () => {
        setValue((prevState) => prevState + 1);
    };
    const decrement = () => {
        setValue((prevState) => prevState - 1);
    };

    const renderTimes = useRef<number>(0);
    useEffect(() => {  // useEffect に渡された関数はレンダーの結果が画面に反映された後に動作する
        renderTimes.current += 1;
        console.log('render was done.');
    });

    const ref = useRef<HTMLInputElement>(null); // null! ← non null assertion operator (実際のデータにはnullはわたらないよいう明示的な表示)
    const focusInput = () => {
        // if(ref.current !== null) {
        //     ref.current.focus();
        // }
        ref.current?.focus();  // ref.corrent が null の場合に処理をやめてくれる
    }

    return (
        <div>
            <div>value : { value }</div>
            <button onClick={increment}>+1</button>
            <button onClick={decrement}>-1</button>
            <div>This component was re-rendered { renderTimes.current } times!</div>
            <input ref={ref} type="text" />
            <button onClick={focusInput}>Click Me!</button>
        </div>
    );
};

export default Counter;