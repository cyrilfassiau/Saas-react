import { Link } from "react-router-dom"

export default function Header(){
    return(


 <header>
      <div class="header">
        <div class="nameLogo"><Link to="/">Invoicely</Link></div>
        <nav>
          <Link to="/features">Features</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
        <div class="logButtons">
          <span>Log in</span>
          <button>Start for free</button>
        </div>
      </div>
    </header>


    )
}

