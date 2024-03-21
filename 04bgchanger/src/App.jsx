import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="className='w-full h-screen duration-200'"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center px-4 py-2 gap-3 rounded-xl bg-white shadow-lg">
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "red" }}
            onClick={() => setColor('red')}
          >
            red
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "orange" }} onClick={() => setColor('orange')}>
            orange
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "yellow" }} onClick={() => setColor('yellow')}>
            yellow
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "green" }} onClick={() => setColor('green')}>
            green
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "grey" }} onClick={() => setColor('grey')}>
            grey
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "blue" }} onClick={() => setColor('blue')}>
            blue
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "brown" }} onClick={() => setColor('brown')}>
            brown
          </button>
          <button className="px-4 py-1 rounded-full text-white shadow-lg outline-none" style={{ backgroundColor: "silver" }} onClick={() => setColor('silver')}>
            silver
          </button>
        </div>
      </div>

    </div>
  )
}

export default App
