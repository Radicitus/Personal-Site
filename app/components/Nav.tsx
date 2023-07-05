"use client";

export default function Nav({ children }: { children: React.ReactNode }) {
  return (
    // <div className="navbar bg-base-100">
    //   <div className="navbar-start">
    //     <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    //   </div>
    //   <div className="navbar-center"></div>
    //   <div className="navbar-end">
    //     <button className="btn btn-ghost btn-circle">
    //       <div className="indicator">
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           className="h-5 w-5"
    //           fill="none"
    //           viewBox="0 0 24 24"
    //           stroke="currentColor"
    //         >
    //           <path
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //           />
    //         </svg>
    //         <span className="badge badge-xs badge-primary indicator-item"></span>
    //       </div>
    //     </button>
    //   </div>
    // </div>

    <div className="drawer">
      <input id="nav-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full h-14 navbar bg-base-100">
          <div className="flex-none md:hidden">
            <label htmlFor="nav-drawer" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <a href="/" className="btn btn-ghost font-mohave text-2xl">
              CS
            </a>
          </div>
          <div className="flex-none hidden md:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Experience</a>
              </li>
              <li>
                <a>Projects</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Page content here */}
        {children}
      </div>
      <div className="drawer-side">
        <label htmlFor="nav-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Experience</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
