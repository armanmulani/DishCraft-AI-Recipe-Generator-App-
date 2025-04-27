import logo from "../images/DishCraft-logo.png"
export default function Header() {
    return (
        <div>
            <nav className="nav-conatiner">
                <img src={logo} alt="DishCraft Logo" width = "80px"/>
                <h1>Dish Craft</h1>
            </nav>
        </div>
    )
}