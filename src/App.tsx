import React from "react";
import { JSX } from "react";
import { BrowserRouter,  Route, Routes } from "react-router-dom";
import Landing from "./pages/landing";
import Dashboard from "./pages/dashboard";
import Redirect from "./pages/redirect";
import Auth from "./pages/auth";
import Link from "./pages/link";
import AppLayout from "./layouts/applayout";


function App(): JSX.Element {

  return (

  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout/>}>
        <Route path="/" element= {<Landing/>}></Route>
        <Route path="/dashboard" element= {<Dashboard/>}></Route>
        <Route path="/link/:id" element= {<Link/>}></Route>
        <Route path="/:id" element= {<Redirect/>}></Route>
        <Route path="/auth" element= {<Auth/>}></Route>
        </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App
