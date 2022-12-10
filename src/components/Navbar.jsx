import React from "react";

function Navbar() {
  return (
    <div className="w-full">
      <div className="navbar bg-base-300 rounded-xl flex justify-between">
        <a
          className="btn btn-ghost normal-case text-xl bg-base-100 border-white "
          href="/"
        >
          <p>Stress Test</p>
        </a>
        <a
          className="btn btn-ghost normal-case text-xl bg-base-100 border-white "
          href="/generate"
        >
          <p>Generate TC</p>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
