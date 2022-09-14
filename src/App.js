import "./App.css";

function App() {
  const createTheDigits = () => {
    const digits = []
    for (let i=1; i < 10; i++){
      digits.push(
        <button>{i}</button>
      )
    }
    return digits
  }

  return (
    <div classname="app-Content">
      <div className="container">
        <div className="display">
          <span>(0)</span> 0
        </div>
        <div className="operators">
          <button>+</button>
          <button>-</button>
          <button>*</button>
          <button>/</button>
          <button>DEL</button>
        </div>

        <div className="digits">
          {createTheDigits()}
          <button>0</button>
          <button>.</button>
          <button>=</button>
        </div>

      </div>
    </div>
  );
}

export default App;
