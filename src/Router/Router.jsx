import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "../views/Home"
import { Projects } from "../views/Projects"

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}
