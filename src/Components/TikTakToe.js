import React, {useState} from 'react'
import './style.css';

export default function TikTakToe(props) {

  const [turn, setTurn] = useState('X');
  const [cells, setCells] = useState(Array(9).fill(''));
  const [winner, setWinner] = useState();

const checkForWinner = (square) => {
  const combos = {
    across: [
      [0,1,2],
      [3,4,5],
      [6,7,8]
    ],
    down: [
      [0,3,6],
      [1,4,7],
      [2,5,8]
    ],
    diagonal: [
      [0,4,8],
      [2,4,6]
    ]
  };

  for (let combo in combos){
    combos[combo].forEach((pattern) => {
    if(
      square[pattern[0]] === '' ||  square[pattern[1]] === '' ||  square[pattern[2]] === ''
    )  {
      // do nothing
    } 
    else if (square[pattern[0]] === square[pattern[1]] && square[pattern[1]] === square[pattern[2]]){
      setWinner(square[pattern[0]])
      

    }
    });
  }
};


const onClickHandler = (num) => {
  if(cells[num] !== ''){
    alert('Can Not OverWrite!')
    return;
  }
  let square = [...cells];
  if(turn === 'X'){
    square[num] = 'X';
    setTurn('O');
    
    }
    else{
      square[num] = 'O';
      setTurn('X');
    }
    checkForWinner(square)
    setCells(square)
  }

const restartHandler = () => {
  setWinner(null);
  setCells(Array(9).fill(''))
}

// className={`${props.mode === '#cbd5e1'? 'text-zinc-900': 'text-white'}`}
const Cell = (props) => {
  return <td onClick={()=>onClickHandler(props.num)}> {cells[props.num]} </td>
}

return (
<>

  <div className='mt-8 flex flex-col'>
<div className='flex justify-center items-center my-6 mt-10 flex-col '>
<h1 className={`${props.mode === '#cbd5e1'? 'text-slate-900': 'text-cyan-500'} font-bold text-4xl font-serif 	`}>Tik Tak Toe - Game</h1> <br />
        <p className={` mt-3 ${props.mode === '#cbd5e1'? 'text-slate-900': 'text-cyan-700 '} text-2xl font-mono`}>Turn : {turn}</p>
</div>
       <table className='flex justify-center items-center self-center'>
        <tbody className={`${props.mode === '#cbd5e1'? 'text-zinc-900': 'text-white'} ${props.mode === '#cbd5e1'? 'bg-slate-200': 'bg-slate-800'}  `}>
          <tr>
              <Cell num={0}/>
              <Cell num={1}/>
              <Cell num={2}/>
          </tr>
          <tr>
              <Cell num={3}/>
              <Cell num={4}/>
              <Cell num={5}/>
          </tr>
          <tr>
              <Cell num={6}/>
              <Cell num={7}/>
              <Cell num={8}/>
          </tr>
        </tbody>
       </table>
       {winner &&(
        alert(`${winner} won the game`)
        // <p className={`${props.mode === '#cbd5e1'? 'text-slate-900': 'text-amber-400 '}`}>`{winner}` Won The Game</p>
       )}
       <div className='flex justify-center items-center my-7'> 
               <button onClick={()=> restartHandler()} className="bg-blue-700 rounded-md px-3 py-2  text-white">
  Play again
</button>
</div>

    </div>
    </>
  )
}
