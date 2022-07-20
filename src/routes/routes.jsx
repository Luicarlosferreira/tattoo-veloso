import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ScrollToTop } from "./ScrollToTop";
import { Header } from "../components/Header";
import { Works } from "../pages/works/index";
import { Home } from "../pages/home/index";
import { Footer } from "../components/footer/index";
import { Form } from "../pages/form/index";
import { ModalSubmit } from "../components/modalSubmit/index";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />

      <ScrollToTop>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="works" element={<Works />} />
          <Route path="form" element={<Form />} />
          <Route path="submit" element={<ModalSubmit />} />
          {/* <Route path="*" element={<>} /> */}
        </Routes>
      </ScrollToTop>
      <Footer />
    </BrowserRouter>
  );
};
