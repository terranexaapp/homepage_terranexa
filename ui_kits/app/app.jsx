/* TerraNexa app UI kit — interactive shell (navigation between screens). */
(function () {
const { FazendasScreen, MapaScreen, MonitoramentoScreen, CentralOSScreen, NovaOSModal, SoloScreen, ChuvaScreen, ExecutarOSModal } = window.TNXAppScreens;

function App() {
  const [view, setView] = React.useState("fazendas"); // fazendas|mapa|monit|os|solo|chuva
  const [novaOS, setNovaOS] = React.useState(false);
  const [executar, setExecutar] = React.useState(false);

  return (
    <div className="tnx-app">
      <div className="tnx-phone">
        {view === "fazendas" && <FazendasScreen onOpenFarm={() => setView("mapa")} />}
        {view === "mapa" && <MapaScreen onMenu={() => setView("fazendas")} onMonitor={() => setView("monit")}
          onOS={() => setView("os")} onSolo={() => setView("solo")} onChuva={() => setView("chuva")} />}
        {view === "monit" && <MonitoramentoScreen onBack={() => setView("mapa")} />}
        {view === "solo" && <SoloScreen onBack={() => setView("mapa")} />}
        {view === "chuva" && <ChuvaScreen onBack={() => setView("mapa")} />}
        {view === "os" && <CentralOSScreen onBack={() => setView("mapa")} onNova={() => setNovaOS(true)} onExecutar={() => setExecutar(true)} />}
        {novaOS && <NovaOSModal onClose={() => setNovaOS(false)} />}
        {executar && <ExecutarOSModal onClose={() => setExecutar(false)} />}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
