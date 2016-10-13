function WaitingPanel({show}) {
  if (show){
    return (
      <div className="waiting">
        <svg width='120px' height='120px' viewBox="0 0 100 100" preserveAspectRatio="xMidYMid" className="uil-ripple">
          <rect x="0" y="0" width="200" height="200" fill="none" className="bk"></rect>
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="50" cy="50" r="120" stroke="#1fc8db" fill="none" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="0s" keyTimes="0;0.33;1" values="0;22;44"></animate>
            </circle>
          </g>
          <g>
            <animate attributeName="opacity" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="1;1;0"></animate>
            <circle cx="50" cy="50" r="40" stroke="#ed6c63" fill="none" strokeWidth="6" strokeLinecap="round">
              <animate attributeName="r" dur="2s" repeatCount="indefinite" begin="1s" keyTimes="0;0.33;1" values="0;22;44"></animate>
            </circle>
          </g>
        </svg>
      </div>)
  } 
  return null
}

export default WaitingPanel