import React, {useState, useEffect} from 'react';
import socket from './Socket.js';

export const UseFile = () => {

    const [count, setCount] = useState(
        {
        data:[]
    });
    
    useEffect(()=>{
        socket.on('textfile',fileChanged => {
            let div2 = [];
            let div1 = fileChanged.split('\n');
            for (let index = 0; index < div1.length; index++) {
                div2[index] = div1[index].split(',');
            }
            count.data = div2;
            setCount({data:div2});
        });
    },[]);

    return (
        <>
        <table>
            <tbody>
            
            {count.data.map((value,i) => 
            <tr key={i}>
                {value.map((val, index)=>
                   <td key={index}>
                       {val}
                   </td>
                )}
            </tr>
        )}
        </tbody>
        </table>
        </>
        );
}
