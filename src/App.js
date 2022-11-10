import React from "react";
const AuthApp = React.lazy(() => import("Auth/App"));

function App() {
  return (
    <div>
      <div>This is Home module</div>
      <AuthApp />
    </div>
  );
}

export default App;
