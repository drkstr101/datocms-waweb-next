import React from "react"

// reactstrap components

// core components

function IndexHeader() {
  return (
    <>
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("assets/img/cover.jpg").default + ")",
        }}
      >
        <div className="filter" />
        <div className="content-center">
          <div className="motto">
            <h1 className="text-center">Watheia Labs</h1>
            <h3 className="text-center">Components</h3>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexHeader
