import image from "./images/Globe.png"
export default function NavBar(){
  return(
    <nav className="Nav-bar">
      <img src={image} className="Nav-img"/>
        <h3 className="Nav-title">my travel journal.</h3>
    </nav>
  )

}