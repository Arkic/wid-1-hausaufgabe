import "./styles.css";

export default function App() {
  return (
    <div className="App">
      {/*Dein Code unter dieser Zeile  */}
      <h1>Fachhochschule Nordwestschweiz</h1>

      <div className="Container">
        <div className="linke_spalte"><p>Die <a href="https://www.fhnw.ch/de/architektur-bau-geomatik/ueber-uns/institute/geomatik" target="_blank">
        Fachhochschule Nordwestschweiz</a><strong> (FHNW) </strong>
        ist eine Fachhochschule in der Schweiz und ist in der Lehre, 
        Forschung, Weiterbildung und Dienstleistung tätig. 
        Sie ist eine interkantonale öffentlich-rechtliche 
        Anstalt mit <strong>eigener Rechtspersönlichkeit.</strong></p></div>
        <div className="rechte_spalte"><h2 className="box_titel">Fachhochschule 
        Nordwestschweiz</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/FHNW_Logo.svg" alt="Fhnw Logo" width="200" crossOrigin="anonymous" />
        <div className="fakt_zeile">
          <div className="fakt_name">Gründung:</div>
          <div className="fakt_wert">2006</div>
        </div>
        <div className="fakt_zeile">
          <div className="fakt_name">Trägerschaft:</div>
          <div className="fakt_wert">Kantone <a href="https://www.ag.ch/" target="_blank">Aargau</a>,{" "}
            <a href="https://www.baselland.ch/" target="_blank">Basel-Landschaft</a>,{" "}
            <a href="https://www.bs.ch/" target="_blank">Basel-Stadt</a>
          </div>
        </div>
        </div>
      </div>












        {/*Dein Code über dieser Zeile  */}
    </div>
  );
}
