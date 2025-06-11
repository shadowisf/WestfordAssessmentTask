import { useState } from "react";
import Nav from "./Nav";
import Header from "./Header";
import ProgramsModal from "./ProgramsModal";

export default function NavBar() {
  const [programsOpen, setProgramsOpen] = useState(false);
  const [deMontPlusOpen, setDeMontPlusOpen] = useState(false);

  return (
    <main className="font-poppins font-medium">
      <Header />

      <Nav
        programsOpen={programsOpen}
        setProgramsOpen={setProgramsOpen}
        deMontPlusOpen={deMontPlusOpen}
        setDeMontPlusOpen={setDeMontPlusOpen}
      />

      <ProgramsModal
        programsOpen={programsOpen}
        setProgramsOpen={setProgramsOpen}
      />
    </main>
  );
}
