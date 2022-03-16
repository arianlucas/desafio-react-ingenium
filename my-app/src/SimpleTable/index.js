import "./index.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export function Table() {
  const rows = [
    {
      id: 1,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Nenhum agente",
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 2,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 3,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 4,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 5,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 6,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 7,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 8,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-verde.png",
    },
    {
      id: 9,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-azul.png",
    },
    {
      id: 10,
      caso: 200121312352134,
      contato: "Pablo Henrique",
      status: "Cancelado",
      empresa: "IngDesk",
      assunto: "Parcelamento",
      solicitacao: "Parcelamento",
      prazo: "01/12/2021",
      tarefas: "02 tarefas",
      agente: "Lucas Silva",
      prioridade: "./imgs/bandeira-verde.png",
    },
  ];

  return (
    <>
      <div className="head-table">
        <div className="container-head">
          <div className="first-column">
            <p className="titles-head">Caso</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Contato</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Status</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Empresa</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Assunto</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Solicitação</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Prazo</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Tarefas</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Agente</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="column-head">
            <p className="titles-head">Prioridade</p>
            <img src="./imgs/filter-table-icon-listas.svg" alt="" />
          </div>
          <div className="last-column">
            <p className="titles-head">Ação</p>
          </div>
        </div>
      </div>
      <div className="body-table">
        {rows.map((row) => (
          <div className="row-body" key={row.id}>
            <div className="first-column-body">
              <p>{row.caso}</p>
            </div>
            <div className="column-body">
              <p>{row.contato}</p>
            </div>
            <div className="column-body">
              <p>{row.status}</p>
            </div>
            <div className="column-body">
              <p>{row.empresa}</p>
            </div>
            <div className="column-body">
              <p>{row.assunto}</p>
            </div>
            <div className="column-body">
              <p>{row.solicitacao}</p>
            </div>
            <div className="column-body">
              <p>{row.prazo}</p>
            </div>
            <div className="column-body">
              <p>{row.tarefas}</p>
            </div>
            <div className="column-body agente">
              <p>{row.agente}</p>
            </div>
            <div className="column-body">
              <img src={row.prioridade} alt="" />
            </div>
            <div className="column-body action">
              <MoreVertIcon />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
