import React from "react"
import Menu  from "../Menu"
class Navigation extends React.Component {

  render() {
    return (
      <>
        <button onClick={() => this.toggleMenu()}>
          Open Menu
        </button>

        <Menu ref={el => (this.childMenu = el)} />
      </>
    )
  }

  toggleMenu() {
    this.childMenu.open()
  }
}

export default Navigation

