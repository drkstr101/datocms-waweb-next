import React from "react"

// reactstrap components

// core components

function DemoPageHeader() {
  document.documentElement.classList.remove("nav-open")
  React.useEffect(() => {
    document.body.classList.add("product-page")
    return function cleanup() {
      document.body.classList.remove("product-page")
    }
  })
  return (
    <>
      <div
        className="page-header page-header-xs"
        style={{
          backgroundImage:
            "url(" +
            require("assets/img/sections/clark-street-mercantile.jpg").default +
            ")",
        }}
      >
        <div className="filter" />
      </div>
    </>
  )
}

export default DemoPageHeader
